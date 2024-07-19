import { DashboardNoticeState } from "@/types/dashboard-notice";
import create from "zustand";

export const useDashBordNoticestore = create<DashboardNoticeState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  textarea: "",
  setTextarea: (textarea) => set({ textarea }),
  mustRead: false,
  setMustRead: (mustRead) => set({ mustRead }),
}));
