import { TCategory } from "./api/study";

export type TFilterMenuList = {
  id: TFilterMenuId;
  title: TFilterMenuTitle;
};

export type TFilterMenu = {
  [key: string]: TFilterMenuList;
};

export type TFilterMenuId = "category" | "location" | "memberCount" | "period" | "level" | "role";
export type TFilterMenuTitle = "분야" | "지역" | "인원" | "기간" | "수준" | "역할";

export type TSortBy = "LATEST" | "DEADLINE" | "POPULAR";

export type TSortByMAPPING = "최신순" | "마감순" | "인기순";

export type TSeachTabMenu = "total" | "study" | "lecture";

export interface SearchTabMenu {
  menu: TSeachTabMenu;
  setTabMenu: (menu: TSeachTabMenu) => void;
}

export type TStudyListQuery = {
  categories: TCategory[];
  sortBy: TSortBy;
  roles: string[];
  levels: string[];
  locations: string[];
  memberCount: number;
  startDate: string | null;
  endDate: string | null;
  search: string | null;
};

export type TLectureListQuery = {
  categories: TCategory[];
  search: string | null;
};
