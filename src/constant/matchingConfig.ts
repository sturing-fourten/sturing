import { NextStepList } from "@/types/matching";
import { STUDY_CATEGORY_MENU, USER_FAVORITE_FIELD_TYPE } from "./study";
import KOREA_CITY_LIST from "./city";

export const MATCHING_CONFIG = {
  interests: {
    title: `안녕하세요\n현재 관심있는 분야는 무엇인가요?`,
    content: STUDY_CATEGORY_MENU,
  },
  level: {
    title: `관심 분야에 대한\n나의 직업 수준을 선택해 주세요.`,
    content: {
      beginner: {
        name: "비기너",
        explanation: "관련 공부를 이제 막 시작했어요",
      },
      newcomer: {
        name: "신입",
        explanation: "관련 분야에서 일한 지 아직 1년이 안 됐어요",
      },
      junior: {
        name: "주니어",
        explanation: "1-3년 정도 관련 분야 업무 경험이 있어요",
      },
      senior: {
        name: "시니어",
        explanation: "4년 이상의 관련 분야 업무 경험이 있어요",
      },
    },
  },
  type: {
    title: `이 선호하는\n스터디 유형을 선택해 주세요.`,
    content: {
      online: "온라인 스터디",
      offline: "오프라인 스터디",
      irrelevant: "온오프라인 상관 없어요",
    },
  },
  location: {
    title: `이 선호하는\n스터디 장소을 선택해 주세요.`,
    city: KOREA_CITY_LIST,
  },
  mood: {
    title: `이 선호하는\n스터디 분위기를 선택해 주세요.`,
    content: USER_FAVORITE_FIELD_TYPE,
  },
};

export const NEXT_STEP_LIST: NextStepList[] = [
  { id: "interests", href: "/matching/intersts" },
  { id: "level", href: "/matching/level" },
  { id: "type", href: "/matching/type" },
  { id: "location", href: "/matching/location" },
  { id: "mood", href: "/matching/mood" },
  { id: "success", href: "/matching/success" },
];
