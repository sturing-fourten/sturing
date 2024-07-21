import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import { StudyDetailInfo } from "./element/StudyDetailInfo";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { getDateRange } from "@/utils/getDateRange";
import Link from "next/link";
import { getMeetingInfoTaskText } from "@/utils/getMeetingInfoTaskText";

interface IStudyOnGoingCardProps {
  isStarted: boolean;
  study: TMyStudy;
}

export default function StudyOnGoingCard(props: IStudyOnGoingCardProps) {
  const {
    isStarted,
    study: {
      _id: studyId,
      title,
      startDate,
      endDate,
      meeting: {
        schedule: { day },
        format,
        platform,
        location,
      },
      task,
      teamMembersId,
    },
  } = props;

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";
  const meetingDay = `매주 ${day}`;
  const memberCount = (teamMembersId as TTeamMembersIdAddedMember)?.members?.filter(
    (member) => member.status === "ACCEPTED",
  )?.length;
  return (
    <Link
      href={`/study/${studyId}/dashboard`}
      className={`py-6 px-5 border border-gray-300 bg-white rounded-lg ${
        isStarted ? "bg-gradient-to-br from-[#D9E3FF]/70 to-[#FFE4E0]/70" : "bg-white"
      }`}>
      <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
      <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      <hr className="my-4" />
      <StudyDetailInfo meetingDay={meetingDay} task={getMeetingInfoTaskText(task)} memberCount={memberCount} />
    </Link>
  );
}
