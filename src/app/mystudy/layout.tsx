import Gnb from "@/components/commons/Gnb";
import TapBar from "@/components/commons/TapBar";
import UpcomingStudy from "@/components/domains/mystudy/UpcomingStudy";

export default function Layout() {
  return (
    <main>
      <Gnb />
      <TapBar />
      <UpcomingStudy />
    </main>
  );
}
