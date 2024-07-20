import { create } from "zustand";

interface IInitialState {
  isEditing: boolean;
}

interface IDashboardState extends IInitialState {
  setIsEditing: () => void;
}

const initialState: IInitialState = {
  isEditing: false,
};

export const useDashboardStore = create<IDashboardState>((set) => ({
  ...initialState,
  setIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
}));
