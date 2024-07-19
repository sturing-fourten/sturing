import { DashboardNoticeState, DashboardFreeState, DashboardTaskState } from "@/types/dashboard-notice";
import create from "zustand";

export const useDashBordNoticestore = create<DashboardNoticeState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  textarea: "",
  setTextarea: (textarea) => set({ textarea }),
  mustRead: false,
  setMustRead: (mustRead) => set({ mustRead }),
}));

export const useDashBordFreestore = create<DashboardFreeState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  textarea: "",
  setTextarea: (textarea) => set({ textarea }),
  image: "",
  setImage: (image) => set({ image }),
}));

export const useDashBordTaskstore = create<DashboardTaskState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  textarea: "",
  setTextarea: (textarea) => set({ textarea }),
  image: "",
  setImage: (image) => set({ image }),
}));
