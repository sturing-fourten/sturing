import React, { useState, ReactElement, cloneElement } from "react";
import TextField from "./TextField";
import { ICONS } from "@/constant/icons";

interface DropdownProps {
  type: string;
  name: string;
  addStyle?: string;
  children: React.ReactNode;
  value: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preventClose?: boolean;
}

export default function Dropdown(props: DropdownProps) {
  const { type, name, addStyle, children, onBlur, value, onChange, preventClose } = props;
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleChildClick = () => {
    if (!preventClose) {
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
      <TextField
        type={type}
        name={name}
        addStyle={`w-full flex-col justify-start items-start inline-flex text-sm font-medium ${addStyle} ${
          openDropdown ? "h-full" : ""
        }`}
        onBlur={onBlur}
        value={value}
        onChange={onChange}>
        {openDropdown ? clonedChildren : undefined}
      </TextField>
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
