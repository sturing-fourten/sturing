import { badOff, badOn, bestOff, bestOn, friendly, goodOff, goodOn, systematic } from "@/../public/icons/icons";

export const SATISFACTION_ASSESSMENT_LIST = [
  { text: "별로예요", imageOnSrc: badOn, imageOffSrc: badOff, imageAlt: "좋지 않은 표정의 아이콘" },
  { text: "좋아요", imageOnSrc: goodOn, imageOffSrc: goodOff, imageAlt: "좋은 표정의 아이콘" },
  { text: "최고에요", imageOnSrc: bestOn, imageOffSrc: bestOff, imageAlt: "아주 좋은 표정의 아이콘" },
];

export const POSITIVE_ASSESSMENT_LIST = [
  { text: "과제에 대한 피드백을 잘 해줘요.", image: { src: friendly, alt: "친근한 사람을 묘사하는 아이콘" } },
  { text: "약속 시간을 잘 지켜요.", image: { src: systematic, alt: "체계적인 사람을 묘사하는 아이콘" } },
  { text: "맡은 역할을 잘 수행해줬어요.", image: { src: friendly, alt: "친근한 사람을 묘사하는 아이콘" } },
  { text: "꾸준히 출석을 잘해요.", image: { src: friendly, alt: "친근한 사람을 묘사하는 아이콘" } },
];

export const REUNION_ASSESSMENT_LIST = [
  { text: "네, 팀원으로 만나고 싶어요." },
  { text: "아니요, 팀원으로 만나고 싶지 않아요." },
];

export const PEER_REVIEW_LIST = {
  FEEDBACK: {
    text: "과제에 대한 피드백을 잘 해줘요.",
    image: { src: friendly.src, alt: "친근한 사람을 묘사하는 아이콘" },
  },
  PUNCTUAL: { text: "약속 시간을 잘 지켜요.", image: { src: systematic.src, alt: "체계적인 사람을 묘사하는 아이콘" } },
  ATTEND: { text: "꾸준히 출석을 잘해요.", image: { src: goodOn.src, alt: "친근한 사람을 묘사하는 아이콘" } },
  FULFILL: { text: "맡은 역할을 잘 수행해줬어요.", image: { src: bestOn.src, alt: "친근한 사람을 묘사하는 아이콘" } },
};
