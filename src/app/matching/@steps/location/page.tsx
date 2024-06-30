import BottomButton from "@/components/domains/matching/BottomButton";
import LocationContent from "@/components/domains/matching/LocationContent";
import Title from "@/components/domains/matching/Title";
import { MATCHING_CONFIG } from "@/constant/matchingConfig";

export default function LocationStepPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <div className="flex flex-col gap-[40px] mb-[150px] sm:mb-0">
        <Title subTitle>{`웅진님${MATCHING_CONFIG.location.title}`}</Title>
        <LocationContent />
      </div>
      <BottomButton />
    </div>
  );
}
