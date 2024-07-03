import HorizontalDivider from "@/components/commons/HorizontalDivider";
import Title from "./Title";
import StudyHistoryCard from "@/components/commons/card/StudyHistoryCard";

export default function StudyHistory() {
  return (
    <>
      <section className="px-4 py-5">
        <Title>
          스터디 이력 <span className="text-main-500 ml-2">{`20`}</span>
        </Title>
        <div className="flex flex-col gap-2 mt-[29px]">
          <StudyHistoryCard />
          <StudyHistoryCard />
          <StudyHistoryCard />
        </div>
      </section>
      <HorizontalDivider />
    </>
  );
}
