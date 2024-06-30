"use client";

import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { CityList } from "@/types/citiy";
import Image from "next/image";
import { useState } from "react";
import { checkBlue, checkGray, closeBlue } from "../../../public/icons/icons";

const content = MATCHING_CONFIG.location.city;

export default function SelectLocation() {
  const [selectedCity, setSelectedCity] = useState<string>("서울");
  const [selectedLocations, setSelectedLocations] = useState<{ city: string; district: string }[]>([]);

  const handleCityClick = (key: string) => {
    setSelectedCity(key);
  };

  const handleDistrictClick = (city: string, district: string) => {
    const newLocation = { city, district };

    if (selectedLocations.some((location) => location.city === city && location.district === district)) {
      setSelectedLocations(
        selectedLocations.filter((location) => !(location.city === city && location.district === district)),
      );
    } else {
      if (selectedLocations.length < 3) {
        setSelectedLocations([...selectedLocations, newLocation]);
      }
    }
  };

  const handleRemoveLocation = (district: string) => {
    setSelectedLocations(selectedLocations.filter((location) => location.district !== district));
  };

  return (
    <>
      <div className="flex flex-col gap-[40px] border-y border-gray-300 h-[333px]">
        <div className="flex justify-between items-center h-full">
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
                      <Image src={isSelected ? checkBlue : checkGray} alt="체크 아이콘" width={24} height={24} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <ul className="grid sm:grid-cols-3 grid-cols-2 items-center gap-[14px] h-[39px] w-full">
          {selectedLocations.length > 0 && (
            <>
              {selectedLocations.map((location) => (
                <li
                  key={`${location.city}-${location.district}`}
                  className="flex justify-between items-center py-[9px] px-[14px] w-full h-[40px] bg-main-100 border border-main-500 rounded-[8px] text-main-500 text-center text-[14px] font-medium tracking-[-0.28px] leading-[21px]">
                  {location.city} {location.district}
                  <button type="button" onClick={() => handleRemoveLocation(location.district)}>
                    <Image src={closeBlue} alt="닫기 아이콘" width={18} height={18} />
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
}
