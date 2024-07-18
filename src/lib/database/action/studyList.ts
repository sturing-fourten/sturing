"use server";

import { revalidatePath } from "next/cache";
import mongoose from "mongoose";
import { getSession } from "../getSession";

const SAMPLE_STUDY = {
  category: "DEVELOP",
  lectureId: "668a69466e35d46f28129a90",
  title: `예시 스터디 ${new Date().toTimeString()}`,
  imageUrl: "https://picsum.photos/200/300",
  description: "이 스터디에 대한 소개",
  meeting: {
    format: "ONLINE",
    platform: "Zoom",
    schedule: {
      day: "월요일",
      time: "오전 10시",
    },
  },
  startDate: new Date("2024-07-18"),
  endDate: new Date("2024-08-30"),

  moodKeywords: ["열정적인 분위기", "친절한 분위기"],
  task: ["과제1", "과제1"],
};
export const createStudyAction = async () => {
  try {
    const session = await getSession();
    const userId = session?.user?.id;
    if (!userId) throw new Error("유저 정보가 없습니다.");

    const newStudy = {
      ownerId: userId,
      /**
       * @todo SAMPLE_STUDY 실 입력 데이터로 변경
       */
      category: SAMPLE_STUDY.category,
      lectureId: SAMPLE_STUDY.lectureId,
      title: SAMPLE_STUDY.title,
      imageUrl: SAMPLE_STUDY.imageUrl,
      description: SAMPLE_STUDY.description,
      meeting: SAMPLE_STUDY.meeting,
      startDate: SAMPLE_STUDY.startDate,
      endDate: SAMPLE_STUDY.endDate,
      moodKeywords: SAMPLE_STUDY.moodKeywords,
      task: SAMPLE_STUDY.task,
    };

    const response = await fetch(`${process.env.LOCAL_URL}/api/study`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudy),
    });

    if (!response.ok) {
      throw new Error("스터디 개설 실패");
    }

    revalidatePath("/recruit");
  } catch (error: any) {
    console.log("error", error.message);
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
