import ProgressItem from "./ProgressItem";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TProgressGaugeItem } from "@/types/dashboard";

export default function StudyMemberProgressGaugeCard({ list }: { list: TProgressGaugeItem[] }) {
  const isEditing = true;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle isEditing={isEditing} title="진척도" />
      <ul className="flex flex-col gap-3 max-h-[196px] overflow-y-scroll scrollbar-hide">
        {list.map((item) => (
          <ProgressItem item={item} key={item.teamMemberId.toString()} />
        ))}
      </ul>
    </DashboardCardLayout>
  );
}
