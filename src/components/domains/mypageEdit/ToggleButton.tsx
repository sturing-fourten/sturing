import { Switch } from "@/components/shadcn/ui/switch";
import { SetStateAction } from "react";

interface ToggleButtonProps {
  isVisible?: boolean;
  setIsVisible?: React.Dispatch<SetStateAction<boolean>>;
  toggleInputName: string;
}

export function ToggleButton(props: ToggleButtonProps) {
  const { isVisible, setIsVisible, toggleInputName } = props;

  const handleToggle = () => {
    if (setIsVisible) {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-fit text-xs font-medium leading-none ${isVisible ? "text-stone-500" : "text-zinc-400"}`}>
        {isVisible ? "공개" : "비공개"}
      </div>
      <input hidden name={toggleInputName} value={isVisible ? "true" : "false"} onChange={handleToggle} />
      <Switch onClick={handleToggle} checked={isVisible} />
    </div>
  );
}
