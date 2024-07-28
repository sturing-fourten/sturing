"use client";

import { useState, useEffect, useCallback } from "react";
import CommentListInfo from "./CommentListInfo";
import CommentItem from "./CommentItem";
import { TCommentList } from "@/types/board";

interface PostCommentProps {
  postId: string;
  commentsUpdated: boolean; // 상태 변경을 트리거하는 플래그
}

export const getComments = async (postId: string, sortBy: string) => {
  const res = await fetch(`/api/dashboard-post/${postId}/comment?sortBy=${sortBy}`);

  if (!res.ok) {
    return { status: 400, message: "댓글을 불러오는 데 실패하였습니다." };
  }
  const comments = await res.json();
  return comments;
};

export default function PostComment({ postId, commentsUpdated }: PostCommentProps) {
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
            <CommentItem comment={comment} key={comment.id} />
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
