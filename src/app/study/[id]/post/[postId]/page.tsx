import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import PostComment from "@/components/domains/dashboard/post/PostComment";
import PostCommentForm from "@/components/domains/dashboard/post/PostCommentForm";
import PostContent from "@/components/domains/dashboard/post/PostContent";
import { getBoardAction } from "@/lib/database/action/board";

export default async function PostPage({ params }: { params: { id: string; postId: string } }) {
  const { id: studyId, postId } = params;
  const data = await getBoardAction(postId);
  const { updatedBoard } = data;

  return (
    <>
      <section>
        <TopBar variant="share" showMore={true} isWhite={false} />
      </section>

      {updatedBoard && updatedBoard.postType === "notice" ? (
        <PostContent board={updatedBoard} />
      ) : (
        updatedBoard && (
          <>
            <PostContent board={updatedBoard} />
            <HorizontalDivider addStyle="mb-6" />
            <PostComment commentList={updatedBoard.comment} />
            <PostCommentForm studyId={studyId} postId={postId} />
          </>
        )
      )}
    </>
  );
}
