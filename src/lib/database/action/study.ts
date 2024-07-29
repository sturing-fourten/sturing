"use server";

import { getSession } from "../getSession";

export const deleteStudyAction = async (studyId: string) => {
  const session = await getSession();
  const userId = session?.user?.id;

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study/${studyId}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + userId,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return { status: response.status, message: result.message || "스터디 삭제를 실패하였습니다." };
    }

    return { status: response.status, message: result.message || "스터디 삭제가 성공적으로 삭제되었습니다." };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
