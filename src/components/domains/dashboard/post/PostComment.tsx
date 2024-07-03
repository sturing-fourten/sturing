import { TCommentList } from "@/types/board";
import CommentListInfo from "./CommentListInfo";

export default function PostComment({ commentList }: { commentList: TCommentList }) {
  const isQualified = true;

  return (
    <article className="pt-6 pb-12 px-4">
      <CommentListInfo />
    </article>
  );
}
