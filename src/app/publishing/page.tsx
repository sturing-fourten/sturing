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
type SAMPLE_PROGRESS_WAY_TYPE = {
  online: string;
  offline: string;
  mix: string;
};

const SAMPLE_PROGRESS_WAY_TYPE: SAMPLE_PROGRESS_WAY_TYPE = {
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
        <StudyCategoryButton src={STUDY_CATEGORY_MENU.design.src} alt={`${STUDY_CATEGORY_MENU.design.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.design.alt}
        </StudyCategoryButton>
        <StudyCategoryButton src={STUDY_CATEGORY_MENU.develop.src} alt={`${STUDY_CATEGORY_MENU.develop.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.develop.alt}
        </StudyCategoryButton>
        <StudyCategoryButton
          src={STUDY_CATEGORY_MENU.marketing.src}
          alt={`${STUDY_CATEGORY_MENU.marketing.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.marketing.alt}
        </StudyCategoryButton>
        <StudyCategoryButton src={STUDY_CATEGORY_MENU.business.src} alt={`${STUDY_CATEGORY_MENU.business.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.business.alt}
        </StudyCategoryButton>
        <StudyCategoryButton src={STUDY_CATEGORY_MENU.economic.src} alt={`${STUDY_CATEGORY_MENU.economic.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.economic.alt}
        </StudyCategoryButton>
        <StudyCategoryButton src={STUDY_CATEGORY_MENU.language.src} alt={`${STUDY_CATEGORY_MENU.language.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.language.alt}
        </StudyCategoryButton>
        <StudyCategoryButton
          src={STUDY_CATEGORY_MENU.certificate.src}
          alt={`${STUDY_CATEGORY_MENU.certificate.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.certificate.alt}
        </StudyCategoryButton>
        <StudyCategoryButton
          src={STUDY_CATEGORY_MENU.selfDevelop.src}
          alt={`${STUDY_CATEGORY_MENU.selfDevelop.alt} 아이콘`}>
          {STUDY_CATEGORY_MENU.selfDevelop.alt}
        </StudyCategoryButton>
      </div>
      <div className="p-4">
        <h1 className="font-bold">StudyCategoryToggle</h1>
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.design.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.design.alt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.develop.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.develop.alt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.marketing.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.marketing.alt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.business.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.business.alt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.economic.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.economic.alt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.language.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.language.alt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.certificate.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.certificate.alt}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.selfDevelop.alt}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.selfDevelop.alt}</StudyCategoryToggle>
        <br />
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Mini Tag</h1>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.friendly.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.friendly.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.professional.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.professional.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.professional.alt}
        </MoodMiniTag>
        <MoodMiniTag src={USER_FAVORITE_FIELD_TYPE.serious.src} alt={`${USER_FAVORITE_FIELD_TYPE.serious.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.serious.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.systematic.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.systematic.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.systematic.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.passionate.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.passionate.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.passionate.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.responsible.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.responsible.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.responsible.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.learningFocused.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.collaborative.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.collaborative.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.proactive.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.proactive.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.proactive.alt}
        </MoodMiniTag>
        <MoodMiniTag
          src={USER_FAVORITE_FIELD_TYPE.freewheeling.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.alt} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.alt}
        </MoodMiniTag>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Mini Toggle</h1>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.friendly.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.friendly.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.friendly.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.friendly.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.professional.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.professional.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.professional.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.professional.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.professional.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.professional.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.serious.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.serious.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.serious.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.serious.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.serious.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.serious.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.systematic.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.systematic.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.systematic.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.systematic.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.systematic.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.systematic.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.passionate.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.passionate.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.passionate.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.passionate.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.passionate.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.passionate.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.responsible.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.responsible.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.responsible.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.responsible.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.responsible.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.responsible.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.learningFocused.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.learningFocused.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.collaborative.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.collaborative.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.collaborative.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.collaborative.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.proactive.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.proactive.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.proactive.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.proactive.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.proactive.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.proactive.alt}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.freewheeling.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.alt} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.alt}
        </MoodMiniToggle>
        <MoodMiniToggle
          src={USER_FAVORITE_FIELD_TYPE.freewheeling.src}
          alt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.alt} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.alt}
        </MoodMiniToggle>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Big Toggle</h1>
        <div className="grid grid-cols-2 gap-4">
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.friendly.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.friendly.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.friendly.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.friendly.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.friendly.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.professional.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.professional.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.professional.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.professional.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.professional.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.professional.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.serious.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.serious.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.serious.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.serious.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.serious.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.serious.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.systematic.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.systematic.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.systematic.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.systematic.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.systematic.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.systematic.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.passionate.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.passionate.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.passionate.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.passionate.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.passionate.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.passionate.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.responsible.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.responsible.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.responsible.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.responsible.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.responsible.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.responsible.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.learningFocused.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.learningFocused.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.learningFocused.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.learningFocused.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.collaborative.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.collaborative.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.collaborative.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.collaborative.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.collaborative.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.collaborative.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.proactive.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.proactive.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.proactive.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.proactive.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.proactive.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.proactive.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.freewheeling.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.alt} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.freewheeling.alt}
          </MoodBigToggle>
          <MoodBigToggle
            src={USER_FAVORITE_FIELD_TYPE.freewheeling.src}
            alt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.alt} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.freewheeling.alt}
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
