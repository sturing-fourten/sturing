import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";
import PeerReviewTag from "./PeerReviewTag";

export default function PeerReviewTagList() {
  return (
    <>
      <section className="px-4 py-5">
        <Title>
          받은 스터디 평가 <span className="text-main-500 ml-2">{`10`}</span>
        </Title>
        <div className="flex flex-col gap-2 mt-[29px]">
          <PeerReviewTag type="FEEDBACK" count="1" />
          <PeerReviewTag type="PUNCTUAL" count="1" />
          <PeerReviewTag type="ATTEND" count="1" />
          <PeerReviewTag type="FULFILL" count="1" />
        </div>
      </section>
      <HorizontalDivider />
    </>
  );
}
