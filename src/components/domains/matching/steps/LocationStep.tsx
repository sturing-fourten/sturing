import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import Title from "../Title";
import SearchBar from "@/components/commons/SearchBar";
import SelectLocation from "@/components/commons/SelectLocation";
import { StepsProps } from "@/types/matching";

export default function LocationStep({ userNickname, setIsSelected }: StepsProps) {
  return (
    <div className="flex flex-col w-full h-dvh gap-5">
      <div className="flex flex-1 flex-col gap-5 px-4">
        <Title subTitle>{`${userNickname}님 ${MATCHING_CONFIG.location.title}`}</Title>
        <SearchBar placeholder="스터디 선호지역을 입력해 주세요" />
        <SelectLocation setIsSelected={setIsSelected} />
      </div>
    </div>
  );
}
