import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import Title from "../Title";
import SelectLocation from "@/components/commons/SelectLocation";
import { StepsProps } from "@/types/matching";

export default function LocationStep({ userNickname, setIsSelected }: StepsProps) {
  return (
    <div className="flex flex-1 flex-col gap-5 px-4">
      <Title subTitle>{`${userNickname}님${MATCHING_CONFIG.location.title}`}</Title>
      <SelectLocation setIsSelected={setIsSelected} />
    </div>
  );
}
