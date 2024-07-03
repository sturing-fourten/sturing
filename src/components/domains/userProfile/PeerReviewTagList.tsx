"use client";

import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";
import PeerReviewTag from "./PeerReviewTag";
import useOpenToggle from "@/hooks/useOpenToggle";

export default function PeerReviewTagList() {
  const { isOpen, openToggle } = useOpenToggle();
  return (
    <>
      <section className="px-4 py-5">
        <Title openToggle={openToggle} isOpen={isOpen}>
          받은 스터디 평가 <span className="text-main-500 ml-2">{`10`}</span>
        </Title>
        {isOpen && (
          <div className="flex flex-col gap-2 mt-[29px]">
            <PeerReviewTag type="FEEDBACK" count="1" />
            <PeerReviewTag type="PUNCTUAL" count="1" />
            <PeerReviewTag type="ATTEND" count="1" />
            <PeerReviewTag type="FULFILL" count="1" />
          </div>
        )}
      </section>
      <HorizontalDivider />
    </>
  );
}
