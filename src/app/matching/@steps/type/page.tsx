import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import Title from "@/components/domains/matching/Title";
import TypeContent from "@/components/domains/matching/TypeContent";
import BottomButton from "@/components/domains/matching/BottomButton";

export default function TypeStepPage() {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <div className="flex flex-col gap-[40px]">
        <Title>{`웅진님 ${MATCHING_CONFIG.type.title}`}</Title>
        <TypeContent />
      </div>
      <BottomButton />
    </div>
  );
}
