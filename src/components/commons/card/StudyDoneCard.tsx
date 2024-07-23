import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import { getDateRange } from "@/utils/getDateRange";
import { getSession } from "@/lib/database/getSession";
import LinkCardWrapper from "@/components/domains/mystudy/LinkCardWrapper";
import { TeamMemberReviewItem } from "./element/TeamMemberReviewItem";
import LectureReviewButton from "./element/LectureReviewButton";
import ReceivedReviewButton from "./element/ReceivedReviewButton";

interface IStudyDoneCardProps {
  study: TMyStudy;
}

export default async function StudyDoneCard(props: IStudyDoneCardProps) {
  const {
    study: {
      _id: studyId,
      title,
      startDate,
      endDate,
      meeting: { format, platform, location },
      teamMembersId,
      lectureId,
    },
  } = props;

  const session = await getSession();
  const myUserId = session?.user?.id;

  const teamMemberList = (teamMembersId as TTeamMembersIdAddedMember)?.members?.filter(
    (member) => member.userId._id.toString() !== myUserId && member.status === "ACCEPTED",
  );

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";
  const lectureIdString = lectureId.toString();

  return (
    <LinkCardWrapper
      className="flex flex-col gap-5 py-6 px-5 border border-gray-300 rounded-lg bg-white"
      href={`/study/${studyId}/dashboard`}>
      <div className="w-full text-left">
        <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
        <p className="mt-2 mb-3 text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
        <LectureReviewButton lectureId={lectureIdString}>강의 후기 작성하기</LectureReviewButton>
      </div>
      <hr className="bg-gray-300" />
      {teamMemberList.map((member) => (
        <TeamMemberReviewItem key={member.userId?._id.toString()} member={member} />
      ))}
      <ReceivedReviewButton>내가 받은 후기 보기</ReceivedReviewButton>
    </LinkCardWrapper>
  );
}
