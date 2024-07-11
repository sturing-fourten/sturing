import { MOOD } from "@/constant/icons";
import { LEVEL_TAB_MENU_LIST, MATCHING_CONFIG } from "@/constant/matchingConfig";
import { USER_FAVORITE_FIELD_TYPE } from "@/constant/study";

type LevelContent = {
  [key: string]: {
    name: string;
    explanation: string;
  };
};

export const getLevelTitleById = (id: string): string => {
  const levelContent: LevelContent = MATCHING_CONFIG.level.content;
  const item = levelContent[id];
  return item ? item.name : id;
};

export const getIntrestsTitleById = (id: string) => {
  const item = LEVEL_TAB_MENU_LIST.find((menu) => menu.id);
  return item ? item.title : id;
};

export const getMoodAltById = (id: string): string => {
  const mood = USER_FAVORITE_FIELD_TYPE[id as keyof typeof USER_FAVORITE_FIELD_TYPE];
  return mood ? mood.alt : id;
};
