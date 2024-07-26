export type TTaskPost = {
  id: string;
  studyId: string;
  writer: { writerId: string; role: string; nickname: string; profileImageUrl: string };
  title: string;
  content: string;
  imageUrl: string | null;
  postType: "notice" | "task" | "free";
  commentCount: number;
  createdAt: Date;
  updateAt: Date;
};

export type TFreePost = TTaskPost;
