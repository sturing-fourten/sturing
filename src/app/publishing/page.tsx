"use client";
import { StudyCategoryButton } from "@/components/commons/StudyCategoryButton";
import LectureCard from "@/components/commons/card/LectureCard";
import StudyAcceptCard from "@/components/commons/card/StudyAcceptCard";
import StudyAppliedCard from "@/components/commons/card/StudyAppliedCard";
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
import { STUDY_CATEGORY_MENU, STUDY_TAB_MENU_LIST, USER_FAVORITE_FIELD_TYPE } from "@/constant/study";
import FloatingLink from "@/components/commons/FloatingLink";
import { add } from "@/../public/icons/icons";
import Image from "next/image";
import TabBarUnderlined from "@/components/commons/TabBarLinkUnderlined";
import TabMenuButtonUnderlined from "@/components/commons/TabMenuButtonUnderlined";

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
          imageAlt={`${STUDY_CATEGORY_MENU.design.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.design.name}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.develop.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.develop.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.develop.name}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.marketing.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.marketing.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.marketing.name}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.business.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.business.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.business.name}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.economic.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.economic.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.economic.name}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.language.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.language.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.language.name}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.certificate.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.certificate.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.certificate.name}
        </StudyCategoryButton>
        <StudyCategoryButton
          imageSrc={STUDY_CATEGORY_MENU.selfDevelop.imageSrc}
          imageAlt={`${STUDY_CATEGORY_MENU.selfDevelop.name} 아이콘`}>
          {STUDY_CATEGORY_MENU.selfDevelop.name}
        </StudyCategoryButton>
      </div>
      <div className="p-4">
        <h1 className="font-bold">StudyCategoryToggle</h1>
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.design.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.design.name}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.develop.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.develop.name}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.marketing.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.marketing.name}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.business.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.business.name}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.economic.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.economic.name}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.language.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.language.name}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.certificate.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.certificate.name}</StudyCategoryToggle>
        <br />
        <StudyCategoryToggle isActive={true}>{STUDY_CATEGORY_MENU.selfDevelop.name}</StudyCategoryToggle>
        <StudyCategoryToggle isActive={false}>{STUDY_CATEGORY_MENU.selfDevelop.name}</StudyCategoryToggle>
        <br />
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Mini Tag</h1>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.friendly.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.professional.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.serious.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.systematic.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.passionate.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.responsible.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.proactive.name}
        </MoodMiniTag>
        <MoodMiniTag
          imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.name} 아이콘`}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.name}
        </MoodMiniTag>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Mini Toggle</h1>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.friendly.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.friendly.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.professional.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.professional.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.serious.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.serious.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.systematic.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.systematic.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.passionate.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.passionate.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.responsible.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.responsible.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.learningFocused.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.collaborative.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.proactive.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.proactive.name}
        </MoodMiniToggle>
        <br />
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.name} 아이콘`}
          isActive={true}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.name}
        </MoodMiniToggle>
        <MoodMiniToggle
          imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
          imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.name} 아이콘`}
          isActive={false}>
          {USER_FAVORITE_FIELD_TYPE.freewheeling.name}
        </MoodMiniToggle>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Mood Big Toggle</h1>
        <div className="grid grid-cols-2 gap-4">
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.friendly.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.friendly.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.friendly.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.friendly.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.professional.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.professional.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.professional.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.professional.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.serious.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.serious.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.serious.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.serious.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.systematic.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.systematic.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.systematic.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.systematic.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.passionate.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.passionate.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.passionate.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.passionate.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.responsible.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.responsible.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.responsible.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.responsible.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.learningFocused.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.learningFocused.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.learningFocused.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.learningFocused.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.collaborative.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.collaborative.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.collaborative.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.collaborative.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.proactive.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.proactive.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.proactive.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.proactive.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.name} 아이콘`}
            isActive={true}>
            {USER_FAVORITE_FIELD_TYPE.freewheeling.name}
          </MoodBigToggle>
          <MoodBigToggle
            imageSrc={USER_FAVORITE_FIELD_TYPE.freewheeling.imageSrc}
            imageAlt={`${USER_FAVORITE_FIELD_TYPE.freewheeling.name} 아이콘`}
            isActive={false}>
            {USER_FAVORITE_FIELD_TYPE.freewheeling.name}
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
        <h1 className="font-bold">StudyAppliedCard</h1>
        <StudyAppliedCard status={"APPLIED"} />
        <StudyAppliedCard status={"APPLIED_VIEW"} />
        <StudyAppliedCard status={"ACCEPTED"} />
      </div>

      <div className="p-4">
        <h1 className="font-bold">StudyAcceptCard</h1>
        <StudyAcceptCard status={"APPLIED"} />
        <StudyAcceptCard status={"APPLIED_VIEW"} />
        <StudyAcceptCard status={"ACCEPTED"} />
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
        <h1 className="font-bold">FloatingLink</h1>
        <FloatingLink href="">
          <Image src={add} alt="add button" />
        </FloatingLink>
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
    </>
  );
}
