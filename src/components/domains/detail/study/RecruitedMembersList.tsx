import HorizontalDivider from "@/components/commons/HorizontalDivider";
import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";

import Title from "../Title";
import MemberProfile from "./elements/MemberProfile";
import { IMAGES_DEFAUlT } from "@/constant/images";

type TMember = {
  id: string;
  nickname: string;
  profileImageUrl: string;
  isLeader: boolean;
  role: string;
};

const memberList: TMember[] = [
  {
    id: "1",
    nickname: "웅진",
    profileImageUrl: "",
    isLeader: true,
    role: "팀장",
  },
  {
    id: "2",
    nickname: "체리콜라",
    profileImageUrl: "",
    isLeader: false,
    role: "기록팀장",
  },
  {
    id: "3",
    nickname: "취뽀고",
    profileImageUrl: "",
    isLeader: false,
    role: "일정팀장",
  },
];

export default function RecruitedMembersList() {
  return (
    <>
      <article id="recruited_member">
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>
            팀원 프로필<span className="text-main-500 ml-2">3/4</span>
          </Title>
          <HorizontalDivider addStyle="my-4" />
          <div className="flex flex-col gap-1 justify-start">
            {memberList.map((member) => (
              <MemberProfile key={member.id} {...member} />
            ))}
          </div>
        </StudyDetailCardLayout>
      </article>
    </>
  );
}
