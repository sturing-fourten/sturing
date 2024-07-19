"use server";

import { TMyStudyListType, useMyStudyListStore } from "@/store/myStudyListStore";
import { getSession } from "../getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { TMyStudy } from "@/types/study";

type TMyStudyListAction = () => Promise<TMyStudy[]>;

export const fetchProgressStudyListAction: TMyStudyListAction = async () => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) throw new Error("유저 정보가 필요합니다.");

  try {
    const url = `${process.env.LOCAL_URL}/api/my-study/list?userId=${userId}&listType=PROGRESS`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    const { progressStudyList, recruitEndStudyListCount } = await response.json();
    if (!progressStudyList || !recruitEndStudyListCount) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    useMyStudyListStore.getState().setProgressStudyListCount(progressStudyList.length);
    useMyStudyListStore.getState().setRecruitEndStudyListCount(recruitEndStudyListCount);
    revalidatePath("/mystudy/progress");
    return progressStudyList;
  } catch (error) {}
};

export const fetchRecruitEndStudyListAction: TMyStudyListAction = async () => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) throw new Error("유저 정보가 필요합니다.");

  try {
    const url = `${process.env.LOCAL_URL}/api/my-study/list?userId=${userId}&listType=RECRUIT_END`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    const { recruitEndStudyList, progressStudyListCount } = await response.json();
    if (!recruitEndStudyList || !progressStudyListCount) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    useMyStudyListStore.getState().setRecruitEndStudyListCount(recruitEndStudyList.length);
    useMyStudyListStore.getState().setProgressStudyListCount(progressStudyListCount);
    revalidatePath("/mystudy/progress");
    return recruitEndStudyList;
  } catch (error) {}
};

export const fetchRecruitStartOwnerStudyListAction: TMyStudyListAction = async () => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) throw new Error("유저 정보가 필요합니다.");

  try {
    const url = `${process.env.LOCAL_URL}/api/my-study/list?userId=${userId}&listType=RECRUIT_START_OWNER`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    const { recruitStartOwnerStudyList, recruitStartMemberStudyListCount } = await response.json();
    if (!recruitStartOwnerStudyList || !recruitStartMemberStudyListCount)
      throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    useMyStudyListStore.getState().setRecruitStartOwnerStudyListCount(recruitStartOwnerStudyList.length);
    useMyStudyListStore.getState().setRecruitStartMemberStudyListCount(recruitStartMemberStudyListCount);
    revalidatePath("/mystudy/waiting");
    return recruitStartOwnerStudyList;
  } catch (error) {}
};

export const fetchRecruitStartMemberStudyListAction: TMyStudyListAction = async () => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) throw new Error("유저 정보가 필요합니다.");

  try {
    const url = `${process.env.LOCAL_URL}/api/my-study/list?userId=${userId}&listType=RECRUIT_START_MEMBER`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    const { recruitStartMemberStudyList, recruitStartOwnerStudyListCount } = await response.json();
    if (!recruitStartMemberStudyList || !recruitStartOwnerStudyListCount)
      throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    useMyStudyListStore.getState().setRecruitStartMemberStudyListCount(recruitStartMemberStudyList.length);
    useMyStudyListStore.getState().setRecruitStartOwnerStudyListCount(recruitStartOwnerStudyListCount);
    revalidatePath("/mystudy/waiting");
    return recruitStartMemberStudyList;
  } catch (error) {}
};

export const fetchDoneStudyListAction: TMyStudyListAction = async () => {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) throw new Error("유저 정보가 필요합니다.");

  try {
    const url = `${process.env.LOCAL_URL}/api/my-study/list?userId=${userId}&listType=DONE`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    const doneList = await response.json();
    if (!doneList) throw new Error("스터디 목록을 불러오는 데 실패했습니다.");

    revalidatePath("/mystudy/done");
    return doneList;
  } catch (error) {}
};

export async function listTypeFormAction(formData: FormData) {
  const myStudyListType = formData.get("myStudyListType") as TMyStudyListType;
  if (!myStudyListType) return;

  useMyStudyListStore.getState().setMyStudyListType(myStudyListType);
  revalidatePath("/mystudy");
}

export async function tabMyStudyAction(formData: FormData) {
  const href = formData.get("href")?.toString();
  if (!href) return;

  revalidatePath(href);
  redirect(href);
}

export async function urlRenderAction(newType: TMyStudyListType) {
  useMyStudyListStore.getState().setMyStudyListType(newType);
  if (newType === "PROGRESS") revalidatePath("/mystudy/progress");
  if (newType === "RECRUIT_START_OWNER") revalidatePath("/mystudy/waiting");
  if (newType === "DONE") revalidatePath("/mystudy/done");
}
