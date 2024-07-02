import DefaultToggle from "@/components/commons/toggle/DefaultToggle";
import { PROGRESSWAY_LIST } from "@/constant/progressWay";
import { SetStateAction } from "react";
import OnlineDropdown from "./OnlineDropdown";

interface ProgressWayProps {
  selectedProgressWay: string;
  onClickToggle: (progressWay: string) => void;
  address: string;
  setAddress: React.Dispatch<SetStateAction<string>>;
}

export default function ProgressWay(props: ProgressWayProps) {
  const { selectedProgressWay, onClickToggle, address, setAddress } = props;
  return (
    <div className="flex-col gap-3 inline-flex">
      <div className="flex gap-2">
        {Object.keys(PROGRESSWAY_LIST).map((key) => (
          <DefaultToggle
            key={key}
            toggleSize="w-fit h-[30px]"
            isActive={selectedProgressWay === PROGRESSWAY_LIST[key]}
            onClick={() => onClickToggle(PROGRESSWAY_LIST[key])}>
            {PROGRESSWAY_LIST[key]}
          </DefaultToggle>
        ))}
      </div>
      {selectedProgressWay === "온라인" && <OnlineDropdown />}
      {selectedProgressWay === "오프라인" && (
        <div className="p-2.5 border border-neutral-200">
          <div className="flex gap-0.5 items-center">
            <img className="w-4 h-4" src="/icons/place.svg" alt="place" />
            <input
              type="text"
              name="address"
              className="w-full text-sm font-medium leading-snug focus-visible:outline-none focus:border-main-600"
              placeholder="희망 스터디 위치를 등록해 주세요"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {address && (
              <button onClick={() => setAddress("")}>
                <img className="w-3 h-3" src="/icons/close.svg" alt="주소 취소하기" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
