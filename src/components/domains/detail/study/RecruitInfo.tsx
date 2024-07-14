import DetailInfo from "../DetailInfo";
import { STUDY_RECRUIT_INFO, USER_FAVORITE_FIELD_TYPE } from "@/constant/study";
import LectureCard from "@/components/commons/card/LectureCard";
import HorizontalDivider from "@/components/commons/HorizontalDivider";
import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";
import { MoodMiniTag } from "@/components/commons/tag/MoodMiniTag";
import TagsLayout from "./elements/layouts/TagsLayout";
import WantTeamTag from "./elements/WantTeamTag";
import Title from "../Title";
import { TLectureInfoData } from "@/types/api/lecture";
import { TStudyDetailInfoData } from "@/types/api/study";

interface IRecruitInfoProps {
  study: TStudyDetailInfoData["study"];
  lecture: TLectureInfoData;
}

const { teamMember, meeting, task, location } = STUDY_RECRUIT_INFO;

export default function RecruitInfo({ study, lecture }: IRecruitInfoProps) {
  return (
    <>
      <article id="recruit_Info">
        <section className="flex flex-col gap-3 justify-start py-5">
          <DetailInfo icon={teamMember.icon} title={teamMember.title} content={`최대 ${study.wantedMember.count}명`} />
          <DetailInfo
            icon={meeting.icon}
            title={meeting.title}
            content={`매주 ${study.meeting.schedule.day} ${study.meeting.schedule.time} 진행`}
          />
          <DetailInfo icon={task.icon} title={task.title} taskContent={study.task} />
          <DetailInfo icon={location.icon} title={location.title} content={study.meeting.platform} />
        </section>
        <HorizontalDivider />
        <StudyDetailCardLayout addStyle="mt-5">
          <Title href="-">진행 강의 정보</Title>
          <HorizontalDivider addStyle="my-4" />
          <LectureCard variant="info" lecture={lecture} />
        </StudyDetailCardLayout>
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>해당 스터디의 분위기</Title>
          <HorizontalDivider addStyle="my-4" />
          <TagsLayout>
            {study.moodKeywords.map((mood: string, idx) => {
              const moodData = USER_FAVORITE_FIELD_TYPE[mood as keyof typeof USER_FAVORITE_FIELD_TYPE];
              return (
                <MoodMiniTag key={idx} src={moodData?.src} alt={`${moodData?.alt} 아이콘`}>
                  {moodData?.alt}
                </MoodMiniTag>
              );
            })}
          </TagsLayout>
        </StudyDetailCardLayout>
        <StudyDetailCardLayout addStyle="mt-4">
          <Title>해당 스터디에서 원하는 팀원</Title>
          <HorizontalDivider addStyle="my-4" />
          <TagsLayout>
            <WantTeamTag text={study.wantedMember.age} />
            <WantTeamTag text={study.wantedMember.career} />
          </TagsLayout>
          <TagsLayout addStyle="mt-3">
            <WantTeamTag text={study.wantedMember.role} />
          </TagsLayout>
        </StudyDetailCardLayout>
      </article>
    </>
  );
}
