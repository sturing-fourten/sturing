import { StudyCategoryButton, StudyCategoryToggle } from "@/components/commons/StudyCategorys";
import { TagLight, TagMain, TagRate } from "@/components/commons/Tags";
import { STUDY_CATEGORY_MENU } from "@/constant/study";

// UI 확인 용
export const SAMPLE_PROGRESS_WAY_TYPE = {
  online: "온라인",
  offline: "오프라인",
  mix: "온/오프라인",
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
    </>
  );
}
