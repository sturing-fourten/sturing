import connectDB from "@/lib/database/db";
import { Application } from "@/schema/applicationSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

export async function GET(request: Request) {
  connectDB();

  try {
    const { searchParams } = new URL(request.url);
    const studyId = searchParams.get("studyId");
    if (!studyId) throw new Error("스터디 아이디가 없습니다.");

    // 1. 지원서 목록 조회
    const applicationList = await Application.find({ studyId });

    // 2. 각 지원서에 필요한 유저 정보 추가
    const enhancedApplicationList = await Promise.all(
      applicationList.map(async (application) => {
        const userPromise = User.findOne({ _id: application.userId }, { profileImageUrl: 1, nickname: 1, _id: 0 });
        const teamMemberPromise = TeamMembers.findOne(
          { studyId, "members.userId": application.userId },
          { "members.$": 1, _id: 0 },
        );
        const [user, teamMember] = await Promise.all([userPromise, teamMemberPromise]);
        const { members } = teamMember;
        return {
          _id: application._id,
          studyId: application.studyId,
          userId: application.userId,
          title: application.title,
          resolution: application.resolution,
          role: application.role,
          nickname: user.nickname,
          profileImageUrl: user.profileImageUrl,
          status: members[0].status,
        };
      }),
    );

    // 3. 스터디 정보 조회
    const study = await Study.findById(studyId).select("title startDate endDate meeting");
    return Response.json({
      study,
      applicationList: enhancedApplicationList,
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
