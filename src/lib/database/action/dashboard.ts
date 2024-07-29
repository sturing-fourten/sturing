"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "../getSession";
export const fetchStudyInfo = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study/${id}`);
    const studyData = await response.json();

    revalidatePath(`/study/${id}/dashboard`);
    return studyData;
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

export const toggleFunctionIsActive = async (formData: FormData) => {
  const session = await getSession();
  const userId = session?.user?.id;

  const functionType = formData.get("functionType");
  const dashboardId = formData.get("dashboardId");
  const studyId = formData.get("studyId");
  if (!functionType || !dashboardId || !studyId) throw new Error("필수 정보가 없습니다.");

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard/toggle-function-isactive`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ functionType, dashboardId, userId }),
    });

    if (!response.ok) {
      throw new Error("기능 활성 상태 변경 실패");
    }

    const path = `/study/${studyId}/dashboard`;
    revalidatePath(path);
  } catch (error) {
    console.log("error", error);
  }
};

export const checkAttendanceAction = async (formData: FormData) => {
  const dashboardId = formData.get("dashboardId");
  const studyId = formData.get("studyId");
  const date = formData.get("date");

  const session = await getSession();
  const userId = session?.user?.id;

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard/attendance`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dashboardId, userId, date }),
    });

    if (!response.ok) {
      throw new Error("출석 상태 변경 실패");
    }

    revalidatePath(`/study/${studyId}/dashboard`);
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchStudyMeetingAction = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard/schedule?studyId=${id}`);
    const result = await response.json();

    revalidatePath(`/study/${id}/dashboard/schedule`);
    return result;
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

export const fetchIsMember = async (studyId: any) => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!studyId || !userId) {
    throw new Error("필수 정보가 없습니다.");
  }

  try {
    const response = await fetch(
      `${process.env.LOCAL_URL}/api/dashboard/checklist?studyId=${studyId}&userId=${userId}`,
    );
    const myCheckList = await response.json();

    revalidatePath(`/study/${studyId}/dashboard/me`);

    return myCheckList;
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};

export const fetchMyCheckListAction = async (studyId: any) => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!studyId || !userId) {
    throw new Error("필수 정보가 없습니다.");
  }

  try {
    const response = await fetch(
      `${process.env.LOCAL_URL}/api/dashboard/checklist?studyId=${studyId}&userId=${userId}`,
    );
    const myCheckList = await response.json();

    revalidatePath(`/study/${studyId}/dashboard/me`);

    return myCheckList;
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};

export const postCheckItemAction = async ({
  studyId,
  newCheckItemDate,
  newCheckItemContent,
}: {
  studyId: any;
  newCheckItemDate: any;
  newCheckItemContent: any;
}) => {
  const session = await getSession();
  const userId = session?.user?.id;

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard/checklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ studyId, userId, newCheckItemDate, newCheckItemContent }),
    });

    if (!response.ok) {
      throw new Error("체크 리스트 생성 실패");
    }

    revalidatePath(`/study/${studyId}/dashboard/me`);
    revalidatePath(`/study/${studyId}/dashboard`);
  } catch (error) {
    console.error("Error", error);
  }
};

export const toggleCheckItemAction = async (formData: FormData) => {
  const checkItemId = formData.get("checkItemId");
  const studyId = formData.get("studyId");

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard/checklist`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checkItemId, studyId }),
    });

    if (!response.ok) {
      throw new Error("체크 리스트 상태 변경 실패");
    }

    revalidatePath(`/study/${studyId}/dashboard/me`);
    revalidatePath(`/study/${studyId}/dashboard`);
  } catch (error) {
    console.log("error", error);
  }
};

export const changeStudyToProgressAction = async (formData: FormData) => {
  try {
    const studyId = formData.get("studyId");
    const session = await getSession();
    const userId = session?.user?.id || "";

    if (userId && studyId) {
      const response = await fetch(`${process.env.LOCAL_URL}/api/my-study/${studyId}/start`, {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + userId,
        },
      });

      if (!response.ok) {
        throw new Error("스터디 시작 처리 실패");
      }

      revalidatePath(`/study/${studyId}/dashboard`, "layout");
      revalidatePath(`/study/${studyId}/dashboard/me`, "layout");
      revalidatePath(`/study/${studyId}/dashboard/schedule`, "layout");
      revalidatePath(`/study/${studyId}/dashboard/board`, "layout");
      return { status: 200, message: "스터디 시작 처리 성공" };
    } else {
      throw new Error("유저 아이디와 스터디 아이디가 필요합니다.");
    }
  } catch (error: any) {
    console.log("error", error);
  }
};
