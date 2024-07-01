import Gnb from "@/components/commons/Gnb";
import TapBar from "@/components/commons/TapBar";
import StudyList from "@/components/domains/mystudy/StudyList";
import UpcomingStudy from "@/components/domains/mystudy/UpcomingStudy";
import CreateButton from "@/components/commons/CreateButton";

export default function Layout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <>
      <Gnb />
      <TapBar />
      <UpcomingStudy />
      <StudyList>{tabs}</StudyList>

      <CreateButton />
    </>
  );
}
