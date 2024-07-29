"use client";

import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import PostComment from "@/components/domains/dashboard/post/PostComment";
import PostCommentForm from "@/components/domains/dashboard/post/PostCommentForm";
import PostContent from "@/components/domains/dashboard/post/PostContent";
import { getBoardAction, deleteBoardAction } from "@/lib/database/action/board";
import { TTaskPost } from "@/types/api/dashboardPost";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function PostPage({ params }: { params: { id: string; postId: string } }) {
  const { id: studyId, postId } = params;
  const [updatedBoard, setUpdatedBoard] = useState<TTaskPost | null>(null);
  const router = useRouter();
  const [commentsUpdated, setCommentsUpdated] = useState(false);

  const refreshComments = () => setCommentsUpdated(!commentsUpdated);

  useEffect(() => {
    const fetchBoardData = async () => {
      const data = await getBoardAction(postId);
      if (data.updatedBoard) {
        setUpdatedBoard(data.updatedBoard);
      } else {
        router.push("/not-found");
      }
    };

    fetchBoardData();
  }, [postId]);

  const handleDeleteBoard = useCallback(async () => {
    const result = await deleteBoardAction(postId, studyId);

    if (result.status !== 200) {
      alert(result.message);
    } else {
      alert(result.message);
      router.push(`/study/${studyId}/dashboard/board`);
    }
  }, [postId, studyId]);

  return (
    <>
      <section>
        {updatedBoard && (
          <TopBar
            variant="share"
            showMore={true}
            isWhite={false}
            onClick={handleDeleteBoard}
            isMine={updatedBoard.isMine}
          />
        )}
      </section>

      {updatedBoard && updatedBoard.postType === "notice" ? (
        <PostContent board={updatedBoard} />
      ) : (
        updatedBoard && (
          <>
            <PostContent board={updatedBoard} />
            <HorizontalDivider addStyle="mb-6" />
            <PostComment postId={postId} commentsUpdated={commentsUpdated} refreshComments={refreshComments} />
            <PostCommentForm studyId={studyId} postId={postId} onCommentPosted={refreshComments} />
          </>
        )
      )}
    </>
  );
}
