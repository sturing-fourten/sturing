import TabBarLinkUnderlined from "@/components/commons/TabBarLinkUnderlined";
import TopBar from "@/components/commons/TopBar";
import StudyInfo from "@/components/domains/dashboard/StudyInfo";
import { IMAGES_DEFAUlT } from "@/constant/images";
import { fetchStudyInfo } from "@/lib/database/action/dashboard";
import { TTabMenuLinkUnderlinedItem } from "@/types/study";

interface IDashboardProps {
  params: {
    id: string;
  };
  tabs: React.ReactNode;
}

export default async function DashboardLayout({ params, tabs }: IDashboardProps) {
  const { id } = params;

  const hrefBase = `/study/${id}/dashboard/`;

  const MY_STUDY_DASHBOARD_TAB_MENU_LIST: TTabMenuLinkUnderlinedItem[] = [
    { id: "team", title: "팀", href: `${hrefBase}` },
    { id: "me", title: "개인", href: `${hrefBase}me` },
    { id: "schedule", title: "일정", href: `${hrefBase}schedule` },
    { id: "board", title: "게시판", href: `${hrefBase}board` },
  ];

  const study = await fetchStudyInfo(id);
  const studyData = study.study;

  const { study: studyBg } = IMAGES_DEFAUlT;

  const backgroundImageUrl = studyData.imageUrl || studyBg.src;
  const bgStyle = {
    background: `linear-gradient(0deg, #151515 0%, rgba(21, 21, 21, 0.50) 100%), url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <section className="min-h-dvh bg-gray-100">
        {/* Header */}
        <div className="relative" style={bgStyle}>
          {/* TODO 공통 레이아웃 처리 */}
          <TopBar variant="share" showMore={false} isWhite={true} isBackToHome />
          {/* Study Info */}
          <StudyInfo study={study} studyData={studyData} />
        </div>
        {/* Tab Menu */}
        <TabBarLinkUnderlined
          defaultSegment={hrefBase}
          tabMenuList={MY_STUDY_DASHBOARD_TAB_MENU_LIST}
          stickyOption="sticky top-0 z-[2]"
          isReplace={true}
        />
        {/* Tab Panel */}
        {tabs}
      </section>
    </>
  );
}
