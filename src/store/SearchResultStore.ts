import { getLectureListAction } from "@/lib/database/action/lecture";
import { getStudyListAction } from "@/lib/database/action/studyList";
import { TLectureListCardData, TLectureListData } from "@/types/api/lecture";
import { TStudyRecruitCardData } from "@/types/api/study";
import { TLectureListQuery, TStudyListQuery } from "@/types/filter";

import { create } from "zustand";

interface SearchResult {
  lectureList: TLectureListData;
  studyList: TStudyRecruitCardData[];
  totalStudiesResultCount: number;
  totalLectureCount: number;
  studyCategoriesCount: { [key: string]: number };
  lectureCategoriesCount: { [key: string]: number };
  studyPage: number;
  lecturePage: number;
  setStudyPage: (studyPage: number) => void;
  setLecturePage: (lecturePage: number) => void;
  hasStudyNextPage: boolean;
  hasLectureNextPage: boolean;

  fetchStudyList: (query: TStudyListQuery, page: number) => Promise<TStudyRecruitCardData[]>;
  // fetchStudyList: (query: TStudyListQuery, page: number) => void;
  fetchLectureList: (query: TLectureListQuery, page: number) => Promise<TLectureListData>;
}

export const useSearchResultStore = create<SearchResult>((set) => ({
  lectureList: [],
  studyList: [],
  totalStudiesResultCount: 0,
  totalLectureCount: 0,
  studyCategoriesCount: {},
  lectureCategoriesCount: {},
  studyPage: 1,
  lecturePage: 1,
  hasLectureNextPage: false,
  hasStudyNextPage: false,
  setStudyPage: (studyPage) => set({ studyPage }),
  setLecturePage: (lecturePage) => set({ lecturePage }),
  fetchStudyList: async (query, page) => {
    const data = await getStudyListAction(query, page);
    if (data) {
      const { studyList, currentPage, hasNextPage, totalStudiesResultCount, categoriesCount } = data;
      set((state) => ({
        studyPage: currentPage,
        hasStudyNextPage: hasNextPage,
        totalStudiesResultCount,
        studyCategoriesCount: categoriesCount,
        studyList:
          page === 1
            ? studyList
            : [
                ...state.studyList,
                ...studyList.filter(
                  (newItem: TStudyRecruitCardData) => !state.studyList.some((prevItem) => prevItem.id === newItem.id),
                ),
              ],
      }));
      return studyList;
    }
    return [];
  },
  fetchLectureList: async (query, page) => {
    const data = await getLectureListAction(query, page);
    if (data) {
      const { lectureList, hasNextPage, currentPage, totalLectureCount, categoriesCount } = data;
      set((state) => ({
        lecturePage: currentPage,
        hasLectureNextPage: hasNextPage,
        totalLectureCount,
        lectureCategoriesCount: categoriesCount,
        lectureList:
          page === 1
            ? lectureList
            : [
                ...state.lectureList,
                ...lectureList.filter(
                  (newItem: TLectureListCardData) => !state.lectureList.some((prevItem) => prevItem.id === newItem.id),
                ),
              ],
      }));
      return lectureList;
    }
    return [];
  },
}));
