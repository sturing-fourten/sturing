import TabBarLinkUnderlined from "@/components/commons/TabBarLinkUnderlined";
import TopBar from "@/components/commons/TopBar";
import StudyInfo from "@/components/domains/dashboard/StudyInfo";
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

  const bg = `bg-[linear-gradient(0deg,#151515_0%,rgba(21,21,21,0.50)_100%),url('https://picsum.photos/200/300')]`;

  return (
    <>
      <section className="min-h-dvh bg-gray-100">
        {/* Header */}
        <div className={`relative bg-no-repeat bg-cover bg-top ${bg}`}>
          {/* TODO 공통 레이아웃 처리 */}
          <TopBar variant="share" showMore={false} isWhite={true} isBackToHome />
          {/* Study Info */}
          <StudyInfo params={id} />
        </div>
        {/* Tab Menu */}
        <TabBarLinkUnderlined
          defaultSegment={hrefBase}
          tabMenuList={MY_STUDY_DASHBOARD_TAB_MENU_LIST}
          stickyOption="sticky top-0 z-[2]"
        />
        {/* Tab Panel */}
        {tabs}
      </section>
    </>
  );
}
