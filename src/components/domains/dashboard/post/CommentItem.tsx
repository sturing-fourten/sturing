import { TComment } from "@/types/board";
import CommentHeader from "./CommentHeader";
import CommentContent from "./CommentContent";
import CommentReaction from "./CommentReaction";

interface ICommentItemProps {
  isQualified: boolean;
  comment: TComment;
}

export default function CommentItem(props: ICommentItemProps) {
  const { isQualified, comment } = props;

  return (
    <div className="grid grid-cols-[38px_1fr] grid-rows-[auto_auto_auto] gap-x-2 gap-y-1">
      <CommentHeader user={comment.user} created_at={comment.created_at} type={"comment"} />

      <span></span>

      {isQualified ? <CommentContent content={comment.content} /> : <div> 더미 이미지</div>}

      <span></span>

      <CommentReaction type={"comment"} like={comment.like} nestedComments={comment.nestedComments} />
    </div>
  );
}
