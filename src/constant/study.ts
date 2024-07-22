import { STUDY_CATEGORY, MOOD, ICONS } from "@/constant/icons";
import {
  StudyCategoryMenu,
  UserFavoriteFieldType,
  TTabMenuLinkUnderlinedItem,
  TMyStudyTabMenuLinkUnderlinedItem,
} from "@/types/study";

export const STUDY_CATEGORY_MENU: StudyCategoryMenu = {
  DESIGN: {
    src: STUDY_CATEGORY.design.src,
    alt: STUDY_CATEGORY.design.alt,
  },
  DEVELOP: {
    src: STUDY_CATEGORY.develop.src,
    alt: STUDY_CATEGORY.develop.alt,
  },
  MARKETING: {
    src: STUDY_CATEGORY.marketing.src,
    alt: STUDY_CATEGORY.marketing.alt,
  },
  BUSINESS: {
    src: STUDY_CATEGORY.business.src,
    alt: STUDY_CATEGORY.business.alt,
  },
  ECONOMY: {
    src: STUDY_CATEGORY.economic.src,
    alt: STUDY_CATEGORY.economic.alt,
  },
  LANGUAGE: {
    src: STUDY_CATEGORY.language.src,
    alt: STUDY_CATEGORY.language.alt,
  },
  LICENSE: {
    src: STUDY_CATEGORY.certificate.src,
    alt: STUDY_CATEGORY.certificate.alt,
  },
  "SELF-DEVELOPMENT": {
    src: STUDY_CATEGORY.selfDevelop.src,
    alt: STUDY_CATEGORY.selfDevelop.alt,
  },
};

export const USER_FAVORITE_FIELD_TYPE: UserFavoriteFieldType = {
  friendly: {
    src: MOOD.friendly.src,
    alt: MOOD.friendly.alt,
  },
  professional: {
    src: MOOD.professional.src,
    alt: MOOD.professional.alt,
  },
  serious: {
    src: MOOD.serious.src,
    alt: MOOD.serious.alt,
  },
  systematic: {
    src: MOOD.systematic.src,
    alt: MOOD.systematic.alt,
  },
  passionate: {
    src: MOOD.passionate.src,
    alt: MOOD.passionate.alt,
  },
  responsible: {
    src: MOOD.responsible.src,
    alt: MOOD.responsible.alt,
  },
  learningFocused: {
    src: MOOD.learningFocused.src,
    alt: MOOD.learningFocused.alt,
  },
  collaborative: {
    src: MOOD.collaborative.src,
    alt: MOOD.collaborative.alt,
  },
  proactive: {
    src: MOOD.proactive.src,
    alt: MOOD.proactive.alt,
  },
  freewheeling: {
    src: MOOD.freewheeling.src,
    alt: MOOD.freewheeling.alt,
  },
};

export const STUDY_RECRUIT_INFO = {
  teamMember: { title: "팀원", icon: { src: ICONS.postInfoTeamMember.src, alt: ICONS.postInfoTeamMember.alt } },
  meeting: { title: "일정", icon: { src: ICONS.postInfoMeeting.src, alt: ICONS.postInfoMeeting.alt } },
  task: { title: "과제", icon: { src: ICONS.postInfoTask.src, alt: ICONS.postInfoTask.alt } },
  location: { title: "장소", icon: { src: ICONS.postInfoLocation.src, alt: ICONS.postInfoLocation.alt } },
};
