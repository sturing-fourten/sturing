interface RoleType {
  [key: string]: {
    name: string;
    role: string;
  };
}

export const CAREER_LIST: { [key: string]: string } = {
  beginner: "비기너",
  newcomer: "신입(1년 이하)",
  junior: "주니어(1~3년차)",
  senior: "시니어(4년 이상)",
  all: "상관없음",
};

export const AGE_LIST: { [key: string]: string } = {
  all: "누구나",
  "20s": "20대",
  "30s": "30대",
  "40s": "40대",
  "50s": "50대",
};

export const ROLE_LIST: RoleType = {
  leader: {
    name: "팀장",
    role: "팀의 리더",
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
