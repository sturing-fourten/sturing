import { StepsProps } from "@/types/matching";
import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { StudyCategoryMenu } from "@/types/study";
import Button from "@/components/commons/Button";
import Title from "../Title";
import { useLevelsStore } from "@/store/matchingStore";
import { useEffect } from "react";

export default function InterestStep({ userNickname, setIsSelected }: StepsProps) {
  const content = MATCHING_CONFIG.interests.content;

  const levels = useLevelsStore((state) => state.levels);
  const setLevels = useLevelsStore((state) => state.setLevels);

  const handleCategoryClick = (key: string) => {
    let updatedInterests;
    if (levels.some((interest) => interest.interest === key)) {
      updatedInterests = levels.filter((item) => item.interest !== key);
      setLevels(updatedInterests);
    } else {
      if (levels.length < 3) {
        updatedInterests = [...levels, { interest: key, level: "" }];
        setLevels(updatedInterests);
        setIsSelected(updatedInterests.length > 0);
      } else {
        alert("최대 3개의 카테고리만 선택할 수 있습니다.");
      }
    }
  };

  useEffect(() => {
    setIsSelected(levels.length > 0);
  }, [levels, setIsSelected]);

  return (
    <div className="flex flex-1 flex-col w-full px-4">
      <Title subTitle>{`${userNickname}님 ${MATCHING_CONFIG.interests.title}`}</Title>
      <div className="grid grid-rows-4 grid-cols-2 gap-[15px] mt-10 mb-5">
        <input
          hidden
          name="selectedInterests"
          value={levels?.map((interest) => interest.interest)}
          onChange={(e) => e.target.value}
        />
        {Object.keys(content).map((key) => {
          const interest = content[key as keyof StudyCategoryMenu];
          const isSelected = levels.some((item) => item.interest === key);
          return (
            <Button
              type="button"
              key={key}
              varient="ghost"
              addStyle={`w-full h-[94px] gap-[10px] shrink-0 rounded-[8px] text-4 font-medium tracking-[-0.32px] leading-[24px] transform transition-transform duration-200 hover:scale-105 relative ${
                isSelected ? "border-main-500 text-main-500 bg-main-100" : "text-gray-700 border-gray-300 bg-white"
              }`}
              onClick={() => handleCategoryClick(key)}>
              <img src={interest.src} alt={`${interest.alt} icon`} width={28} height={28} />
              {interest.alt}
              {levels[0]?.interest === key && (
                <span className="absolute top-2 left-2 flex justify-center items-center bg-main-500 rounded-full py-[2px] px-[6px] text-white text-[11px] tracking-[-0.22px] leading-[16px] font-semibold">
                  대표
                </span>
              )}
            </Button>
          );
        })}
      </div>
      <div className="flex items-center gap-[6px] w-full">
        <span className="flex justify-center items-center text-center text-[11px] tracking-[-0.22px] leading-[16px] font-semibold bg-main-100 text-main-500 rounded-full w-[13px] h-[13px]">
          !
        </span>
        <span className="text-[13px] tracking-[-0.22px] leading-[16px] text-gray-900">
          첫 번째로 선택한 분야가 대표 분야로 설정됩니다.
        </span>
      </div>
    </div>
  );
}
