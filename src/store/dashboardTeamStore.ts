import { create } from "zustand";

interface IInitialState {
  isEditing: boolean;
}

interface IDashboardTeamState extends IInitialState {
  setIsEditing: () => void;
}

const initialState: IInitialState = {
  isEditing: false,
};

export const useDashboardTeamStore = create<IDashboardTeamState>((set) => ({
  ...initialState,
  setIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
}));
