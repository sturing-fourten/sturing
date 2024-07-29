import connectDB from "@/lib/database/db";
import { DashboardComment } from "@/schema/dashboardCommentSchema";
import { DashboardPost } from "@/schema/dashboardPostSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";
import { TFreePost, TTaskPost } from "@/types/api/dashboardPost";

export async function POST(request: Request) {
  await connectDB();

  const token = request.headers.get("Authorization");
  const userId = token?.split(" ")[1];
  if (!userId) {
    return Response.json({ error: "user id 가 필요합니다." }, { status: 400 });
  }

  const { studyId, title, content, postType, isImportant, imageUrl } = await request.json();

  if (!studyId) {
    return Response.json({ error: "studyId 가 필요합니다." }, { status: 400 });
  }
  if (!title) {
    return Response.json({ error: "title이 필요합니다." }, { status: 400 });
  }

  if (!content) {
    return Response.json({ error: "content가 필요합니다." }, { status: 400 });
  }

  if (!postType) {
    return Response.json({ error: "postType이 필요합니다." }, { status: 400 });
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

    if (studyData.status === "RECRUIT_START") {
      return Response.json({ message: "모집중인 스터디 입니다." }, { status: 404 });
    }

    const teamMembers = await TeamMembers.findOne({ studyId });

    const isTeamMember = teamMembers.members.some(
      (member: any) => member.status === "ACCEPTED" && member.userId.toString() === userId,
    );

    if (!isTeamMember) {
      return Response.json({ message: "스터디 멤버가 아닙니다." }, { status: 404 });
    }

    const newPost = {
      studyId,
      writerId: userId,
      title,
      content,
      postType,
      isImportant: isImportant || null,
      imageUrl: imageUrl || null,
    };

    const newPostResult = await DashboardPost.create(newPost);

    return Response.json(newPostResult, { status: 200 });
  } catch (error: any) {
    console.error("error dashboard-post", error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get("studyId");

  await connectDB();

  try {
    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    }

    const studyData = await Study.findById(studyId);

    if (studyData.status === "RECRUIT_START") {
      return Response.json({ message: "모집중인 스터디 입니다." }, { status: 404 });
    }

    const dashboardPostListData = await DashboardPost.find({ studyId }).sort({ createdAt: -1 });

    const noticePostList = dashboardPostListData.filter((post) => {
      return post.postType === "notice";
    });
    const taskPostListData = dashboardPostListData.filter((post) => {
      return post.postType === "task";
    });
    const freePostListData = dashboardPostListData.filter((post) => {
      return post.postType === "free";
    });

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

    let freePostList: TFreePost[] = [];
    if (freePostListData) {
      freePostList = await Promise.all(
        freePostListData.map(async (post: any) => {
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

    return Response.json({ noticePostList, taskPostList, freePostList }, { status: 200 });
  } catch (error) {}
}
