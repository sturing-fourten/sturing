import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import Title from "@/components/domains/matching/Title";
import BottomButton from "@/components/domains/matching/BottomButton";
import MoodContent from "@/components/domains/matching/MoodContent";

export default function MoodStepPage() {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <div className="flex flex-col gap-[40px]">
        <Title subTitle>{`웅진님 ${MATCHING_CONFIG.mood.title}`}</Title>
        <MoodContent />
      </div>
      <BottomButton />
    </div>
  );
}
