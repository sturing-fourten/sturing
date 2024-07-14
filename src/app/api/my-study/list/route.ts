import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";

export async function GET(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const listType = searchParams.get("listType");
  const userId = searchParams.get("userId");

  try {
    switch (listType) {
      case "PROGRESS":
        // 1) 내가 참여하고 있는 모든 스터디 (개설 or 지원 후 ACCEPTED) 중 각 status로 필터링한 목록 조회
        const myTeamMembers = await TeamMembers.find({
          "members.userId": userId,
          $or: [{ "members.isOwner": true }, { "members.status": "ACCEPTED" }], // TODO 이 부분 맞는지 확인 필요
        });
        const studyIds = myTeamMembers.map((member) => member.studyId);
        const progressStudyList = await Study.find({
          _id: { $in: studyIds },
          status: "PROGRESS",
        }).populate({
          path: "teamMembersId",
          select: "members",
        });
        return Response.json({
          progressStudyList,
          recruitEndStudyListCount: await Study.countDocuments({
            _id: { $in: studyIds },
            status: "RECRUIT_END",
          }),
        });

      // case "RECRUIT_END":
      // case "RECRUIT_START_OWNER":
      //   // 내가 개설한 모든 스터디 중 status가 RECRUIT_START인 목록 조회
      //   studyList = await Study.find({ ownerId: userId, status: "RECRUIT_START" });
      //   break;
      // case "RECRUIT_START_MEMBER":
      //   // 내가 지원한 모든 스터디 중 RECRUIT_START 상태인 목록 조회
      //   studyList = await Study.find({ ownerId: !userId, status: "RECRUIT_START" });
      //   // const myRecruitStartTeamMembers = await TeamMembers.find({
      //   //   "members.userId": userId,
      //   //   "members.status": "ACCEPTED",
      //   // });
      //   // const recruitStartStudyIds = myRecruitStartTeamMembers.map((member) => member.studyId);
      //   // studyList = await Study.find({ _id: { $in: recruitStartStudyIds }, status: "RECRUIT_START" });
      //   break;
      // case "DONE":
      //   break;
      default:
        throw new Error("listType이 잘못되었습니다.");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
