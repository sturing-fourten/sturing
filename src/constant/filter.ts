import { TFilterMenu, TFilterMenuList } from "@/types/filter";

export const FILTER = {
  sort: {
    defaultValue: "최신순",
    options: [" 최신순", "마감순", "인기순"],
    values: ["LATEST", "DEADLINE", "POPULAR"],
  },
};

export const FILTER_MENU: TFilterMenu = {
  CATEGORY: { id: "category", title: "분야" },
  LOCATION: { id: "location", title: "지역" },
  NUMBER_OF_TEAM: { id: "number_of_team", title: "인원" },
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
