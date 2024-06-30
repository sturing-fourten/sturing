import { postInfoInstructor, postInfoLevel } from "../../public/icons/icons";

export const LECTURE_TAB_MENU_LIST = [
  { id: "pro", title: "강의소개", href: "/mystudy/", count: 1 },
  { id: "recruit", title: "스터디", href: "/mystudy/recruit", count: 1 },
  { id: "applied", title: "평점", href: "/mystudy/applied", count: 1 },
];

export const LECTURE_INFO = {
  instructor: { title: "강사", icon: { src: postInfoInstructor.src, alt: "강사" } },
  level: { title: "난이도", icon: { src: postInfoLevel.src, alt: "난이도" } },
};
