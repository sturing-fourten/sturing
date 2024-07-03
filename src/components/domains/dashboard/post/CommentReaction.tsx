import { TComment, TCommentType, TNestedComment } from "@/types/board";
import { LikeButton } from "./LikeButton";
import { NestedCommentItem } from "./NestedCommentItem";
import PostNestedCommentForm from "./PostNestedCommentForm";

export default function CommentReaction({
  type,
  like,
  nestedComments,
}: {
  type: TCommentType;
  like: TComment["like"];
  nestedComments: TNestedComment[];
}) {
  const isIncludingMe = true;
  const isOpenedNestedComment = true;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <LikeButton like={like} isIncludingMe={isIncludingMe} />
        {type === "comment" && (
          <button className="inline-flex items-center gap-1 text-gray-700 text-xs font-normal leading-none">
            <img src="/icons/nested-comment.svg" />
            {nestedComments?.length > 0 ? (
              <>
                <span>답글</span>
                <span>{nestedComments.length}</span>
              </>
            ) : (
              <button>답글쓰기</button>
            )}
          </button>
        )}
      </div>

      <ul className="flex flex-col gap-2 mt-4 mb-">
        {nestedComments.length > 0 &&
          isOpenedNestedComment &&
          nestedComments.map((nestedComment, index) => <NestedCommentItem nestedComment={nestedComment} />)}
      </ul>

      <PostNestedCommentForm />
    </div>
  );
}
