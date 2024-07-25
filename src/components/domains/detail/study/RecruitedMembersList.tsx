"use client";

import HorizontalDivider from "@/components/commons/HorizontalDivider";
import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";

import Title from "../Title";
import MemberProfile from "./elements/MemberProfile";
import { TStudyDetailInfoData } from "@/types/api/study";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";
import { RecentViewedStudy } from "@/types/localStorage";
import { useEffect } from "react";

interface IRecruitedMembersListProps {
  study: TStudyDetailInfoData["study"];
  memberList: TStudyDetailInfoData["teamMemberList"];
}

export default function RecruitedMembersList({ study, memberList }: IRecruitedMembersListProps) {
  useEffect(() => {
    const recentStudyList = localStorage.getItem("recentStudy");
    const parsedRecentStudyList = recentStudyList ? JSON.parse(recentStudyList) : [];

    const newStudy: RecentViewedStudy = {
      id: study._id.toString(),
      category: study.category,
      title: study.title,
      imageUrl: study.imageUrl,
      startDate: study.startDate,
      endDate: study.endDate,
      meeting: study.meeting,
      wantedMemberCount: study.wantedMember.count,
      acceptedTeamMemberCount: memberList.filter((member: any) => member.status === "ACCEPTED").length,
    };

    const filteredRecentStudyList = parsedRecentStudyList.filter(
      (study: RecentViewedStudy) => study.id !== newStudy.id,
    );

    let newRecentStudyList: RecentViewedStudy[] = [newStudy, ...filteredRecentStudyList];
    if (parsedRecentStudyList.length > 6) {
      newRecentStudyList = newRecentStudyList.slice(0, 6);
    }
    localStorage.setItem("recentStudy", JSON.stringify(newRecentStudyList));
  }, []);
  return (
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
              key={member.memberId.toString()}
              nickname={member.nickname}
              profileImageUrl={member.profileImageUrl}
              role={ROLE_LIST[member.role]?.name}
              isLeader={member.isOwner}
              status={member.status}
            />
          ))}
        </div>
      </StudyDetailCardLayout>
    </article>
  );
}
