import Gnb from "@/components/commons/Gnb";
import TapBar from "@/components/commons/TapBar";
import UpcomingStudy from "@/components/domains/mystudy/UpcomingStudy";
import CreateStudyButton from "@/components/commons/CreateStudyButton";
import MyStudyTab from "@/components/domains/mystudy/MyStudyTab";

export default async function Layout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <>
      <Gnb />
      <TapBar />
      <UpcomingStudy />
      <MyStudyTab />
      {tabs}
      <CreateStudyButton />
    </>
  );
}
