import React, { useState } from "react";
import Subtitle from "./Subtitle";
import { ToggleButton } from "./ToggleButton";

interface EditInputProps extends React.ComponentProps<"input"> {
  children: React.ReactNode;
  toggle?: boolean;
  dropdown?: boolean;
  dropdownContent?: { key: string; value: string }[];
}

export default function EditInput({ children, toggle, dropdown, dropdownContent, ...props }: EditInputProps) {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleDropdown = () => {
    setIsDropdown((prev) => !prev);
  };

  const handleItemClick = (value: string) => {
    setInputValue(value);
    setIsDropdown(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full relative">
      <Subtitle>{children}</Subtitle>
      <div className="h-12 flex justify-between border-b border-neutral-200 py-3.5 gap-2">
        <input
          className={`flex-1 focus:outline-none text-stone-950 text-base font-medium leading-normal disabled:bg-white disabled:text-zinc-400 ${
            dropdown ? "cursor-pointer" : "cursor-auto"
          }`}
          value={inputValue}
          onClick={handleDropdown}
          onChange={handleChange}
          {...props}
        />
        {toggle && <ToggleButton />}
      </div>
      {dropdown && isDropdown && dropdownContent && (
        <div className="absolute z-dropdown w-full bg-white border border-neutral-200 shadow-lg">
          {dropdownContent.map((item) => (
            <div
              key={item.key}
              className="px-4 py-2 hover:bg-neutral-100 cursor-pointer"
              onClick={() => handleItemClick(item.value)}>
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
