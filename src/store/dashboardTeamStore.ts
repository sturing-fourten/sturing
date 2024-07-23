import { create } from "zustand";

type TDashboardInfo = {
  studyId: string | null;
  dashboardId: string | null;
  startDate: Date | null;
  endDate: Date | null;
};

interface IInitialState {
  isEditing: boolean;
  dashboardInfo: TDashboardInfo;
}

interface IDashboardTeamState extends IInitialState {
  setIsEditing: () => void;
  setDashboardInfo: (currentDashboardInfo: TDashboardInfo) => void;
}

const initialState: IInitialState = {
  isEditing: false,
  dashboardInfo: {
    studyId: null,
    dashboardId: null,
    startDate: null,
    endDate: null,
  },
};

export const useDashboardTeamStore = create<IDashboardTeamState>((set) => ({
  ...initialState,
  setIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
  setDashboardInfo: (currentDashboardInfo) => set({ dashboardInfo: currentDashboardInfo }),
}));
