import connectDB from "@/lib/database/db";
import { DashboardComment } from "@/schema/dashboardCommentSchema";
import { DashboardPost } from "@/schema/dashboardPostSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

export async function POST(request: Request, { params }: { params: { postId: string } }) {
  await connectDB();
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

    const newComment = {
      studyId,
      postId,
      userId,
      content,
    };

    const newPostResult = await DashboardComment.create(newComment);

    return Response.json(newPostResult, { status: 200 });
  } catch (error: any) {
    console.error("error dashboard-post", error);
    return Response.json({ error }, { status: 500 });
  }
}
