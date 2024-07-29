export type TComment = {
  id: string;
  postId: string;
  studyId: string;
  userId: string;
  role: string;
  nickname: string;
  profileImageUrl: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isMine: boolean;
  like?: { userId: string }[];
  // nestedComments: TNestedComment[];
};

export type TNestedComment = Omit<TComment, "nestedComments">;

export type TCommentList = TComment[];

export type TCommentType = "comment" | "nestedComment";

export type TBoardCardProps = {
  studyId: string;
};
