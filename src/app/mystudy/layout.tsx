import Gnb from "@/components/commons/Gnb";
import TapBar from "@/components/commons/TapBar";
import StudyList from "@/components/domains/mystudy/StudyList";
import UpcomingStudy from "@/components/domains/mystudy/UpcomingStudy";
import CreateStudyButton from "@/components/commons/CreateStudyButton";
import { headers } from "next/headers";
import { useMyStudyListStore } from "@/store/myStudyListStore";
import {
  fetchDoneStudyListAction,
  fetchProgressStudyListAction,
  fetchRecruitStartOwnerStudyListAction,
} from "@/lib/database/action/myStudyList";
import { redirect } from "next/navigation";

export default async function Layout({ tabs }: { tabs: React.ReactNode }) {
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname") || "";
  const currentListType = useMyStudyListStore.getState().currentListType;
  const isFirstRender = currentListType === null;

  if (isFirstRender) {
    if (headerPathname === "/mystudy") {
      useMyStudyListStore.getState().setCurrentListType("PROGRESS");
      await fetchProgressStudyListAction();
      redirect("/mystudy");
    } else if (headerPathname === "/mystudy/recruitment") {
      useMyStudyListStore.getState().setCurrentListType("RECRUIT_START_OWNER");
      await fetchRecruitStartOwnerStudyListAction();
      redirect("/mystudy/recruitment");
    } else if (headerPathname === "/mystudy/done") {
      useMyStudyListStore.getState().setCurrentListType("DONE");
      await fetchDoneStudyListAction();
      redirect("/mystudy/done");
    }
  }

  return (
    <>
      <Gnb />
      <TapBar />
      <UpcomingStudy />
      <StudyList>{tabs}</StudyList>

      <CreateStudyButton />
    </>
  );
}
