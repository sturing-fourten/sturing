import { create } from "zustand";
import { TMyStudy } from "@/types/study";

export type TMyStudyListType = "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE";
interface IMyStudyListState {
  currentListType: TMyStudyListType;
  setCurrentListType: (newType: TMyStudyListType) => void;
  currentStudyList: TMyStudy[] | null;
  setCurrentStudyList: (newList: TMyStudy[]) => void;
  progressStudyListCount: number;
  setProgressStudyListCount: (newCounts: number) => void;
  recruitEndStudyListCount: number;
  setRecruitEndStudyListCount: (newCounts: number) => void;
  recruitStartOwnerStudyListCount: number;
  setRecruitStartOwnerStudyListCount: (newCounts: number) => void;
  recruitStartMemberStudyListCount: number;
  setRecruitStartMemberStudyListCount: (newCounts: number) => void;
}

export const useMyStudyListStore = create<IMyStudyListState>((set) => ({
  currentListType: "PROGRESS",
  setCurrentListType: (
    newType: "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE",
  ) => {
    set({ currentListType: newType });
  },
  currentStudyList: null,
  setCurrentStudyList: (newList: TMyStudy[]) => {
    set({ currentStudyList: newList });
  },
  progressStudyListCount: 0,
  setProgressStudyListCount: (newCount: number) => {
    set({ progressStudyListCount: newCount });
  },
  recruitEndStudyListCount: 0,
  setRecruitEndStudyListCount: (newCount: number) => {
    set({ recruitEndStudyListCount: newCount });
  },
  recruitStartOwnerStudyListCount: 0,
  setRecruitStartOwnerStudyListCount: (newCount: number) => {
    set({ recruitStartOwnerStudyListCount: newCount });
  },
  recruitStartMemberStudyListCount: 0,
  setRecruitStartMemberStudyListCount: (newCount: number) => {
    set({ recruitStartMemberStudyListCount: newCount });
  },
}));
