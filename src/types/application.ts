export type TApplication = {
  _id: string;
  studyId: string;
  userId: string;
  title: string;
  resolution: string;
  role: "팀장" | "부팀장" | "과제팀장" | "출결팀장" | "기록팀장" | "일정팀장" | "팀원";
};