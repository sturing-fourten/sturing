"use server";

import { LectureBookmark, StudyBookmark } from "@/schema/bookmarkSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { revalidatePath } from "next/cache";

export const getBookmarkListAction = async (type: string) => {
  await connectDB();

  const session = await getSession();
  const userId = session?.user?.id;
  if (!userId) throw new Error("유저 정보가 없습니다.");

  try {
    let userBookmarkList;

    if (type === "lecture") {
      userBookmarkList = await LectureBookmark.find({ userId }).lean();
    } else if (type === "study") {
      userBookmarkList = await StudyBookmark.find({ userId }).lean();
    } else {
      throw new Error("Invalid type");
    }

    revalidatePath("/mypage", "layout");

    return userBookmarkList;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
