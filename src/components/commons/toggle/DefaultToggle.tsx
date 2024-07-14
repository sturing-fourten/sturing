import React from "react";

interface IDefaultToggleBaseProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function DefaultToggleBase(props: IDefaultToggleBaseProps) {
  const { children, className, onClick } = props;
  return (
    <span
      className={`inline-flex justify-center items-center px-3 border rounded-[3px] text-[14px] font-medium tracking-[-0.42px] flex-grow ${className}`}
      onClick={onClick}>
      {children}
    </span>
  );
}

interface IDefaultToggleProps {
  children: React.ReactNode;
  isActive: boolean | undefined;
  onClick?: () => void;
  toggleSize: string;
}

export function DefaultToggle(props: IDefaultToggleProps) {
  const { children, isActive, onClick, toggleSize } = props;
  return (
    <label className={`cursor-pointer ${toggleSize}`}>
      <input className="hidden" type="checkbox" />
      <DefaultToggleBase
        className={`${
          isActive ? "border-main-500 bg-main-100 text-main-500" : "border-gray-300 bg-white text-gray-600"
        } w-full h-full`}
        onClick={onClick}>
        {children}
      </DefaultToggleBase>
    </label>
  );
}

export default DefaultToggle;
