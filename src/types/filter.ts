export type TFilterMenuList = {
  id: TFilterMenuId;
  title: TFilterMenuTitle;
};

export type TFilterMenu = {
  [key: string]: TFilterMenuList;
};

export type TFilterMenuId = "category" | "location" | "number_of_team" | "period" | "level" | "role";
export type TFilterMenuTitle = "분야" | "지역" | "인원" | "기간" | "수준" | "역할";

export type TSortBy = "LATEST" | "DEADLINE" | "POPULAR";

export type TSeachTabMenu = "total" | "study" | "lecture";

export interface SearchTabMenu {
  menu: TSeachTabMenu;
  setTabMenu: (menu: TSeachTabMenu) => void;
}
