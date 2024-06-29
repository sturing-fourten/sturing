import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import Title from "@/components/domains/matching/Title";
import BottomButton from "@/components/domains/matching/BottomButton";
import InterestContent from "@/components/domains/matching/InterestContent";

export default function InterestStepPage() {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <div className="flex flex-col gap-[40px]">
        <Title subTitle>{`웅진님 ${MATCHING_CONFIG.interests.title}`}</Title>
        <InterestContent />
      </div>
      <BottomButton />
    </div>
  );
}
