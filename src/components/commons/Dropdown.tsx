import { useState } from "react";
import TextField from "./TextField";

interface DropdownProps {
  type: string;
  name: string;
  addStyle?: string;
  children: React.ReactNode;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Dropdown(props: DropdownProps) {
  const { type, name, addStyle, children, onBlur, value, onChange } = props;
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

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
        onChange={onChange}
        children={openDropdown ? children : undefined}
      />
      <button type="button" className="absolute top-[11px] right-4" onClick={handleDropdown}>
        <img
          className={`w-6 h-6 ${openDropdown ? "-rotate-90" : "rotate-90"}`}
          src="/icons/arrow-gray.svg"
          alt="dropdown arrow"
        />
      </button>
    </div>
  );
}
