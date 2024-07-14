"use server";

import { useMyStudyListStore } from "@/store/myStudyListStore";
import { getSession } from "../getSession";
import { revalidatePath } from "next/cache";

type TFetchProgressStudyListAction = () => Promise<void>;

export const fetchProgressStudyListAction: TFetchProgressStudyListAction = async () => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) throw new Error("유저 정보가 필요합니다.");

  try {
    const url = `${process.env.LOCAL_URL}/api/my-study/list?userId=${userId}&listType=PROGRESS`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    const { progressStudyList, recruitEndStudyListCount } = await response.json();
    if (!progressStudyList || !recruitEndStudyListCount) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    useMyStudyListStore.getState().setProgressStudyList(progressStudyList);
    useMyStudyListStore.getState().setProgressStudyListCount(progressStudyList.length);
    useMyStudyListStore.getState().setRecruitEndStudyListCount(recruitEndStudyListCount);
    revalidatePath("/mystudy");
  } catch (error) {}
};
