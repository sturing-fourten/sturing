import { create } from "zustand";
import { TStudyDetailInfoData } from "@/types/api/study";

type TDashboardInfo = {
  studyId: string;
  dashboardId: string;
  teamMember: TStudyDetailInfoData["teamMemberList"];
};

type TStudyInfo = {
  startDate: Date | null;
  endDate: Date | null;
};

interface IInitialState {
  isEditing: boolean;
  dashboardInfo: TDashboardInfo;
  studyInfo: TStudyInfo;
}

interface IDashboardTeamState extends IInitialState {
  setIsEditing: () => void;
  setDashboardInfo: (currentDashboardInfo: TDashboardInfo) => void;
  setStudyInfo: (currentStudyInfo: TStudyInfo) => void;
}

const initialState: IInitialState = {
  isEditing: false,
  dashboardInfo: {
    studyId: "",
    dashboardId: "",
    teamMember: [],
  },
  studyInfo: {
    startDate: null,
    endDate: null,
  },
};

export const useDashboardTeamStore = create<IDashboardTeamState>((set) => ({
  ...initialState,
  setIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
  setDashboardInfo: (currentDashboardInfo) => set({ dashboardInfo: currentDashboardInfo }),
  setStudyInfo: (currentStudyInfo) => set({ studyInfo: currentStudyInfo }),
}));
