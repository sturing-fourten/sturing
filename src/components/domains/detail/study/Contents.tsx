import TabMenuLinkUnderlined from "@/components/commons/TabMenuLinkUnderlined";
import RecruitInfo from "./RecruitInfo";
import RecruitedMembersList from "./RecruitedMembersList";
import RecruitComments from "./RecruitComments";

export default function Contents() {
  return (
    <>
      <div className="mb-[73px]">
        <nav className="flex justify-between items-center gap-3 bg-gray-100 sticky top-0 left-0 z-sticky">
          <TabMenuLinkUnderlined title="정보" isCurrent={true} href="#recruit_Info" />
          <TabMenuLinkUnderlined title="팀원" isCurrent={false} href="#recruited_member" />
          <TabMenuLinkUnderlined title="댓글" isCurrent={false} href="#comments" />
        </nav>
        <div className="px-4 bg-gray-100 pb-12">
          <RecruitInfo />
          <RecruitedMembersList />
          <RecruitComments />
        </div>
      </div>
    </>
  );
}
