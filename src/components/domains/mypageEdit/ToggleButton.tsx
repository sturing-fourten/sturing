import { Switch } from "@/components/shadcn/ui/switch";
import { useState } from "react";

export function ToggleButton() {
  const [isPublic, setIsPublic] = useState<boolean>(false);

  const handleToggle = () => {
    setIsPublic((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-fit text-xs font-medium leading-none ${isPublic ? "text-stone-500" : "text-zinc-400"}`}>
        {isPublic ? "공개" : "비공개"}
      </div>
      <Switch onClick={handleToggle} />
    </div>
  );
}
