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

  const hrefBase = `/study/${id}/dashboard`;

  const MY_STUDY_DASHBOARD_TAB_MENU_LIST: TTabMenuLinkUnderlinedItem[] = [
    { id: "1", title: "1", href: `${hrefBase}` },
    { id: "2", title: "2", href: `${hrefBase}/second` },
    { id: "3", title: "3", href: `${hrefBase}/third` },
    { id: "4", title: "4", href: `${hrefBase}/fourth` },
  ];

  return (
    <>
      {/* Header */}
      {/* TODO 공통 레이아웃 처리 */}
      <TopBar varient="share" />

      {/* Study Info */}
      <StudyInfo />
    </>
  );
}
