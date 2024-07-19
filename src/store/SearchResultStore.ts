import { getLectureListAction } from "@/lib/database/action/lecture";
import { getStudyListAction } from "@/lib/database/action/studyList";
import { TLectureListData } from "@/types/api/lecture";
import { TStudyListData } from "@/types/api/study";
import { TLectureListQuery, TStudyListQuery } from "@/types/filter";

import { create } from "zustand";
import { useFilterStore } from "./FilterStore";

interface SearchResult {
  studyList: TStudyListData;
  lectureList: TLectureListData;
  studyPage: number;
  lecturePage: number;
  hasStudyNextPage: boolean;
  hasLectureNextPage: boolean;
  setStudyList: (studyList: TStudyListData) => void;
  setLectureList: (lectureList: TLectureListData) => void;

  fetchStudyList: (query: TStudyListQuery, page: number) => Promise<TStudyListData>;
  fetchLectureList: (query: TLectureListQuery, page: number) => Promise<TLectureListData>;
}

export const useSearchResultStore = create<SearchResult>((set, get) => ({
  studyList: [],
  lectureList: [],
  studyPage: 1,
  lecturePage: 1,
  hasLectureNextPage: false,
  hasStudyNextPage: false,
  setStudyList: (studyList) => set({ studyList }),
  setLectureList: (lectureList) => set({ lectureList }),
  fetchStudyList: async (query, page) => {
    const data = await getStudyListAction(query, page);
    if (data) {
      const { studyList, currentPage, hasNextPage } = data;
      set({ studyPage: currentPage, hasStudyNextPage: hasNextPage });
      return studyList;
    }
    return [];
  },
  fetchLectureList: async (query, page) => {
    const data = await getLectureListAction(query, page);
    if (data) {
      const { lectureList, hasNextPage, currentPage } = data;
      set({ lecturePage: currentPage, hasLectureNextPage: hasNextPage });
      return lectureList;
    }
    return [];
  },
}));
