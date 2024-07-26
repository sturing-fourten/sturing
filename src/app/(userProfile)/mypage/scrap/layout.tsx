import TabBarLinkUnderlined from "@/components/commons/TabBarLinkUnderlined";
import TopBar from "@/components/commons/TopBar";
import { TTabMenuLinkUnderlinedItem } from "@/types/study";

interface IDashboardProps {
  params: {
    id: string;
  };
  tabs: React.ReactNode;
}

export default function ScrapLayout({ params, tabs }: IDashboardProps) {
  const { id } = params;

  const hrefBase = `/mypage/scrap/`;

  const SCRAP_TAB_MENU_LIST: TTabMenuLinkUnderlinedItem[] = [
    { id: "study", title: "스터디", href: `${hrefBase}` },
    { id: "lecture", title: "강의", href: `${hrefBase}lecture` },
  ];

  return (
    <>
      {/* Header */}
      {/* TODO 공통 레이아웃 처리 */}
      <TopBar variant="back">관심 목록</TopBar>

      {/* Tab Menu */}
      <TabBarLinkUnderlined defaultSegment={hrefBase} tabMenuList={SCRAP_TAB_MENU_LIST} isReplace={true} />

      {/* Tab Panel */}
      {tabs}
    </>
  );
}
