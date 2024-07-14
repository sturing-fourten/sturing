import { getSession } from "@/lib/database/getSession";
import { TStudy } from "@/types/study";
import { revalidatePath } from "next/cache";
import { create } from "zustand";

interface IMyStudyListState {
  myStudyList: TStudy[] | null;
  setMyStudyList: (newMyStudyList: TStudy[]) => void;
}

export const useMyStudyListStore = create<IMyStudyListState>((set) => ({
  myStudyList: null,
  setMyStudyList: (newMyStudyList: TStudy[]) => {
    set({ myStudyList: newMyStudyList });
  },
}));
