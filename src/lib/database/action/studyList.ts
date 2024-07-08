"use server";

import { revalidatePath } from "next/cache";

const SAMPLE_STUDY = {
  id: 1,
  category: "DEVELOP",
  ownerId: 123,
  dashboardId: 123,
  lectureId: 123,
  title: `예시 스터디 ${new Date().toTimeString()}`,
  imageUrl: "https://picsum.photos/200/300",
  description: "이 스터디에 대한 소개",
  meetingFormat: "ONLINE",
  meetingPlatform: "Zoom",
  meetingSchedule: {
    day: "월요일",
    time: "오전 10시",
  },
  startDate: new Date("2024-07-15"),
  endDate: new Date("2024-08-30"),
  status: "RECRUIT_START",
  moodKeywords: ["열정적인 분위기", "친절한 분위기"],
  task: ["과제1", "과제1"],
};

export const createStudyAction = async () => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SAMPLE_STUDY),
    });

    if (!response.ok) {
      throw new Error("스터디 개설 실패");
    }

    revalidatePath("/study-schema-test");
  } catch (error: any) {
    console.log("error", error.message);
  }
};

export const deleteStudyAction = async (formData: FormData) => {
  try {
    const _id = formData.get("_id");
    if (!_id) throw new Error("스터디 정보가 없습니다.");

    const response = await fetch(`${process.env.LOCAL_URL}/api/study-list`, {
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
