"use server";

import { LectureBookmark, StudyBookmark } from "@/schema/bookmarkSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { revalidatePath } from "next/cache";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { TStudyRecruitCardData } from "@/types/api/study";

export const getStudyBookmarkListAction = async () => {
  await connectDB();

  const session = await getSession();
  const userId = session?.user?.id;
  if (!userId) throw new Error("유저 정보가 없습니다.");

  try {
    const userStudyBookmarkList = await StudyBookmark.find({ userId }).lean();

    const getStudyInfo = async (id: string) => {
      try {
        const response = await fetch(`${process.env.LOCAL_URL}/api/study/${id}`);
        const data = await response.json();
        return data.study;
      } catch (error) {
        console.error("Error fetching study", error);
        throw error;
      }
    };

    const studyBookmarkDataPromises = userStudyBookmarkList.map((bookmark: any) => getStudyInfo(bookmark.studyId));
    const studyBookmarkList = await Promise.all(studyBookmarkDataPromises);

    const processedStudyBookmarks: TStudyRecruitCardData[] = await Promise.all(
      studyBookmarkList.map(async (study) => {
        const { _id, ownerId, category, title, imageUrl, startDate, endDate, meeting, wantedMember } = study;
        const teamMembers = await TeamMembers.findOne({ studyId: _id });
        const acceptedTeamMembers = teamMembers.members.filter((member: any) => member.status === "ACCEPTED");

        const acceptedCount = acceptedTeamMembers ? acceptedTeamMembers.length : 0;
        const wantedMemberCount = wantedMember?.count || "제한없음";
        return {
          id: _id.toString(),
          ownerId,
          category,
          title,
          imageUrl,
          startDate,
          endDate,
          meeting,
          wantedMemberCount,
          acceptedTeamMemberCount: acceptedCount,
          isBookmarked: true,
        };
      }),
    );

    revalidatePath("/mypage", "layout");

    return processedStudyBookmarks;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const getLectureBookmarkListAction = async () => {
  await connectDB();

  const session = await getSession();
  const userId = session?.user?.id;
  if (!userId) throw new Error("유저 정보가 없습니다.");

  try {
    const userLectureBookmarkList = await LectureBookmark.find({ userId }).lean();

    const fetchLectureData = async (lectureId: string) => {
      const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}`);

      if (!response.ok) {
        throw new Error("강의 불러오기 실패");
      }

      const data = await response.json();
      return data.lecture;
    };

    const lectureDataPromises = userLectureBookmarkList.map((bookmark: any) => fetchLectureData(bookmark.lectureId));
    const lectureBookmarkData = await Promise.all(lectureDataPromises);

    const processedlectureBookmarks = await Promise.all(
      lectureBookmarkData.map(async (lecture) => {
        const { _id, online, category, platform, rating, title, instructor } = lecture;

        return {
          id: _id.toString(),
          online,
          category,
          platform,
          rating,
          title,
          instructor,
          isBookmarked: true,
        };
      }),
    );

    revalidatePath("/mypage", "layout");

    return processedlectureBookmarks;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
