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

    const getStudyInfo = async (bookmark: any) => {
      const { studyId } = bookmark;
      try {
        if (!studyId) return null;
        const response = await fetch(`${process.env.LOCAL_URL}/api/study/${studyId}`);
        if (!response.ok) throw new Error("스터디 정보를 가져오는 데 실패했습니다.");
        const data = await response.json();
        return data.study;
      } catch (error) {
        console.error("Error fetching study", error);
        return null;
      }
    };

    const studyBookmarkDataPromises = userStudyBookmarkList.map(getStudyInfo);
    const studyBookmarkList = await Promise.all(studyBookmarkDataPromises);

    const processedStudyBookmarks = await Promise.all(
      studyBookmarkList
        .filter((study) => study !== null)
        .map(async (study) => {
          const { _id, ownerId, category, title, imageUrl, startDate, endDate, meeting, wantedMember } = study;
          const teamMembers = await TeamMembers.findOne({ studyId: _id });
          const acceptedTeamMembers = teamMembers?.members.filter((member: any) => member.status === "ACCEPTED") || [];

          const acceptedCount = acceptedTeamMembers.length;
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

    revalidatePath("/mypage/scrap");

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

    const fetchLectureData = async (bookmark: any) => {
      const { lectureId } = bookmark;
      try {
        if (!lectureId) return null;
        const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}`);
        if (!response.ok) throw new Error("강의 불러오기 실패");
        const data = await response.json();
        return data.lecture;
      } catch (error) {
        console.error("Error fetching lecture", error);
        return null;
      }
    };

    const lectureDataPromises = userLectureBookmarkList.map(fetchLectureData);
    const lectureBookmarkData = await Promise.all(lectureDataPromises);

    const processedLectureBookmarks = await Promise.all(
      lectureBookmarkData
        .filter((lecture) => lecture !== null)
        .map(async (lecture) => {
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

    return processedLectureBookmarks;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
