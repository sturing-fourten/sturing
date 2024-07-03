import HorizontalDivider from "@/components/commons/HorizontalDivider";
import TopBar from "@/components/commons/TopBar";
import PostComment from "@/components/domains/dashboard/post/PostComment";
import PostCommentForm from "@/components/domains/dashboard/post/PostCommentForm";
import PostContent from "@/components/domains/dashboard/post/PostContent";
import { TCommentList } from "@/types/board";

const SAMPLE_COMMENT_LIST: TCommentList = [
  {
    user: {
      _id: "1",
      // taskId: "task-1",
      profileImageUrl: "https://picsum.photos/200/300",
      nickname: "웅진2",
      role: "어쩌구 팀장",
    },
    content: "첫 번째 댓글입니다.",
    created_at: "1시간 전",
    like: [{ userId: "user1" }, { userId: "user2" }],
    nestedComments: [
      {
        user: {
          _id: "1",
          // taskId: "task-1",
          profileImageUrl: "https://picsum.photos/200/300",
          nickname: "웅진1",
          role: "팀장",
        },
        content: "답글1",
        created_at: "1시간 전",
        like: [],
      },
    ],
  },
  {
    user: {
      _id: "3",
      // taskId: "task-1",
      profileImageUrl: "https://picsum.photos/200/300",
      nickname: "웅진3",
      role: "나도 팀장",
    },
    content: "두 번째 댓글입니다.",
    created_at: "1시간 전",
    like: [{ userId: "user3" }],
    nestedComments: [
      {
        user: {
          _id: "1",
          // taskId: "task-1",
          profileImageUrl: "https://picsum.photos/200/300",
          nickname: "웅진1",
          role: "팀장",
        },
        content: "답글2",
        created_at: "1시간 전",
        like: [],
      },
    ],
  },
];

export default function PostPage() {
  return (
    <>
      <section>
        <TopBar variant="share" showMore={true} isWhite={false} />
      </section>

      <PostContent />

      <HorizontalDivider addStyle="mb-6" />

      <PostComment commentList={SAMPLE_COMMENT_LIST} />

      <PostCommentForm />
    </>
  );
}
