import { ReactNode, useId } from "react";
import { ICONS } from "@/constant/icons";

interface CheckboxProps {
  title: string;
  count: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterCheckbox(props: CheckboxProps) {
  const { title, count, checked, onChange } = props;
  const id = useId();
  const checkIcon = checked ? ICONS.checkSquareOn : ICONS.checkSquareOff;

  return (
    <>
      <div>
        <input type="checkbox" id={id} className="hidden" checked={checked} onChange={onChange} />
        <label htmlFor={id} className="cursor-pointer inline-flex items-center justify-start gap-2">
          <img src={checkIcon.src} alt={checkIcon.alt} />
          <div className="flex items-center gap-1 font-medium text-base">
            <h1 className={checked ? "text-main-500" : "text-gray-1000"}>{title}</h1>
            <p className={checked ? "text-main-500" : "text-gray-500"}>{count}</p>
          </div>
        </label>
      </div>
    </>
  );
}
