"use server";

import { User } from "@/schema/userSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { Matching } from "@/schema/matchingSchema";
import { TCategory, TStudyRecruitCardData } from "@/types/api/study";
import { revalidatePath } from "next/cache";

export async function matchingAction(formData: FormData) {
  const levels = formData.get("levels");
  const progressWay = formData.get("progressWay");
  const locations = formData.get("locations");
  const locationIsVisible = formData.get("locationIsVisible");
  const moods = formData.get("moods");

  connectDB();

  const session = await getSession();
  const id = session?.user?.id;
  const existingUser = await User.findById(id);
  const existingMatching = await Matching.findOne({
    userId: id,
  });
  if (existingUser) {
    if (!existingMatching) {
      await new Matching({
        userId: existingUser._id,
        levels: levels,
        progressWay: progressWay,
        locations: locations,
        locationIsVisible: locationIsVisible,
        moods: moods,
      }).save();
    } else {
      await Matching.findOneAndUpdate(
        { userId: existingUser._id },
        {
          levels: levels,
          progressWay: progressWay,
          locations: locations,
          locationIsVisible: locationIsVisible,
          moods: moods,
        },
      );
    }
  }
}

export async function getMatchingStudyList(): Promise<{
  studyList: TStudyRecruitCardData[];
  userNickname: string | null;
  userCategory: TCategory | null;
}> {
  const session = await getSession();
  const id = session?.user?.id;
  if (!session) {
    console.error("로그인하지 않은 유저 입니다.");
  }

  const matching = await Matching.findOne({ userId: id });
  const userNickname = (await User.findById(id)).nickname;

  const repLevel = JSON.parse(matching?.levels || "[]")[0];
  const userCategory = repLevel?.interest;

  try {
    const res = await fetch(`${process.env.LOCAL_URL}/api/study/list?category=${userCategory}&pageSize=6`);
    const data = await res.json();
    const { studyList } = data;
    const matchingSuccessData = {
      studyList,
      userNickname,
      userCategory,
    };

    return matchingSuccessData;
  } catch (error) {
    console.error(error);
    return { studyList: [], userNickname: null, userCategory: null };
  }
}
