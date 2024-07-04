"use client";

import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";
import StudyHistoryCard from "@/components/commons/card/StudyHistoryCard";
import useOpenToggle from "@/hooks/useOpenToggle";

export default function StudyHistory() {
  const { isOpen, openToggle } = useOpenToggle();
  return (
    <>
      <section className="px-4 py-5">
        <Title openToggle={openToggle} isOpen={isOpen}>
          스터디 이력 <span className="text-main-500 ml-2">{`20`}</span>
        </Title>
        {isOpen && (
          <div className="flex flex-col gap-2 mt-[29px]">
            <StudyHistoryCard />
            <StudyHistoryCard />
            <StudyHistoryCard />
          </div>
        )}
      </section>
      <HorizontalDivider />
    </>
  );
}
