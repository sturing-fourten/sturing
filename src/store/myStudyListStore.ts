import { create } from "zustand";
import { TStudy } from "@/types/study";

interface IMyStudyListState {
  currentStudyList: TStudy[] | null;
  setCurrentStudyList: (newList: TStudy[]) => void;
  progressStudyListCount: number;
  setProgressStudyListCount: (newCounts: number) => void;
  recruitEndStudyListCount: number;
  setRecruitEndStudyListCount: (newCounts: number) => void;
}

export const useMyStudyListStore = create<IMyStudyListState>((set) => ({
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
