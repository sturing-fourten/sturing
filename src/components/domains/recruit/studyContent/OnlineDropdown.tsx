import Dropdown from "@/components/commons/Dropdown";
import { ONLINE_LIST } from "@/constant/progressWay";
import { useRecruitStore } from "@/store/recruitStore";

export default function OnlineDropdown() {
  const online = useRecruitStore((state) => state.online) ?? "";
  const setOnline = useRecruitStore((state) => state.setOnline);

  const handleOnlineChange = (selectedOnline: string) => {
    setOnline(selectedOnline);
  };

  return (
    <Dropdown value={online} placeholder="온라인 장소를 선택해 주세요" onChange={(e) => setOnline(e.target.value)}>
      <div className="w-full flex-col inline-flex justify-center mt-2">
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
