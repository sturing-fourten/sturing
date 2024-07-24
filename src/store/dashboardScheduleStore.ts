import { create } from "zustand";

interface IInitialState {
  currentDate: Date;
}

interface IDashboardScheduleState extends IInitialState {
  setCurrentDate: (selectedDate: Date) => void;
}

const initialState: IInitialState = {
  currentDate: new Date(),
};

export const useDashboardScheduleStore = create<IDashboardScheduleState>((set) => ({
  ...initialState,
  setCurrentDate: (selectedDate) => set({ currentDate: selectedDate }),
}));
