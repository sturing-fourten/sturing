import Gnb from "@/components/commons/Gnb";
import TapBar from "@/components/commons/TapBar";
import UpcomingStudy from "@/components/domains/mystudy/UpcomingStudy";
import CreateStudyButton from "@/components/commons/CreateStudyButton";
import { useMyStudyListStore } from "@/store/myStudyListStore";
import MyStudyList from "@/components/domains/mystudy/MyStudyList";
import MyStudyTab from "@/components/domains/mystudy/MyStudyTab";

export default async function Layout({ tabs }: { tabs: React.ReactNode }) {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;

  return (
    <>
      <Gnb />
      <TapBar />
      <UpcomingStudy />
      <MyStudyTab />
      {tabs}
      {myStudyListType && <MyStudyList myStudyListType={myStudyListType} />}
      <CreateStudyButton />
    </>
  );
}
