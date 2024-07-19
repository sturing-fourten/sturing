import { TFilterMenu, TFilterMenuList, TSortBy, TSortByMAPPING } from "@/types/filter";

export const SORT_BY_FILTER: { option: TSortByMAPPING; value: TSortBy }[] = [
  { option: "최신순", value: "LATEST" },
  { option: "마감순", value: "DEADLINE" },
  { option: "인기순", value: "POPULAR" },
];

export const MAPPING_SORT_BY = {
  LATEST: "최신순",
  DEADLINE: "마감순",
  POPULAR: "인기순",
};

export const FILTER_MENU: TFilterMenu = {
  CATEGORY: { id: "category", title: "분야" },
  LOCATION: { id: "location", title: "지역" },
  NUMBER_OF_TEAM: { id: "memberCount", title: "인원" },
  PERIOD: { id: "period", title: "기간" },
  LEVEL: { id: "level", title: "수준" },
  ROLE: { id: "role", title: "역할" },
};

const { CATEGORY, LOCATION, NUMBER_OF_TEAM, PERIOD, LEVEL, ROLE } = FILTER_MENU;

export const FILTER_MENU_LIST: TFilterMenuList[] = [
  { id: CATEGORY.id, title: CATEGORY.title },
  {
    id: LOCATION.id,
    title: LOCATION.title,
  },
  { id: NUMBER_OF_TEAM.id, title: NUMBER_OF_TEAM.title },
  {
    id: PERIOD.id,
    title: PERIOD.title,
  },
  {
    id: LEVEL.id,
    title: LEVEL.title,
  },
  {
    id: ROLE.id,
    title: ROLE.title,
  },
];
