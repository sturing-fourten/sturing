export type TTaskPost = {
  _id: string;
  studyId?: string;
  writer: { writerId: string; role: string; nickname: string; profileImageUrl: string };
  title: string;
  content: string;
  imageUrl: string | null;
  postType?: "notice" | "task" | "free";
  isImportant?: boolean;
  commentCount: number;
  createdAt: Date;
  updatedAt?: Date;
};

export type TFreePost = TTaskPost;
