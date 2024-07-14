import { create } from "zustand";
import { TStudy } from "@/types/study";

interface IMyStudyListState {
  progressStudyList: TStudy[] | null;
  setProgressStudyList: (newList: TStudy[]) => void;
  progressStudyListCount: number;
  setProgressStudyListCount: (newCounts: number) => void;
  recruitEndStudyList: TStudy[] | null;
  setRecruitEndStudyList: (newList: TStudy[]) => void;
  recruitEndStudyListCount: number;
  setRecruitEndStudyListCount: (newCounts: number) => void;
}

export const useMyStudyListStore = create<IMyStudyListState>((set) => ({
  progressStudyList: null,
  setProgressStudyList: (newList: TStudy[]) => {
    set({ progressStudyList: newList });
  },
  progressStudyListCount: 0,
  setProgressStudyListCount: (newCounts: number) => {
    set({ progressStudyListCount: newCounts });
  },
  recruitEndStudyList: null,
  setRecruitEndStudyList: (newList: TStudy[]) => {
    set({ recruitEndStudyList: newList });
  },
  recruitEndStudyListCount: 0,
  setRecruitEndStudyListCount: (newCounts: number) => {
    set({ recruitEndStudyListCount: newCounts });
  },
}));
