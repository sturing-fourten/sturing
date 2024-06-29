import {
  design,
  develop,
  marketing,
  business,
  economic,
  language,
  certificate,
  selfDevelop,
  friendly,
  professional,
  serious,
  systematic,
  passionate,
  responsible,
  learningFocused,
  collaborative,
  proactive,
  freewheeling,
  postInfoTeamMember,
  postInfoMeeting,
  postInfoTask,
  postInfoLocation,
} from "@/../public/icons/icons";
import { StudyCategoryMenu, TTabMenuLinkUnderlinedItem } from "@/types/study";

export const STUDY_CATEGORY_MENU: StudyCategoryMenu = {
  design: {
    imageSrc: design,
    name: "디자인",
  },
  develop: {
    imageSrc: develop,
    name: "개발 · 테크",
  },
  marketing: {
    imageSrc: marketing,
    name: "마케팅",
  },
  business: {
    imageSrc: business,
    name: "비즈니스",
  },
  economic: {
    imageSrc: economic,
    name: "경제",
  },
  language: {
    imageSrc: language,
    name: "외국어",
  },
  certificate: {
    imageSrc: certificate,
    name: "자격증",
  },
  selfDevelop: {
    imageSrc: selfDevelop,
    name: "자기 계발",
  },
};

interface FavoriteFieldType {
  [key: string]: {
    name: string;
    imageSrc: string;
  };
}

export const USER_FAVORITE_FIELD_TYPE: FavoriteFieldType = {
  friendly: {
    name: "친근한",
    imageSrc: friendly,
  },
  professional: {
    name: "전문적인",
    imageSrc: professional,
  },
  serious: {
    name: "진지한",
    imageSrc: serious,
  },
  systematic: {
    name: "체계적인",
    imageSrc: systematic,
  },
  passionate: {
    name: "열정적인",
    imageSrc: passionate,
  },
  responsible: {
    name: "책임감있는",
    imageSrc: responsible,
  },
  learningFocused: {
    name: "학습중심적",
    imageSrc: learningFocused,
  },
  collaborative: {
    name: "협력적인",
    imageSrc: collaborative,
  },
  proactive: {
    name: "자기주도적",
    imageSrc: proactive,
  },
  freewheeling: {
    name: "자유로운",
    imageSrc: freewheeling,
  },
};

export const STUDY_TAB_MENU_LIST: TTabMenuLinkUnderlinedItem[] = [
  { id: "progress", title: "진행", href: "/mystudy/", count: 1 },
  { id: "applying", title: "대기", href: "/mystudy/applying", count: 1 },
  { id: "done", title: "완료", href: "/mystudy/done", count: 1 },
];

export const STUDY_RECRUIT_INFO = {
  teamMember: { title: "팀원", icon: { src: postInfoTeamMember.src, alt: "모집하는 팀원 수" } },
  meeting: { title: "일정", icon: { src: postInfoMeeting.src, alt: "스터디 일정" } },
  task: { title: "과제", icon: { src: postInfoTask.src, alt: "스터디 과제" } },
  location: { title: "위치", icon: { src: postInfoLocation.src, alt: "스터디 장소" } },
};
