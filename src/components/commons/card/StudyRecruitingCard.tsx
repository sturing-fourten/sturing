import { getDateRange } from "@/utils/getDateRange";
import StudyCardLink from "./element/StudyCardLink";
import { StudyDetailInfo } from "./element/StudyDetailInfo";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import Link from "next/link";
import { getMeetingInfoTaskText } from "@/utils/getMeetingInfoTaskText";

interface IStudyRecruitingCardProps {
  study: TMyStudy;
}

export default function StudyRecruitingCard(props: IStudyRecruitingCardProps) {
  const {
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
    <Link className="py-6 px-5 border border-gray-300 bg-white rounded-lg" href={`/study/${studyId}`}>
      <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
      <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      <hr className="my-4" />
      <StudyDetailInfo
        className="mb-4"
        meetingDay={meetingDay}
        task={getMeetingInfoTaskText(task)}
        memberCount={memberCount}
      />
      <StudyCardLink href={`/application-list/${studyId}`}>지원서 리스트 보기</StudyCardLink>
    </Link>
  );
}
