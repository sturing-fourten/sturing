import { DashboardNoticeState, DashboardFreeState, DashboardTaskState } from "@/types/dashboard-notice";
import { create } from "zustand";

export const useDashBordNoticestore = create<DashboardNoticeState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  content: "",
  setContent: (content) => set({ content }),
  isImportant: false,
  setIsImportant: (isImportant) => set({ isImportant }),
}));

export const useDashBordFreestore = create<DashboardFreeState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  content: "",
  setContent: (content) => set({ content }),
  imageUrl: "",
  setImageUrl: (imageUrl) => set({ imageUrl }),
}));

export const useDashBordTaskstore = create<DashboardTaskState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  content: "",
  setContent: (content) => set({ content }),
  imageUrl: "",
  setImageUrl: (imageUrl) => set({ imageUrl }),
}));
