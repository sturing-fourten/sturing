import { TCommentList } from "@/types/board";
import CommentListInfo from "./CommentListInfo";
import CommentItem from "./CommentItem";

export default function PostComment({ commentList }: { commentList: TCommentList }) {
  const isQualified = true;

  return (
    <article className="pt-6 pb-12 px-4">
      <CommentListInfo />

      <ul className="flex flex-col gap-8 mb-5">
        {commentList.map((comment, index) => (
          <CommentItem isQualified={isQualified} comment={comment} key={index} />
        ))}
      </ul>
    </article>
  );
}
