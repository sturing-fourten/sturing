import Link from "next/link";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import StudyCardLink from "./element/StudyCardLink";
import { TMember, TMemberUserIdAddedUser, TMyStudy, TTeamMembersIdAddedMember } from "@/types/study";
import { getDateRange } from "@/utils/getDateRange";
import { getSession } from "@/lib/database/getSession";
import LinkCardWrapper from "@/components/domains/mystudy/LinkCardWrapper";
import LinkButtonWrapper from "@/components/domains/mystudy/LinkButtonWrapper";

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

  return (
    <LinkCardWrapper
      className="flex flex-col gap-5 py-6 px-5 border border-gray-300 rounded-lg bg-white"
      href={`/study/${studyId}/dashboard`}>
      <div className="w-full text-left">
        <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
        <p className="mt-2 mb-3 text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
        <StudyCardLink href={`/lecture/${lectureId}/review`}>강의 후기 작성하기</StudyCardLink>
      </div>
      <hr className="bg-gray-300" />
      {teamMemberList.map((member) => (
        <TeamMemberReviewItem key={member.userId?._id.toString()} member={member} />
      ))}
      <StudyCardLink href="">내가 받은 후기 보기</StudyCardLink>
    </LinkCardWrapper>
  );
}

function TeamMemberReviewItem({ member }: { member: TMember }) {
  /**
   * @todo review 유무 연동
   */

  const review = false;
  const user = member.userId as TMemberUserIdAddedUser;
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-[#212121] text-[14px] font-semibold tracking-[-0.42px]">{user.nickname}</p>

      {review ? (
        <button className="py-[6px] px-3 rounded-[5px] border border-gray-400 text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
          작성 완료
        </button>
      ) : (
        <Link
          className="py-[6px] px-3 rounded-[5px] border border-main-500 text-main-500 text-[12px] font-medium tracking-[-0.36px]"
          href={`/member-review/${member._id}`}>
          팀원 후기 작성하기
        </Link>
      )}
    </div>
  );
}
