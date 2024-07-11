import React, { ChangeEvent, SetStateAction, useState } from "react";
import Subtitle from "./Subtitle";
import { ToggleButton } from "./ToggleButton";
import { getIntrestsTitleById, getLevelTitleById } from "@/utils/getTitleById";
import { level, location } from "@/types/matching";

interface EditInputProps extends React.ComponentProps<"input"> {
  children: React.ReactNode;
  inputValue?: string;
  setInputValue?: React.Dispatch<SetStateAction<string>>;
  matching?: boolean;
  levelData?: level[];
  locationData?: location[];
  toggle?: boolean;
  toggleInputName?: string;
  isVisible?: boolean;
  setIsVisible?: React.Dispatch<SetStateAction<boolean>>;
  dropdown?: boolean;
  dropdownContent?: string[];
}

export default function EditInput(props: EditInputProps) {
  const {
    children,
    inputValue,
    setInputValue,
    matching,
    levelData,
    locationData,
    toggle,
    toggleInputName,
    isVisible,
    setIsVisible,
    dropdown,
    dropdownContent,
    ...inputProps
  } = props;
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsDropdown((prev) => !prev);
  };

  const handleItemClick = (value: string) => {
    if (setInputValue) {
      setInputValue(value);
    }

    setIsDropdown(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setInputValue) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="w-full relative">
      <Subtitle>{children}</Subtitle>
      <div className="h-12 flex justify-between border-b border-neutral-200 py-3.5 gap-2">
        {matching ? (
          <div className="flex gap-[10px]">
            {levelData
              ? levelData.map((item) => (
                  <div
                    key={item.interest}
                    className="flex justify-center items-center h-6 px-2 gap-1 bg-main-100 border border-main-500 rounded-md text-main-500 text-[14px] font-medium tracking-[-0.28px] leading-[21px]">
                    <div>
                      {getIntrestsTitleById(item.interest)} · {getLevelTitleById(item.level)}
                    </div>
                  </div>
                ))
              : locationData?.map((item) => (
                  <div
                    key={item.district}
                    className="flex justify-center items-center h-6 px-2 gap-2 bg-main-100 border border-main-500 rounded-md text-main-500 text-[14px] font-medium tracking-[-0.28px] leading-[21px]">
                    <div>
                      {item.city} {item.district}
                    </div>
                  </div>
                ))}
          </div>
        ) : (
          <input
            className={`flex-1 focus:outline-none text-stone-950 text-base font-medium leading-normal disabled:bg-white disabled:text-zinc-400 ${
              dropdown ? "cursor-pointer" : "cursor-auto"
            }`}
            defaultValue={inputValue}
            onClick={handleDropdown}
            onChange={handleChange}
            {...inputProps}
          />
        )}
        {toggle && (
          <ToggleButton toggleInputName={toggleInputName || ""} isVisible={isVisible} setIsVisible={setIsVisible} />
        )}
      </div>
      {dropdown && isDropdown && dropdownContent && (
        <div className="absolute z-dropdown w-full bg-white border border-neutral-200 shadow-lg">
          {dropdownContent.map((item) => (
            <div
              key={item}
              className="px-4 py-2 hover:bg-neutral-100 cursor-pointer"
              onClick={() => handleItemClick(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
