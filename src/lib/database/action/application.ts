"use server";

import { getSession } from "../getSession";

export const applyAction = async (formData: FormData) => {
  try {
    const session = await getSession();
    const userId = session?.user?.id;
    const studyId = formData.get("studyId")?.toString();
    const title = formData.get("title");
    const resolution = formData.get("resolution");
    const role = formData.get("role") || "팀원";

    if (!userId || !studyId || !title || !resolution) {
      throw new Error("필수 정보가 누락되었습니다.");
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

    const response = await fetch(`${process.env.LOCAL_URL}/api/apply`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ studyId, newApplication, newTeamMember }),
    });

    if (!response.ok) {
      throw new Error("지원 실패");
    }
  } catch (error: any) {
    console.log("error", error.message);
  }
};
