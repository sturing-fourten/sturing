import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";
import Title from "../Title";
import HorizontalDivider from "@/components/commons/HorizontalDivider";
import CommentInput from "./elements/CommentInput";
import Comment from "./elements/Comment";
import { TComment } from "@/types/api/study";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface RecruitCommentsProps {
  commentList: TComment[];
  studyId: string;
  userId: string;
}

export default function RecruitComments({ commentList, studyId, userId }: RecruitCommentsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "M월 d일 a h:mm", { locale: ko });
  };

  return (
    <>
      <article id="comments">
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>댓글</Title>
          <HorizontalDivider addStyle="my-4" />
          {commentList.map((comment) => (
            <Comment
              key={comment.id}
              userId={userId || ""}
              studyId={studyId}
              commentId={comment.id}
              commentOwnerId={comment.userId}
              nickname={comment.nickname}
              profileImageUrl={comment.profileImageUrl}
              content={comment.content}
              createdAt={formatDate(comment.createdAt)}
            />
          ))}
          <CommentInput studyId={studyId} />
        </StudyDetailCardLayout>
      </article>
    </>
  );
}
