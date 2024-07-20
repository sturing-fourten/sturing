"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "../getSession";

export const activateFunctionAction = async (formData: FormData) => {
  const session = await getSession();
  const userId = session?.user?.id;
  const functionType = formData.get("functionType");
  const dashboardId = formData.get("dashboardId");
  const studyId = formData.get("studyId");

  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard/activate-function`, {
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
    console.log(path);
    revalidatePath(path);
  } catch (error) {
    console.log("error", error);
  }
};
