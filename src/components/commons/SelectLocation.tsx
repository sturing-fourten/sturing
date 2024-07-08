"use client";

// SelectLocation 컴포넌트 코드
import { useState, useEffect } from "react";
import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { CityList } from "@/types/citiy";
import { ICONS } from "@/constant/icons";
import { StepsProps } from "@/types/matching";

const content = MATCHING_CONFIG.location.city;

export default function SelectLocation({ setIsSelected }: StepsProps) {
  const [selectedCity, setSelectedCity] = useState<string>("서울");
  const [selectedLocations, setSelectedLocations] = useState<{ city: string; district: string }[]>([]);

  const handleCityClick = (key: string) => {
    setSelectedCity(key);
  };

  const handleDistrictClick = (city: string, district: string) => {
    const newLocation = { city, district };

    setSelectedLocations((prevLocations) => {
      if (prevLocations.some((location) => location.city === city && location.district === district)) {
        return prevLocations.filter((location) => !(location.city === city && location.district === district));
      } else {
        if (prevLocations.length < 3) {
          return [...prevLocations, newLocation];
        }
      }
      return prevLocations;
    });
  };

  const handleRemoveLocation = (district: string) => {
    setSelectedLocations(selectedLocations.filter((location) => location.district !== district));
  };

  useEffect(() => {
    setIsSelected(selectedLocations.length > 0);
  }, [selectedLocations, setIsSelected]);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between items-center h-[333px] border-y border-gray-300">
        <div className="flex flex-col w-[117px] h-full border-r border-gray-300 scrollbar-hide overflow-x-scroll">
          {Object.keys(content).map((key) => (
            <button
              key={key}
              type="button"
              className={`w-full py-[14px] px-[10px] text-center text-gray-600 font-medium tracking-[-0.28px] leading-[21px] bg-gray-100 ${
                selectedCity === key ? "bg-main-500 text-white" : ""
              }`}
              onClick={() => handleCityClick(key)}>
              {key}
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full h-full scrollbar-hide overflow-x-scroll">
          {selectedCity && (
            <div className="flex flex-col">
              {content[selectedCity as keyof CityList].map((district) => {
                const isSelected = selectedLocations.some(
                  (location) => location.city === selectedCity && location.district === district,
                );
                return (
                  <button
                    key={`${selectedCity}-${district}`}
                    type="button"
                    className={`flex justify-between py-[14px] px-5 w-full text-center text-gray-600 font-medium tracking-[-0.28px] leading-[21px] border-b-[1px] border-gray-300 ${
                      isSelected ? "bg-main-100 text-main-500" : ""
                    }`}
                    onClick={() => handleDistrictClick(selectedCity, district)}>
                    {district}
                    <img
                      src={isSelected ? ICONS.checkBlue.src : ICONS.checkGray.src}
                      alt="체크 아이콘"
                      width={24}
                      height={24}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-[6px] w-full">
        <span className="flex justify-center items-center text-center text-[11px] tracking-[-0.22px] leading-[16px] font-semibold bg-main-100 text-main-500 rounded-full w-[13px] h-[13px]">
          !
        </span>
        <span className="text-[13px] tracking-[-0.22px] leading-[16px] text-gray-900">
          첫 번째로 선택한 장소가 대표 장소로 설정됩니다.
        </span>
      </div>
      {selectedLocations.length > 0 && (
        <>
          <div className="flex flex-wrap items-center gap-[11px] sm:gap-[14px]">
            {selectedLocations.map((location) => (
              <div
                key={`${location.city}-${location.district}`}
                className="flex justify-center items-center h-10 py-[9px] px-[3px] sm:px-[14px] gap-2 bg-main-100 border border-main-500 rounded-[8px] text-main-500 text-[14px] font-medium tracking-[-0.28px] leading-[21px]">
                {location.city} {location.district}
                <button type="button" onClick={() => handleRemoveLocation(location.district)}>
                  <img src={ICONS.closeBlue.src} alt={ICONS.closeBlue.alt} width={18} height={18} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
