export type RecentKeyword = {
  id: number;
  text: string;
};

export type RecentViewedStudy = {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  meeting: { format: string; platform?: string; location?: string; schedule: { day: string; time: string } };
  wantedMemberCount: string | number;
  acceptedTeamMemberCount: number;
  isBookmark?: boolean;
};
