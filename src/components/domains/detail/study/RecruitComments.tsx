import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";
import Title from "../Title";
import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Comment from "./elements/Comment";
import CommentInput from "./elements/CommentInput";
type TComment = {
  id: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  content: string;
};

const commentList: TComment[] = [
  {
    id: "1",
    nickname: "채니",
    profileImageUrl: "",
    createdAt: "6월 7일 오전 12:42",
    content: "과제팀장으로 지원해도 될까요??",
  },
  {
    id: "2",
    nickname: "주현",
    profileImageUrl: "",
    createdAt: "6월 7일 오전 12:42",
    content:
      "과제팀장으로 지원해도 될까요??과제팀장으로 지원해도 될까요??과제팀장으로 지원해도 될까요??과제팀장으로 지원해도 될까요??과제팀장으로 지원해도 될까요??과제팀장으로 지원해도 될까요??과제팀장으로 지원해도 될까요??과제팀장으로 지원해도 될까요??",
  },
];

export default function RecruitComments() {
  return (
    <>
      <article id="comments">
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>댓글</Title>
          <HorizontalDivider addStyle="my-4" />
          {commentList.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
          <CommentInput />
        </StudyDetailCardLayout>
      </article>
    </>
  );
}
