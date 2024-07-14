import { create } from "zustand";
import { TStudy } from "@/types/study";

interface IMyStudyListState {
  currentListType: "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE";
  setCurrentListType: (
    newType: "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE",
  ) => void;
  currentStudyList: TStudy[] | null;
  setCurrentStudyList: (newList: TStudy[]) => void;
  progressStudyListCount: number;
  setProgressStudyListCount: (newCounts: number) => void;
  recruitEndStudyListCount: number;
  setRecruitEndStudyListCount: (newCounts: number) => void;
}

export const useMyStudyListStore = create<IMyStudyListState>((set) => ({
  currentListType: "PROGRESS",
  setCurrentListType: (
    newType: "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE",
  ) => {
    set({ currentListType: newType });
  },
  currentStudyList: null,
  setCurrentStudyList: (newList: TStudy[]) => {
    set({ currentStudyList: newList });
  },
  progressStudyListCount: 0,
  setProgressStudyListCount: (newCounts: number) => {
    set({ progressStudyListCount: newCounts });
  },
  recruitEndStudyListCount: 0,
  setRecruitEndStudyListCount: (newCounts: number) => {
    set({ recruitEndStudyListCount: newCounts });
  },
}));
