import { STUDY_CATEGORY, MOOD, ICONS } from "@/constant/icons";
import { StudyCategoryMenu, UserFavoriteFieldType, TTabMenuLinkUnderlinedItem } from "@/types/study";

export const STUDY_CATEGORY_MENU: StudyCategoryMenu = {
  design: {
    imageSrc: STUDY_CATEGORY.design.src,
    imageAlt: STUDY_CATEGORY.design.alt,
  },
  develop: {
    imageSrc: STUDY_CATEGORY.develop.src,
    imageAlt: STUDY_CATEGORY.develop.alt,
  },
  marketing: {
    imageSrc: STUDY_CATEGORY.marketing.src,
    imageAlt: STUDY_CATEGORY.marketing.alt,
  },
  business: {
    imageSrc: STUDY_CATEGORY.business.src,
    imageAlt: STUDY_CATEGORY.business.alt,
  },
  economic: {
    imageSrc: STUDY_CATEGORY.economic.src,
    imageAlt: STUDY_CATEGORY.economic.alt,
  },
  language: {
    imageSrc: STUDY_CATEGORY.language.src,
    imageAlt: STUDY_CATEGORY.language.alt,
  },
  certificate: {
    imageSrc: STUDY_CATEGORY.certificate.src,
    imageAlt: STUDY_CATEGORY.certificate.alt,
  },
  selfDevelop: {
    imageSrc: STUDY_CATEGORY.selfDevelop.src,
    imageAlt: STUDY_CATEGORY.selfDevelop.alt,
  },
};

export const USER_FAVORITE_FIELD_TYPE: UserFavoriteFieldType = {
  friendly: {
    imageSrc: MOOD.friendly.src,
    imageAlt: MOOD.friendly.alt,
  },
  professional: {
    imageSrc: MOOD.professional.src,
    imageAlt: MOOD.professional.alt,
  },
  serious: {
    imageSrc: MOOD.serious.src,
    imageAlt: MOOD.serious.alt,
  },
  systematic: {
    imageSrc: MOOD.systematic.src,
    imageAlt: MOOD.systematic.alt,
  },
  passionate: {
    imageSrc: MOOD.passionate.src,
    imageAlt: MOOD.passionate.alt,
  },
  responsible: {
    imageSrc: MOOD.responsible.src,
    imageAlt: MOOD.responsible.alt,
  },
  learningFocused: {
    imageSrc: MOOD.learningFocused.src,
    imageAlt: MOOD.learningFocused.alt,
  },
  collaborative: {
    imageSrc: MOOD.collaborative.src,
    imageAlt: MOOD.collaborative.alt,
  },
  proactive: {
    imageSrc: MOOD.proactive.src,
    imageAlt: MOOD.proactive.alt,
  },
  freewheeling: {
    imageSrc: MOOD.freewheeling.src,
    imageAlt: MOOD.freewheeling.alt,
  },
};

export const STUDY_TAB_MENU_LIST: TTabMenuLinkUnderlinedItem[] = [
  { id: "progress", title: "진행", href: "/mystudy/", count: 1 },
  { id: "applying", title: "대기", href: "/mystudy/applying", count: 1 },
  { id: "done", title: "완료", href: "/mystudy/done", count: 1 },
];

export const STUDY_RECRUIT_INFO = {
  teamMember: { title: "팀원", icon: { src: ICONS.postInfoTeamMember.src, alt: ICONS.postInfoTeamMember.alt } },
  meeting: { title: "일정", icon: { src: ICONS.postInfoMeeting.src, alt: ICONS.postInfoMeeting.alt } },
  task: { title: "과제", icon: { src: ICONS.postInfoTask.src, alt: ICONS.postInfoTask.alt } },
  location: { title: "위치", icon: { src: ICONS.postInfoLocation.src, alt: ICONS.postInfoLocation.alt } },
};
