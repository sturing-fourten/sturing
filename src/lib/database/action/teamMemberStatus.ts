"use server";

import { TeamMembers } from "@/schema/teamMemberSchema";
import connectDB from "../db";
import { Study } from "@/schema/studySchema";
import { revalidatePath } from "next/cache";
import { getSession } from "../getSession";

export async function endRecruit(formData: FormData) {
  const studyId = formData.get("studyId");
  const session = await getSession();
  const userId = session?.user?.id;

  try {
    const res = await fetch(`${process.env.LOCAL_URL}/api/my-study/${studyId}/recruit-end`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + userId,
      },
    });
    if (!res.ok) {
      console.error("모집완료를 실패했습니다.");
    }
    revalidatePath(`/study/${studyId}`);
  } catch (error) {
    console.log(error);
  }
}

export async function leaveTeamMember(formData: FormData) {
  const studyId = formData.get("studyId");
  const session = await getSession();
  const userId = session?.user?.id;

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study/${studyId}/apply-cancel`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + userId,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "지원 취소하기 실패");
    }

    revalidatePath("/mystudy/waiting");
    revalidatePath(`/study/${studyId}`);
  } catch (error: any) {
    console.error("Error fetching Image:", error.message);
  }
}
