import { create } from "zustand";
import { SelectApplyState } from "@/types/apply";

export const useApplyStore = create<SelectApplyState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  resolution: "",
  setResolution: (resolution) => set({ resolution }),
  role: "",
  setRole: (role) => set({ role }),
}));
