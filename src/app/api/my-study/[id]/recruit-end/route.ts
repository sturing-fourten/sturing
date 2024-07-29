import connectDB from "@/lib/database/db";
import { Dashboard } from "@/schema/dashboardSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";
import generateDateList from "@/utils/generateDateList";
import { Types } from "mongoose";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  const token = req.headers.get("Authorization");

  const userId = token?.split(" ")[1];

  if (!studyId) {
    return Response.json({ error: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  if (!userId) {
    return Response.json({ error: "유저 id 가 필요합니다." }, { status: 400 });
  }

  try {
    await connectDB();
    const currentStudy = await Study.findById(studyId);

    if (!currentStudy) {
      return Response.json({ message: "스터디가 존재하지 않습니다" }, { status: 404 });
    }

    const currentStudyOwnerId = currentStudy.ownerId.toString();
    const user = await User.findById(userId);

    if (!user) {
      return Response.json({ message: "유저가 존재하지 않습니다" }, { status: 404 });
    }

    if (currentStudyOwnerId !== user.id) {
      return Response.json({ message: "권한이 없습니다" }, { status: 403 });
    }

    const isAlreadyRecruitEnd = await Study.findOne({ _id: studyId, status: "RECRUIT_END" });

    if (isAlreadyRecruitEnd) {
      return Response.json({ message: "이미 모집 완료된 스터디입니다." }, { status: 400 });
    }

    const teamMembers = await TeamMembers.findOne({ studyId });

    const acceptedTeamMembers = teamMembers.members.filter(
      ({ isOwner, status }: { isOwner: boolean; status: string }) => {
        return !isOwner && status === "ACCEPTED";
      },
    );

    const newTeamMemberProgressGaugeList = acceptedTeamMembers.map(
      ({ _id, userId }: { _id: Types.ObjectId; userId: Types.ObjectId }) => {
        return { teamMemberId: _id, userId, data: 0 };
      },
    );

    const newTeamMemberAttendanceList = acceptedTeamMembers.map(
      ({ _id, userId }: { _id: Types.ObjectId; userId: Types.ObjectId }) => {
        return {
          teamMemberId: _id,
          userId,
          data: generateDateList(currentStudy.startDate, currentStudy.endDate, "isAttended"),
        };
      },
    );

    const newTeamMemberCheckList = acceptedTeamMembers.map(
      ({ _id, userId }: { _id: Types.ObjectId; userId: Types.ObjectId }) => {
        return { teamMemberId: _id, userId, data: [] };
      },
    );

    const dashboard = await Dashboard.findOne({ studyId });

    if (!dashboard) {
      return Response.json({ message: "대시보드가 존재하지 않습니다" }, { status: 404 });
    }

    dashboard.progressGauge.list.push(...newTeamMemberProgressGaugeList);
    dashboard.attendance.list.push(...newTeamMemberAttendanceList);
    dashboard.checkList.list.push(...newTeamMemberCheckList);

    await dashboard.save();

    await Study.updateOne({ _id: studyId }, { status: "RECRUIT_END" });

    return Response.json({ message: "스터디 모집이 완료 되었습니다." }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "요청을 처리할 수 없습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
