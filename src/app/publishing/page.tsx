"use client";
import { StudyCategoryButton } from "@/components/commons/StudyCategoryButton";
import LectureCard from "@/components/commons/card/LectureCard";
import StudyApplicationCard from "@/components/commons/card/StudyApplicationCard";
import StudyApplyingCard from "@/components/commons/card/StudyApplyingCard";
import StudyDoneCard from "@/components/commons/card/StudyDoneCard";
import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import StudyUpcomingCard from "@/components/commons/card/StudyUpcomingCard";
import { MoodMiniTag } from "@/components/commons/tag/MoodMiniTag";
import { TagLight } from "@/components/commons/tag/TagLight";
import { TagMain } from "@/components/commons/tag/TagMain";
import { TagRate } from "@/components/commons/tag/TagRate";
import { MoodBigToggle, MoodMiniToggle } from "@/components/commons/toggle/MoodToggle";
import { StudyCategoryToggle } from "@/components/commons/toggle/StudyCategoryToggle";
import TabBarUnderlined from "@/components/commons/TabBarLinkUnderlined";
import TabMenuButtonUnderlined from "@/components/commons/TabMenuButtonUnderlined";
import { AssessmentCheckboxCard } from "@/components/commons/AssessmentCheckboxCard";
import { POSITIVE_ASSESSMENT_LIST } from "@/constant/teammate-review";
import StudyRecruitingCard from "@/components/commons/card/StudyRecruitingCard";
import { STUDY_CATEGORY_MENU, STUDY_TAB_MENU_LIST, USER_FAVORITE_FIELD_TYPE } from "@/constant/study";

// UI 확인 용
export const SAMPLE_PROGRESS_WAY_TYPE = {
  online: "온라인",
  offline: "오프라인",
  mix: "온∙오프라인",
};

export default function page() {
  return (
    <>
      <div className="p-4">
        <h1 className="font-bold">Tags</h1>
        <TagRate>4.5</TagRate>
        <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.online}</TagMain>
        <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.offline}</TagMain>
        <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.mix}</TagMain>
        <TagLight>마케팅</TagLight>
        <TagLight>디자인</TagLight>
        <TagLight>6월 7일</TagLight>
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyCategoryButton</h1>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.design.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.design.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.design.imageAlt}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.develop.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.develop.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.develop.imageAlt}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.marketing.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.marketing.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.marketing.imageAlt}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.business.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.business.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.business.imageAlt}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.economic.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.economic.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.economic.imageAlt}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.language.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.language.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.language.imageAlt}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.certificate.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.certificate.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.certificate.imageAlt}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.selfDevelop.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.selfDevelop.imageAlt} 아이콘`}>
          {STUDY_CATEGORY_MENU.selfDevelop.imageAlt}
        </StudyCategoryButton>
      </div>
      <div className="p-4">
        <h1 className="font-bold">StudyCategoryToggle</h1>
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.design.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.design.imageAlt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.develop.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.develop.imageAlt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.marketing.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.marketing.imageAlt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.business.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.business.imageAlt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.economic.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.economic.imageAlt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.language.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.language.imageAlt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.certificate.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.certificate.imageAlt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.selfDevelop.imageAlt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.selfDevelop.imageAlt}</StudyCategoryToggle>
        <br />
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Mini Tag</h1>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.friendly.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.professional.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.serious.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.systematic.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.passionate.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.responsible.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.proactive.imageAlt}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt}
        </MoodMiniTag>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Mini Toggle</h1>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.friendly.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.friendly.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.professional.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.professional.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.serious.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.serious.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.systematic.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.systematic.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.passionate.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.passionate.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.responsible.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.responsible.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.proactive.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.proactive.imageAlt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt}
        </MoodMiniToggle>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Big Toggle</h1>
        <div className="grid grid-cols-2 gap-4">
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.friendly.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.friendly.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.professional.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.professional.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.serious.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.serious.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.systematic.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.systematic.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.passionate.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.passionate.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.responsible.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.responsible.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.learningFocused.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.collaborative.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.proactive.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.proactive.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.freewheeling.imageAlt}
          </MoodBigToggle>
        </div>
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyRecruitCard</h1>
        <StudyRecruitCard isMini={false} isScraped={true} />
        <StudyRecruitCard isMini={false} isScraped={false} />
        <StudyRecruitCard isMini={true} isScraped={true} />
        <StudyRecruitCard isMini={true} isScraped={false} />
      </div>

      <div className="p-4">
        <h1 className="font-bold">Lecture Card</h1>
        <LectureCard variant="card" isScraped={true} />
        <LectureCard variant="card" isScraped={false} />
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyOnGoingCard</h1>
        <StudyOnGoingCard isStarted={true} />
        <StudyOnGoingCard isStarted={false} />
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyApplyingCard</h1>
        <StudyApplyingCard status={"APPLIED"} />
        <StudyApplyingCard status={"APPLIED_VIEW"} />
        <StudyApplyingCard status={"ACCEPTED"} />
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyApplicationCard</h1>
        <StudyApplicationCard status={"APPLIED"} />
        <StudyApplicationCard status={"APPLIED_VIEW"} />
        <StudyApplicationCard status={"ACCEPTED"} />
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyDoneCard</h1>
        <StudyDoneCard />
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyUpcomingCard</h1>
        <StudyUpcomingCard />
      </div>

      <div className="p-4">
        <h1 className="font-bold">TabBarUnderlined</h1>
        <TabBarUnderlined defaultSegment="/mystudy/" tabMenuList={STUDY_TAB_MENU_LIST} />
        (link 버전입니다. onClick으로 구현 시 아래 컴포넌트를 사용해주세요!)
        <nav className="flex justify-between items-center gap-3 bg-white">
          <TabMenuButtonUnderlined onClick={() => {}} title="buttonTitle" isCurrent={true} />
          <TabMenuButtonUnderlined onClick={() => {}} title="buttonTitle" isCurrent={false} />
        </nav>
      </div>

      <div className="p-4">
        <h1 className="font-bold">AssessmentCard</h1>
        <ul className="flex flex-col gap-3">
          {POSITIVE_ASSESSMENT_LIST.map((option, index) => (
            <AssessmentCheckboxCard key={index} option={option} />
          ))}
        </ul>
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyRecruitingCard</h1>
        <StudyRecruitingCard />
      </div>
    </>
  );
}
