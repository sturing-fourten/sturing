import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import PostCommentForm from "@/components/domains/dashboard/post/PostCommentForm";
import PostContent from "@/components/domains/dashboard/post/PostContent";

export default function PostPage() {
  return (
    <>
      {/* Header */}
      <section>
        <TopBar variant="share" showMore={true} isWhite={false} />
      </section>

      <PostContent />

      <HorizontalDivider addStyle="mb-6" />

      <PostCommentForm />
    </>
  );
}
