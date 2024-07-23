import DetailInfo from "../DetailInfo";
import { STUDY_RECRUIT_INFO, USER_FAVORITE_FIELD_TYPE } from "@/constant/study";
import LectureCard from "@/components/commons/card/LectureCard";
import HorizontalDivider from "@/components/commons/HorizontalDivider";
import StudyDetailCardLayout from "./elements/layouts/StudyDetailCardLayout";
import { MoodMiniTag } from "@/components/commons/tag/MoodMiniTag";
import TagsLayout from "./elements/layouts/TagsLayout";
import Title from "../Title";
import { TLectureInfoData } from "@/types/api/lecture";
import { TStudyDetailInfoData } from "@/types/api/study";
import { AGE_LIST, CAREER_LIST, ROLE_LIST } from "@/constant/teamMemberInfo";

interface IRecruitInfoProps {
  study: TStudyDetailInfoData["study"];
  lecture: TLectureInfoData;
}

const { teamMember, meeting, task, location } = STUDY_RECRUIT_INFO;

export default function RecruitInfo({ study, lecture }: IRecruitInfoProps) {
  const renderTags = (items: string[], list: { [key: string]: string | { name: string } }) => {
    return items.map((item) => {
      const listItem = list[item];
      return (
        <span
          key={item}
          className="inline-flex items-center h-[33px] px-3 text-center border border-main-500 rounded-[3px] text-[14px] font-medium text-main-500 tracking-[-0.42px]">
          {typeof listItem === "string" ? listItem : listItem?.name}
        </span>
      );
    });
  };
  return (
    <article id="recruit_Info">
      <section className="flex flex-col gap-3 justify-start py-5">
        <DetailInfo
          icon={teamMember.icon}
          title={teamMember.title}
          content={`최대 ${study.wantedMember.count}${study.wantedMember.count === "제한없음" ? "" : "명"}`}
        />
        <DetailInfo
          icon={meeting.icon}
          title={meeting.title}
          content={`매주 ${study.meeting.schedule.day} ${study.meeting.schedule.time} 진행`}
        />
        <DetailInfo icon={task.icon} title={task.title} taskContent={study.task} />
        <DetailInfo
          icon={location.icon}
          title={location.title}
          content={study.meeting.platform || study.meeting.location}
        />
      </section>
      <HorizontalDivider />
      <StudyDetailCardLayout addStyle="mt-5">
        <Title href={`/lecture/${lecture.id}`}>진행 강의 정보</Title>
        <HorizontalDivider addStyle="my-4" />
        <LectureCard variant="info" lecture={lecture} />
      </StudyDetailCardLayout>
      <StudyDetailCardLayout addStyle="mt-4">
        <Title>해당 스터디의 분위기</Title>
        <HorizontalDivider addStyle="my-4" />
        <TagsLayout>
          {study.moodKeywords &&
            study.moodKeywords.map((mood: string) => {
              const moodData = USER_FAVORITE_FIELD_TYPE[mood as keyof typeof USER_FAVORITE_FIELD_TYPE];
              return (
                <MoodMiniTag key={mood} src={moodData?.src} alt={`${moodData?.alt} 아이콘`}>
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
          {renderTags(study.wantedMember.age, AGE_LIST)}
          {renderTags(study.wantedMember.career, CAREER_LIST)}
        </TagsLayout>
        <TagsLayout addStyle="mt-3">{renderTags(study.wantedMember.role, ROLE_LIST)}</TagsLayout>
      </StudyDetailCardLayout>
    </article>
  );
}
