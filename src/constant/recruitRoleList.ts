export type TRole =
  | "member"
  | "viceLeader"
  | "assignment"
  | "notification"
  | "record"
  | "environment"
  | "schedule"
  | "attendance";

export type RoleType = {
  [key in TRole]: {
    name: string;
    role: string;
  };
};

export const ROLE_LIST: RoleType = {
  member: {
    name: "팀원",
    role: "팀원",
  },
  viceLeader: {
    name: "부팀장",
    role: "리더 보조",
  },
  assignment: {
    name: "과제팀장",
    role: "과제 제출 확인",
  },
  notification: {
    name: "알림팀장",
    role: "과제 진행 알림",
  },
  attendance: {
    name: "출결팀장",
    role: "출결 확인",
  },
  record: {
    name: "기록팀장",
    role: "스터디 기록",
  },
  environment: {
    name: "환경팀장",
    role: "장소 조율",
  },
  schedule: {
    name: "일정팀장",
    role: "일정 조율",
  },
};
