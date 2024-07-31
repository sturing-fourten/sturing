import Button from "@/components/commons/Button";
import TabBarLinkUnderlined from "@/components/commons/TabBarLinkUnderlined";
import TopBar from "@/components/commons/TopBar";
import StudyInfo from "@/components/domains/dashboard/StudyInfo";
import StudyStatusButton from "@/components/domains/dashboard/StudyStatusButton";
import { IMAGES_DEFAUlT } from "@/constant/images";
import { fetchStudyInfo } from "@/lib/database/action/dashboard";
import { getSession } from "@/lib/database/getSession";
import { TTabMenuLinkUnderlinedItem } from "@/types/study";
import { getIsTodayAfterTargetDate } from "@/utils/getIsTodayAfterTargetDate";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

interface IDashboardProps {
  params: {
    id: string;
  };
  tabs: React.ReactNode;
}

export default async function DashboardLayout({ params, tabs }: IDashboardProps) {
  const { id } = params;

  const hrefBase = `/study/${id}/dashboard/`;
  const redirectHref = `/study/${id}`;

  const MY_STUDY_DASHBOARD_TAB_MENU_LIST: TTabMenuLinkUnderlinedItem[] = [
    { id: "team", title: "팀", href: `${hrefBase}` },
    { id: "me", title: "개인", href: `${hrefBase}me` },
    { id: "schedule", title: "일정", href: `${hrefBase}schedule` },
    { id: "board", title: "게시판", href: `${hrefBase}board` },
  ];

  const study = await fetchStudyInfo(id);
  const studyData = study.study;
  if (!studyData?._id) notFound();

  const { startDate, endDate, status, ownerId } = studyData;
  const isNotDashboardReady = status === "RECRUIT_START";
  if (isNotDashboardReady) redirect(redirectHref);

  const session = await getSession();
  const myUserId = session?.user?.id;
  const isOwner = myUserId === ownerId;
  const isShowStartButton =
    isOwner && getIsTodayAfterTargetDate(new Date(startDate)) === true && status === "RECRUIT_END";
  const isShowDoneButton = isOwner && getIsTodayAfterTargetDate(new Date(endDate)) === true && status === "PROGRESS";

  const { study: studyBg } = IMAGES_DEFAUlT;

  const backgroundImageUrl = studyData.imageUrl || studyBg.src;
  const bgStyle = {
    background: `linear-gradient(0deg, #151515 0%, rgba(21, 21, 21, 0.50) 100%), url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <section
        className={`w-[inherit] min-h-dvh bg-gray-100 ${(isShowStartButton || isShowDoneButton) && "pb-[56px]"}`}>
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

        {/* CTA Button */}
        {isShowStartButton && (
          <footer className="fixed bottom-0 z-[2] w-[inherit] py-3 px-4 bg-white">
            <StudyStatusButton type="toProgress" studyId={id} />
          </footer>
        )}
        {isShowDoneButton && (
          <footer className="fixed bottom-0 z-[2] w-[inherit] py-3 px-4 bg-white">
            <StudyStatusButton type="toDone" studyId={id} />
          </footer>
        )}
      </section>
    </>
  );
}
