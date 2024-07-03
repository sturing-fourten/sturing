import DetailInfo from "../DetailInfo";
import { STUDY_RECRUIT_INFO, USER_FAVORITE_FIELD_TYPE } from "@/constant/study";
import LectureCard from "@/components/commons/card/LectureCard";
import HorizontalDivider from "@/components/commons/HorizontalDivider";
import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";
import { MoodMiniTag } from "@/components/commons/tag/MoodMiniTag";
import TagsLayout from "./elements/layouts/TagsLayout";
import WantTeamTag from "./elements/WantTeamTag";
import Title from "../Title";

const { teamMember, meeting, task, location } = STUDY_RECRUIT_INFO;

export default function RecruitInfo() {
  return (
    <>
      <article id="recruit_Info">
        <section className="flex flex-col gap-3 justify-start py-5">
          <DetailInfo icon={teamMember.icon} title={teamMember.title} content="최대 4명" />
          <DetailInfo icon={meeting.icon} title={meeting.title} content="매주 토요일 오후 8:00 진행" />
          <DetailInfo icon={task.icon} title={task.title} content="스터디 게시판 사진 인증" />
          <DetailInfo icon={location.icon} title={location.title} content="서울특별시 중구" />
        </section>
        <HorizontalDivider />
        <StudyDetailCardLayout addStyle="mt-5">
          <Title href="-">진행 강의 정보</Title>
          <HorizontalDivider addStyle="my-4" />
          <LectureCard variant="info" />
        </StudyDetailCardLayout>
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>해당 스터디의 분위기</Title>
          <HorizontalDivider addStyle="my-4" />
          <TagsLayout>
            <MoodMiniTag
              src={USER_FAVORITE_FIELD_TYPE.friendly.src}
              alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}>
              {USER_FAVORITE_FIELD_TYPE.friendly.alt}
            </MoodMiniTag>
            <MoodMiniTag
              src={USER_FAVORITE_FIELD_TYPE.friendly.src}
              alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}>
              {USER_FAVORITE_FIELD_TYPE.friendly.alt}
            </MoodMiniTag>
            <MoodMiniTag
              src={USER_FAVORITE_FIELD_TYPE.friendly.src}
              alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}>
              {USER_FAVORITE_FIELD_TYPE.friendly.alt}
            </MoodMiniTag>
          </TagsLayout>
        </StudyDetailCardLayout>
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>해당 스터디에서 원하는 팀원</Title>
          <HorizontalDivider addStyle="my-4" />
          <TagsLayout>
            <WantTeamTag text="20대" />
            <WantTeamTag text="비기너" />
          </TagsLayout>
          <TagsLayout addStyle="mt-3">
            <WantTeamTag text="과제팀장" />
            <WantTeamTag text="알림팀장" />
            <WantTeamTag text="환경팀장" />
          </TagsLayout>
        </StudyDetailCardLayout>
      </article>
    </>
  );
}
