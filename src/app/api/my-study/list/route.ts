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
      /*
       * PROGRESS, RECRUIT_END, DOME : 내가 참여하고 있는 모든 스터디 (개설 or 지원 후 ACCEPTED) 중 각 status로 필터링한 목록 조회
       */
      case "PROGRESS":
        const progressTeamMembers = await TeamMembers.find({
          "members.userId": userId,
          $or: [{ "members.isOwner": true }, { "members.status": "ACCEPTED" }],
        });
        const progressStudyIdList = progressTeamMembers.map((member) => member.studyId);
        const progressStudyList = await Study.find({
          _id: { $in: progressStudyIdList },
          status: listType,
        }).populate({
          path: "teamMembersId",
          select: "members",
        });
        return Response.json({
          progressStudyList,
          recruitEndStudyListCount: await Study.countDocuments({
            _id: { $in: progressStudyIdList },
            status: "RECRUIT_END",
          }),
        });

      case "RECRUIT_END":
        const recruitEndTeamMembers = await TeamMembers.find({
          "members.userId": userId,
          $or: [{ "members.isOwner": true }, { "members.status": "ACCEPTED" }],
        });
        const recruitEndStudyIdList = recruitEndTeamMembers.map((member) => member.studyId);
        const recruitEndStudyList = await Study.find({
          _id: { $in: recruitEndStudyIdList },
          status: listType,
        }).populate({
          path: "teamMembersId",
          select: "members",
        });
        return Response.json({
          recruitEndStudyList,
          progressStudyListCount: await Study.countDocuments({
            _id: { $in: recruitEndStudyIdList },
            status: "PROGRESS",
          }),
        });

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
