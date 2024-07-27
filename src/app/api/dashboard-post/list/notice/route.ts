import connectDB from "@/lib/database/db";
import { DashboardPost } from "@/schema/dashboardPostSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";
import { TNoticePost } from "@/types/api/dashboardPost";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get("studyId");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "4", 10);

  try {
    await connectDB();
    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    }

    const studyData = await Study.findById(studyId);

    if (studyData.status !== "PROGRESS") {
      return Response.json({ message: "진행중인 스터디가 아닙니다." }, { status: 404 });
    }

    const noticePostListData = await DashboardPost.find({ studyId, postType: "notice" })
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const teamMembers = await TeamMembers.findOne({ studyId });

    let noticePostList: TNoticePost[] = [];

    if (noticePostListData) {
      noticePostList = await Promise.all(
        noticePostListData.map(async (post: any) => {
          const { _id, studyId, writerId, title, content, postType, createdAt, updatedAt, isImportant } = post;
          const user = await User.findById(writerId);
          const writerInTeamMember = teamMembers.members.find((member: any) => {
            return member.userId.toString() === writerId.toString();
          });

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
            postType,
            isImportant,
            createdAt,
            updatedAt,
          };
        }),
      );
    }

    const totalNoticePost = await DashboardPost.find({ studyId, postType: "notice" }).sort({ createdAt: -1 });
    const totalNoticeCount = totalNoticePost.length;
    const totalPages = Math.ceil(totalNoticeCount / pageSize);
    const hasMorePage = totalPages > page;

    return Response.json({ noticePostList, totalPages, currentPage: page, pageSize, hasMorePage }, { status: 200 });
  } catch (error) {
    console.error("error dashboard notice post:", error);
    return Response.json({ error }, { status: 500 });
  }
}
