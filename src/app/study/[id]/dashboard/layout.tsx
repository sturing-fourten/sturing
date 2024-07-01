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

export default function DashboardLayout({ params, tabs }: IDashboardProps) {
  const { id } = params;

  const hrefBase = `/study/${id}/dashboard/`;

  const MY_STUDY_DASHBOARD_TAB_MENU_LIST: TTabMenuLinkUnderlinedItem[] = [
    { id: "team", title: "팀", href: `${hrefBase}` },
    { id: "me", title: "개인", href: `${hrefBase}me` },
    { id: "schedule", title: "일정", href: `${hrefBase}schedule` },
    { id: "board", title: "게시판", href: `${hrefBase}board` },
  ];

  return (
    <>
      {/* Header */}
      {/* TODO 공통 레이아웃 처리 */}
      <TopBar varient="share" />

      {/* Study Info */}
      <StudyInfo />

      {/* Tab Menu */}
      <TabBarLinkUnderlined defaultSegment={hrefBase} tabMenuList={MY_STUDY_DASHBOARD_TAB_MENU_LIST} />

      {/* Tab Panel */}
      {tabs}
    </>
  );
}
