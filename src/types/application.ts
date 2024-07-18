export type TRole =
  | "leader"
  | "viceLeader"
  | "assignment"
  | "notification"
  | "attendance"
  | "record"
  | "environment"
  | "schedule"
  | "member";

export type TApplication = {
  _id: string;
  studyId: string;
  userId: string;
  title: string;
  resolution: string;
  role: TRole;
  nickname: string;
  profileImageUrl: string;
  status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED";
};

export type TApplicationSummary = Omit<TApplication, "resolution" | "role">;
export type TApplicationList = TApplicationSummary[];
