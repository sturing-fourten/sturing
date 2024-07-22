import React, { useState, ReactElement, cloneElement } from "react";
import { ICONS } from "@/constant/icons";

interface DropdownProps {
  children: React.ReactNode;
  value: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoClose?: boolean;
  placeholder?: string;
}

export default function Dropdown(props: DropdownProps) {
  const { children, onBlur, value, onChange, autoClose, placeholder } = props;
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleChildClick = () => {
    if (autoClose) {
      setOpenDropdown(false);
    }
  };

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child as ReactElement, {
        onClick: (e: React.MouseEvent) => {
          if (child.props.onClick) child.props.onClick(e);
          handleChildClick();
        },
      });
    }
    return child;
  });

  return (
    <div className="relative">
      <div
        className={`w-full flex-col justify-start items-start inline-flex font-medium border border-gray-300 bg-white py-3 px-4 gap-2 rounded-[5px] text-[14px] font tracking-[-0.42px] leading-[22px] cursor-pointer ${
          openDropdown ? "h-full" : ""
        }`}
        onBlur={onBlur}
        onChange={onChange}
        onClick={handleDropdown}>
        <span className={`text-gray-500 ${value ? "hidden" : "w-[180px]"}`}>{placeholder}</span>
        <span className={`text-gray-900 ${value ? "font-semibold w-[180px]" : "hidden"}`}>{value}</span>
        {openDropdown ? clonedChildren : undefined}
      </div>
      <button type="button" className="absolute top-[11px] right-4" onClick={handleDropdown}>
        <img
          className={`w-6 h-6 ${openDropdown ? "-rotate-90" : "rotate-90"}`}
          src={ICONS.rightArrowDarkGray.src}
          alt={ICONS.rightArrowDarkGray.alt}
        />
      </button>
    </div>
  );
}
