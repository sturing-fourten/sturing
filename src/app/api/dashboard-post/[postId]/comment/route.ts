import connectDB from "@/lib/database/db";
import { DashboardComment } from "@/schema/dashboardCommentSchema";
import { DashboardPost } from "@/schema/dashboardPostSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";
import { TPostComment } from "@/types/api/dashboardPost";

export async function POST(request: Request, { params }: { params: { postId: string } }) {
  const postId = params.postId;
  const token = request.headers.get("Authorization");
  const userId = token?.split(" ")[1];
  if (!userId) {
    return Response.json({ error: "user id 가 필요합니다." }, { status: 400 });
  }

  const { studyId, content } = await request.json();

  if (!studyId) {
    return Response.json({ error: "studyId 가 필요합니다." }, { status: 400 });
  }

  if (!content) {
    return Response.json({ error: "content가 필요합니다." }, { status: 400 });
  }

  try {
    await connectDB();
    const isUserExisted = await User.findById(userId);
    if (!isUserExisted) {
      return Response.json({ message: "해당 유저가 존재하지 않습니다." }, { status: 410 });
    }

    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    }

    const studyData = await Study.findById(studyId);

    if (studyData.status !== "PROGRESS") {
      return Response.json({ message: "진행중인 스터디가 아닙니다." }, { status: 404 });
    }

    const teamMembers = await TeamMembers.findOne({ studyId });

    const isTeamMember = teamMembers.members.some(
      (member: any) => member.status === "ACCEPTED" && member.userId.toString() === userId,
    );

    if (!isTeamMember) {
      return Response.json({ message: "스터디 멤버가 아닙니다." }, { status: 404 });
    }
    const post = await DashboardPost.findById(postId);

    if (!post) {
      return Response.json({ message: "해당 게시글이 존재하지 않습니다." }, { status: 404 });
    }
    const userInTeamMember = teamMembers.members.find((member: any) => {
      return member.userId.toString() === userId;
    });

    const newComment = {
      studyId,
      postId,
      userId,
      role: userInTeamMember.role,
      content,
    };

    const newPostResult = await DashboardComment.create(newComment);

    return Response.json(newPostResult, { status: 200 });
  } catch (error) {
    console.error("error dashboard-post", error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: { postId: string } }) {
  const postId = params.postId;
  const token = request.headers.get("Authorization");
  const userId = token?.split(" ")[1];

  const { searchParams } = new URL(request.url);
  const sortBy = searchParams.get("sortBy") || "OLDEST";

  let sortOption: { [key: string]: any } = {};

  if (sortBy === "OLDEST") {
    sortOption = { createdAt: 1 };
  } else if (sortBy === "LATEST") {
    sortOption = { createdAt: -1 };
  }

  try {
    await connectDB();
    const post = await DashboardPost.findById(postId);

    if (!post) {
      return Response.json({ message: "해당 게시글이 존재하지 않습니다." }, { status: 404 });
    }

    const commentListData = await DashboardComment.find({ postId }).sort(sortOption);

    let commentList: TPostComment[] = [];

    if (commentListData) {
      commentList = await Promise.all(
        commentListData.map(async (comment) => {
          const { _id, userId: commentUserId, role, content, postId, studyId, createdAt, updatedAt } = comment;
          const user = await User.findById(commentUserId);
          const isMine = userId === commentUserId.toString();

          return {
            id: _id,
            postId,
            studyId,
            userId: commentUserId,
            role,
            nickname: user.nickname,
            profileImageUrl: user.profileImageUrl,
            content,
            isMine,
            createdAt,
            updatedAt,
          };
        }),
      );
    }

    return Response.json(commentList, { status: 200 });
  } catch (error) {
    console.error("error dashboard-post", error);
    return Response.json({ error }, { status: 500 });
  }
}
