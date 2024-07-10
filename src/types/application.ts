export type TApplication = {
  _id: string;
  studyId: string;
  userId: string;
  title: string;
  resolution: string;
  role: "팀장" | "부팀장" | "과제팀장" | "출결팀장" | "기록팀장" | "일정팀장" | "팀원";
  nickname: string;
  profileImageUrl: string;
  status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED";
};

export type TApplicationSummary = Omit<TApplication, "resolution" | "role">;
export type TApplicationList = TApplicationSummary[];
