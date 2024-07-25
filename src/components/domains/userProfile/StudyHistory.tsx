"use client";

import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";
import StudyHistoryCard from "@/components/commons/card/StudyHistoryCard";
import useOpenToggle from "@/hooks/useOpenToggle";
import { TMyStudy } from "@/types/study";
import NoResultText from "@/components/commons/NoResultText";

export default function StudyHistory({ doneStudyList }: { doneStudyList: TMyStudy[] }) {
  const { isOpen, openToggle } = useOpenToggle();

  return (
    <>
      <section className="px-4 py-5">
        <Title openToggle={openToggle} isOpen={isOpen}>
          스터디 이력 <span className="text-main-500 ml-2">{doneStudyList.length}</span>
        </Title>
        {isOpen && (
          <div className="flex flex-col gap-2 mt-[29px]">
            {doneStudyList.length === 0 ? (
              <NoResultText>스터디 이력이 없어요.</NoResultText>
            ) : (
              doneStudyList.map((study) => <StudyHistoryCard key={study._id.toString()} study={study} />)
            )}
          </div>
        )}
      </section>
      <HorizontalDivider />
    </>
  );
}
