export type TCategory =
  | "DESIGN"
  | "DEVELOP"
  | "BUSINESS"
  | "MARKETING"
  | "ECONOMY"
  | "LANGUAGE"
  | "LICENSE"
  | "SELF-DEVELOPMENT";

export type TStudyDetailInfoData = {
  _id: string;
  ownerId: string;
  category: TCategory;
  lectureId: string;
  title: string;
  imageUrl: string;
  description: string;
  meeting: {
    format: string;
    platform: string;
    schedule: {
      day: string;
      time: string;
    };
  };
  startDate: string;
  endDate: string;
  moodKeywords: string[];
  task: string[];
  createdAt: string;
  updateAt: string;
  __v: number;
  teamMemberId: string[];
};
