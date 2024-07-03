export type TComment = {
  user: {
    _id: string;
    nickname: string;
    // taskId: string;
    profileImageUrl: string;
    role: string;
  };
  content: string;
  created_at: string;
  like: { userId: string }[];
  nestedComments: TNestedComment[];
};

export type TNestedComment = Omit<TComment, "nestedComments">;

export type TCommentList = TComment[];

export type TCommentType = "comment" | "nestedComment";
