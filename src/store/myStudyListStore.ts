import { create } from "zustand";
import { TMyStudy } from "@/types/study";

export type TMyStudyListType = "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE";
interface IMyStudyListState {
  myStudyListType: TMyStudyListType | null;
  setMyStudyListType: (newType: TMyStudyListType | null) => void;
  progressStudyListCount: number | null;
  setProgressStudyListCount: (newCounts: number) => void;
  recruitEndStudyListCount: number | null;
  setRecruitEndStudyListCount: (newCounts: number) => void;
  recruitStartOwnerStudyListCount: number | null;
  setRecruitStartOwnerStudyListCount: (newCounts: number) => void;
  recruitStartMemberStudyListCount: number | null;
  setRecruitStartMemberStudyListCount: (newCounts: number) => void;
}

export const useMyStudyListStore = create<IMyStudyListState>((set, get) => ({
  myStudyListType: null,
  setMyStudyListType: (
    newType: "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE" | null,
  ) => {
    set({ myStudyListType: newType });
  },
  progressStudyListCount: null,
  setProgressStudyListCount: (newCount: number) => {
    set({ progressStudyListCount: newCount });
  },
  recruitEndStudyListCount: null,
  setRecruitEndStudyListCount: (newCount: number) => {
    set({ recruitEndStudyListCount: newCount });
  },
  recruitStartOwnerStudyListCount: null,
  setRecruitStartOwnerStudyListCount: (newCount: number) => {
    set({ recruitStartOwnerStudyListCount: newCount });
  },
  recruitStartMemberStudyListCount: null,
  setRecruitStartMemberStudyListCount: (newCount: number) => {
    set({ recruitStartMemberStudyListCount: newCount });
  },
}));
