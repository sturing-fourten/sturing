"use client";

import { useState, useEffect, useCallback } from "react";
import CommentListInfo from "./CommentListInfo";
import CommentItem from "./CommentItem";
import { TCommentList } from "@/types/board";
import { getComments } from "@/lib/database/action/comment";

interface PostCommentProps {
  postId: string;
  commentsUpdated: boolean;
  refreshComments: () => void;
}

export default function PostComment({ postId, commentsUpdated, refreshComments }: PostCommentProps) {
  const [commentList, setCommentList] = useState<TCommentList>([]);
  const [sortBy, setSortBy] = useState<"OLDEST" | "LATEST">("OLDEST");

  const fetchComments = useCallback(async () => {
    const comments = await getComments(postId, sortBy);
    setCommentList(comments);
  }, [postId, sortBy]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments, commentsUpdated]);

  return (
    <article className="pt-6 pb-12 px-4">
      <CommentListInfo commentList={commentList} setSortBy={setSortBy} sortBy={sortBy} />

      {commentList && commentList.length > 0 ? (
        <ul className="flex flex-col gap-8 mb-5">
          {commentList.map((comment) => (
            <CommentItem comment={comment} key={comment.id} refreshComments={refreshComments} />
          ))}
        </ul>
      ) : (
        <div className="text-gray-600 text-center text-[14px] font-normal leading-none my-10">
          아직 작성된 댓글이 없어요
        </div>
      )}
    </article>
  );
}
