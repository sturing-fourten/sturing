import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { generateUpcomingMeetingList, TUpcomingMeetingList } from "@/utils/generateMeetingList";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (!userId) {
    return Response.json({ error: "유저 id 가 필요합니다." }, { status: 400 });
  }

  connectDB();

  try {
    const teamMembers = await TeamMembers.find({
      "members.userId": userId,
      $or: [{ "members.isOwner": true }, { "members.status": "ACCEPTED" }],
    });

    const studyIds = teamMembers.map((member) => member.studyId);

    // 1) 내가 참여하고 있는 모든 스터디 목록 조회
    const studyList = await Study.find({ _id: { $in: studyIds } }, { meeting: 1, startDate: 1, endDate: 1, title: 1 });

    // 2) 모든 스터디의 7일 내 미팅으로 리스트 생성
    let upcomingMeetingList: TUpcomingMeetingList = [];
    studyList.forEach((study) => {
      const {
        meeting: {
          format,
          platform,
          schedule: { time, day },
          location,
        },
        startDate,
        endDate,
        title,
      } = study;

      const where = format === "ONLINE" ? platform : location;
      const meetingInfo = {
        title,
        startDate,
        endDate,
        where,
        day,
        time,
      };
      upcomingMeetingList = [...generateUpcomingMeetingList(meetingInfo)];
    });

    return Response.json(upcomingMeetingList);
  } catch (error: any) {
    return Response.json("error");
  }
}
