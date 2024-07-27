"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../db";
import { Application } from "@/schema/applicationSchema";

export const cancleApply = async (studyId: string, userId: string) => {
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
    throw error;
  }
};

export const getApplication = async (studyId: string, userId: string) => {
  await connectDB();

  try {
    const application = await Application.findOne({ studyId, userId });

    const response = await fetch(`${process.env.LOCAL_URL}/api/study-application/${application._id}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error getting application:", error.message);
    throw error;
  }
};
