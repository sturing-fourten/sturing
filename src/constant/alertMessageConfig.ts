import { ICONS } from "./icons";
import { AlertMessageConfig } from "@/types/alertMessage";

export const ALERT_MESSAGE_CONFIG: AlertMessageConfig = {
  matching: {
    src: ICONS.success.src,
    alt: ICONS.success.alt,
    title: "매칭 선택을 완료했습니다!",
    content: `선택하신 매칭 요소는 내 프로필에서 확인할 수 있으며\n웅진님을 위한 스터디 추천에 반영됩니다.`,
  },
  recruit: {
    src: ICONS.success.src,
    alt: ICONS.success.alt,
    title: "모집글 작성을 완료했습니다!",
    content: `스터디 지원자들의 지원서는 내 스터디에서\n확인하고 수락할 수 있어요.`,
  },
  apply: {
    src: ICONS.success.src,
    alt: ICONS.success.alt,
    title: "스터디 지원을 완료했습니다!",
    content: `내 스터디에서 지원 스터디 수락 여부를\n확인하고 지원서를 수정할 수 있어요.`,
  },
  notFound: {
    src: ICONS.notFound.src,
    alt: ICONS.notFound.alt,
    title: "페이지를 찾을 수 없습니다.",
    content: `페이지의 주소가 잘못 입력되었거나,\n주소가 변경 혹은 삭제되어\n요청하신 페이지를 찾을 수 없습니다.`,
  },
  preparing: {
    src: ICONS.ready.src,
    alt: ICONS.ready.alt,
    title: "서비스 준비 중입니다!",
    content: `보다 더 나은 서비스 제공을 위하여 페이지 준비 중입니다.\n빠른 시일 내에 준비하여 찾아뵙겠습니다.`,
  },
  board: {
    src: ICONS.success.src,
    alt: ICONS.success.alt,
    title: "글 작성을 완료했습니다!",
    content: `내 스터디 대시보드 게시판탭에서\n작성한 글을 확인할 수 있어요.`,
  },
};
