import DefaultToggle from "@/components/commons/toggle/DefaultToggle";
import { PROGRESSWAY_LIST } from "@/constant/progressWay";
import OnlineDropdown from "./OnlineDropdown";
import OfflineSelectLocation from "./OfflineSelectLocation";

interface ProgressWayProps {
  selectedProgressWay: string;
  onClickToggle: (progressWay: string) => void;
}

export default function ProgressWay(props: ProgressWayProps) {
  const { selectedProgressWay, onClickToggle } = props;

  return (
    <div className="flex-col gap-3 inline-flex">
      <div className="flex gap-2">
        {Object.keys(PROGRESSWAY_LIST).map((key) => (
          <DefaultToggle
            key={key}
            toggleSize="w-fit h-[30px]"
            isActive={selectedProgressWay === key}
            onClick={() => onClickToggle(key)}>
            {PROGRESSWAY_LIST[key]}
          </DefaultToggle>
        ))}
      </div>
      {selectedProgressWay === "ONLINE" && <OnlineDropdown />}
      {selectedProgressWay === "OFFLINE" && <OfflineSelectLocation />}
    </div>
  );
}
