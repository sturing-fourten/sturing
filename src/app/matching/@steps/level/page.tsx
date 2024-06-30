import BottomButton from "@/components/domains/matching/BottomButton";
import LevelContent from "@/components/domains/matching/LevelContent";
import Title from "@/components/domains/matching/Title";
import { MATCHING_CONFIG } from "@/constant/matchingConfig";

export default function LocationStepPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <div className="flex flex-col gap-[40px] mb-[150px] sm:mb-0">
        <Title>{MATCHING_CONFIG.level.title}</Title>
        <LevelContent />
      </div>
      <BottomButton />
    </div>
  );
}
