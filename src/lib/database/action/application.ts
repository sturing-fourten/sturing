"use server";

import { Application } from "@/schema/applicationSchema";
import { getSession } from "../getSession";
import { redirect } from "next/navigation";

export const applyAction = async (formData: FormData) => {
  try {
    const session = await getSession();
    const userId = session?.user?.id;
    const studyId = formData.get("studyId");
    const title = formData.get("title");
    const resolution = formData.get("resolution");
    const role = formData.get("role") || "member";

    if (!userId || !studyId || !title || !resolution) {
      return { status: 400, message: "필수 정보가 누락되었습니다." };
    }

    const newApplication = {
      userId,
      title,
      resolution,
      role,
    };

    const newTeamMember = {
      userId,
      role,
      isOwner: false,
      status: "APPLIED",
    };

    const existingApplication = await Application.findOne({ studyId, userId });

    if (existingApplication) {
      return { status: 400, message: "이미 지원한 스터디입니다." };
    }

    const response = await fetch(`${process.env.LOCAL_URL}/api/apply`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ studyId, newApplication, newTeamMember }),
    });

    if (!response.ok) {
      return { status: 400, message: "지원을 실패하였습니다." };
    }

    const data = await response.json();
    return { status: 200, data };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const acceptApplication = async (formData: FormData) => {
  const session = await getSession();
  const userId = session?.user?.id || "";
  const appliedUserId = formData.get("appliedUserId");
  const studyId = formData.get("studyId");

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study/${studyId}/apply-accept`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + userId,
      },
      body: JSON.stringify({ appliedUserId }),
    });

    if (!response.ok) {
      throw new Error("지원 거절 실패");
    }

    redirect(`/application-list/${studyId}`);
  } catch (error: any) {
    console.error("error", error.message);
    throw error;
  }
};
