export type LectureData = {
  _id: string;
  online: boolean;
  category: string;
  platform: string;
  rating: number;
  link: string;
  title: string;
  instructor: string;
  level: string;
  tag: string[];
  lectureStudyList: any[];
  review: {
    reviewerId: string;
    reviewer: string;
    rating: number;
    comment: string;
    created_at: string;
    _id: string;
  }[];
};

export type StudyData = {
  meeting: {
    schedule: { day: string; time: string };
    format: string;
    platform: string;
  };
  _id: string;
  category: string;
  ownerId: string;
  lecture: {
    _id: string;
    category: string;
    online: boolean;
    platform: string;
    rating: number;
    link: string;
    title: string;
    instructor: string;
  };
  title: string;
  imageUrl: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  status: string;
  moodKeywords: string[];
  task: string[];
  teamMembersId: string;
};
