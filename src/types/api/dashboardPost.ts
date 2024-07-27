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

export type TPostComment = {
  id: string;
  postId: string;
  studyId: string;
  userId: string;
  role: string;
  nickname: string;
  profileImageUrl: string;
  content: string;
  isMine: boolean;
  createdAt: Date;
  updatedAt: Date;
};
