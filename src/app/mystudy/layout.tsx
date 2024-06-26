import Gnb from "@/components/commons/Gnb";
import TapBar from "@/components/commons/TapBar";
import StudyList from "@/components/domains/mystudy/StudyList";
import UpcomingStudy from "@/components/domains/mystudy/UpcomingStudy";
import FloatingLink from "@/components/commons/FloatingLink";
import Image from "next/image";
import { add } from "@/../public/icons/icons";

export default function Layout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <>
      <Gnb />
      <TapBar />
      <UpcomingStudy />
      <StudyList>{tabs}</StudyList>

      <FloatingLink href="">
        <Image src={add} alt="add button" />
      </FloatingLink>
    </>
  );
}
