import connectDB from "@/lib/database/db";
import { DashboardComment } from "@/schema/dashboardCommentSchema";
import { DashboardPost } from "@/schema/dashboardPostSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";
import { TTaskPost } from "@/types/api/dashboardPost";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get("studyId");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "4", 10);

  await connectDB();

  try {
    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    }

    const studyData = await Study.findById(studyId);

    if (studyData.status !== "PROGRESS") {
      return Response.json({ message: "진행중인 스터디가 아닙니다." }, { status: 404 });
    }

    const taskPostListData = await DashboardPost.find({ studyId, postType: "task" })
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const teamMembers = await TeamMembers.findOne({ studyId });

    let taskPostList: TTaskPost[] = [];

    if (taskPostListData) {
      taskPostList = await Promise.all(
        taskPostListData.map(async (post: any) => {
          const { _id, studyId, writerId, title, content, imageUrl, postType, createdAt, updatedAt } = post;
          const user = await User.findById(writerId);
          const writerInTeamMember = teamMembers.members.find((member: any) => {
            return member.userId.toString() === writerId.toString();
          });

          const commentList = await DashboardComment.find({ postId: _id });

          return {
            _id: _id.toString(),
            studyId,
            writer: {
              writerId,
              role: writerInTeamMember.role,
              nickname: user.nickname,
              profileImageUrl: user.profileImageUrl,
            },
            title,
            content,
            imageUrl,
            postType,
            commentCount: commentList.length,
            createdAt,
            updatedAt,
          };
        }),
      );
    }
    const totalTaskPost = await DashboardPost.find({ studyId, postType: "task" }).sort({ createdAt: -1 });
    const totalTaskCount = totalTaskPost.length;
    const totalPages = Math.ceil(totalTaskCount / pageSize);
    const hasMorePage = totalPages > page;
    return Response.json({ taskPostList, totalPages, currentPage: page, pageSize, hasMorePage }, { status: 200 });
  } catch (error) {
    console.error("error dashboard task post:", error);
    return Response.json({ error }, { status: 500 });
  }
}
