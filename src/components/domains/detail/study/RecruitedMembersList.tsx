import HorizontalDivider from "@/components/commons/HorizontalDivider";
import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";

import Title from "../Title";
import MemberProfile from "./elements/MemberProfile";
import { TStudyDetailInfoData } from "@/types/api/study";

interface IRecruitedMembersListProps {
  study: TStudyDetailInfoData["study"];
  memberList: TStudyDetailInfoData["teamMemberList"];
}

export default function RecruitedMembersList({ study, memberList }: IRecruitedMembersListProps) {
  return (
    <>
      <article id="recruited_member">
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>
            팀원 프로필
            <span className="text-main-500 ml-2">
              {memberList.filter((member) => member.status === "ACCEPTED").length}/{study.wantedMember.count}
            </span>
          </Title>
          <HorizontalDivider addStyle="my-4" />
          <div className="flex flex-col gap-1 justify-start">
            {memberList?.map((member) => (
              <MemberProfile
                key={member.memberId}
                nickname={member.nickname}
                profileImageUrl={member.profileImageUrl}
                role={member.role}
                isLeader={member.isOwner}
                status={member.status}
              />
            ))}
          </div>
        </StudyDetailCardLayout>
      </article>
    </>
  );
}
