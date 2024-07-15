import { STUDY_CATEGORY, MOOD, ICONS } from "@/constant/icons";
import {
  StudyCategoryMenu,
  UserFavoriteFieldType,
  TTabMenuLinkUnderlinedItem,
  TMyStudyTabMenuLinkUnderlinedItem,
} from "@/types/study";

export const STUDY_CATEGORY_MENU: StudyCategoryMenu = {
  design: {
    src: STUDY_CATEGORY.design.src,
    alt: STUDY_CATEGORY.design.alt,
  },
  develop: {
    src: STUDY_CATEGORY.develop.src,
    alt: STUDY_CATEGORY.develop.alt,
  },
  marketing: {
    src: STUDY_CATEGORY.marketing.src,
    alt: STUDY_CATEGORY.marketing.alt,
  },
  business: {
    src: STUDY_CATEGORY.business.src,
    alt: STUDY_CATEGORY.business.alt,
  },
  economic: {
    src: STUDY_CATEGORY.economic.src,
    alt: STUDY_CATEGORY.economic.alt,
  },
  language: {
    src: STUDY_CATEGORY.language.src,
    alt: STUDY_CATEGORY.language.alt,
  },
  certificate: {
    src: STUDY_CATEGORY.certificate.src,
    alt: STUDY_CATEGORY.certificate.alt,
  },
  selfDevelop: {
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

export const STUDY_TAB_MENU_LIST: TMyStudyTabMenuLinkUnderlinedItem[] = [
  { id: "progress", title: "진행", href: "/mystudy/", count: 1 },
  { id: "recruitment", title: "대기", href: "/mystudy/recruitment", count: 1 },
  { id: "done", title: "완료", href: "/mystudy/done", count: 1 },
];

export const STUDY_RECRUIT_INFO = {
  teamMember: { title: "팀원", icon: { src: ICONS.postInfoTeamMember.src, alt: ICONS.postInfoTeamMember.alt } },
  meeting: { title: "일정", icon: { src: ICONS.postInfoMeeting.src, alt: ICONS.postInfoMeeting.alt } },
  task: { title: "과제", icon: { src: ICONS.postInfoTask.src, alt: ICONS.postInfoTask.alt } },
  location: { title: "위치", icon: { src: ICONS.postInfoLocation.src, alt: ICONS.postInfoLocation.alt } },
};
