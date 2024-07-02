import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import TopBar from "@/components/commons/TopBar";
import Title from "../Title";
import SearchBar from "@/components/commons/SearchBar";
import SelectLocation from "@/components/commons/SelectLocation";
import BottomButton from "../BottomButton";

export default function LocationStep() {
  return (
    <div className="flex flex-col w-full min-h-screen sm:h-dvh gap-5">
      <TopBar variant="back" />
      <div className="flex flex-1 flex-col gap-5 px-4">
        <Title subTitle>{`웅진님${MATCHING_CONFIG.location.title}`}</Title>
        <SearchBar placeholder="스터디 선호지역을 입력해 주세요" />
        <SelectLocation />
      </div>
      <BottomButton />
    </div>
  );
}
