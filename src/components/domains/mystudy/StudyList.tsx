import { STUDY_TAB_MENU_LIST } from "@/constant/study";
import TabBarUnderlined from "../../commons/TabBarLinkUnderlined";

interface IStudyListProps {
  children: React.ReactNode;
}

export default function StudyList({ children }: IStudyListProps) {
  return (
    <article className="w-full pt-10 px-4">
      <p className="mb-4 text-black text-xl font-semibold leading-7">스터디 리스트</p>

      <TabBarUnderlined defaultSegment="/mystudy/" tabMenuList={STUDY_TAB_MENU_LIST} />
      {children}
    </article>
  );
}
