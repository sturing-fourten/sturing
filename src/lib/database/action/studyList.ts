"use server";

import { revalidatePath } from "next/cache";
import mongoose from "mongoose";
import { getSession } from "../getSession";
import { TStudyListQuery } from "@/types/filter";

export const getStudyListAction = async (query: TStudyListQuery, page: number) => {
  const { categories, locations, levels, search, roles, memberCount, startDate, endDate, sortBy } = query;
  const categoryQuery = categories.length > 0 ? categories.join() : "";
  const locationQuery = locations.length > 0 ? locations.join() : "";
  const roleQuery = roles.length > 0 ? roles.join() : "";
  const levelQuery = levels.length > 0 ? levels.join() : "";
  const searchQuery = search && search.trim();
  const memberCountQuery = memberCount > 1 ? memberCount : "";
  const startDateQuery = startDate || "";
  const endDateQuery = endDate || "";

  const filterQuery = `search=${searchQuery}&category=${categoryQuery}&location=${locationQuery}&memberCount=${memberCountQuery}&startDate=${startDateQuery}&endDate=${endDateQuery}&level=${levelQuery}&role=${roleQuery}`;
  const session = await getSession();
  const userId = session?.user?.id || "";

  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study/list?sortBy=${sortBy}&${filterQuery}&page=${page}&pageSize=6`,
      {
        headers: {
          Authorization: "Bearer " + userId,
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw console.error("Failed to fetch data");
    }
    const data = await res.json();
    revalidatePath("/search/result");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteStudyAction = async (formData: FormData) => {
  try {
    const _id = formData.get("_id");
    if (!_id) throw new Error("스터디 정보가 없습니다.");

    const response = await fetch(`${process.env.LOCAL_URL}/api/study`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_id),
    });

    if (!response.ok) {
      throw new Error("스터디 삭제 실패");
    }

    revalidatePath("/study-schema-test");
  } catch (error: any) {
    console.log("error", error.message);
  }
};
