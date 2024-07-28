import { TComment } from "@/types/board";
import CommentHeader from "./CommentHeader";
import CommentContent from "./CommentContent";
import CommentReaction from "./CommentReaction";

interface ICommentItemProps {
  comment: TComment;
}

export default function CommentItem(props: ICommentItemProps) {
  const { comment } = props;

  return (
    <div className="grid grid-cols-[38px_1fr] grid-rows-[auto_auto_auto] gap-x-2 gap-y-1">
      <CommentHeader comment={comment} />

      <span></span>

      <CommentContent content={comment.content} />

      <span></span>

      <CommentReaction type={"comment"} like={comment.like} />
    </div>
  );
}
