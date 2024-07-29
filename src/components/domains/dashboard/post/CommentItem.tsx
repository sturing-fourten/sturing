import { TComment } from "@/types/board";
import CommentHeader from "./CommentHeader";
import CommentContent from "./CommentContent";
import CommentReaction from "./CommentReaction";

interface ICommentItemProps {
  comment: TComment;
  refreshComments: () => void;
}

export default function CommentItem(props: ICommentItemProps) {
  const { comment, refreshComments } = props;

  return (
    <div className="flex flex-col">
      <CommentHeader comment={comment} refreshComments={refreshComments} />

      <span></span>

      <CommentContent content={comment.content} />

      <span></span>

      <CommentReaction type={"comment"} like={comment.like} />
    </div>
  );
}
