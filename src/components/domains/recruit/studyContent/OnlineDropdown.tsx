import Dropdown from "@/components/commons/Dropdown";
import { ONLINE_LIST } from "@/constant/progressWay";
import { useState } from "react";

export default function OnlineDropdown() {
  const [online, setOnline] = useState<string>("");
  const handleOnlineChange = (selectedOnline: string) => {
    setOnline(selectedOnline);
  };

  return (
    <Dropdown type="text" name="day" value={online} onChange={(e) => setOnline(e.target.value)}>
      <div className="w-full flex-col inline-flex justify-center items-start mt-2">
        <div className="w-full h-px rotate-180 border border-neutral-200 z-toast"></div>
        <div className="w-full h-44 overflow-auto mt-2">
          {Object.keys(ONLINE_LIST).map((key) => (
            <div
              key={key}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOnlineChange(ONLINE_LIST[key])}>
              {ONLINE_LIST[key]}
            </div>
          ))}
        </div>
      </div>
    </Dropdown>
  );
}
