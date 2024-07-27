import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import TaskItem from "./TaskItem";
import NoBoard from "./NoBoard";
import { TBoardCardProps } from "@/types/board";

const SAMPLE_TASK_LIST: any[] = [];

export default function FreeCard({ studyId }: TBoardCardProps) {
  return (
    <DashboardCardPaginationLayout hasMore={false}>
      <DashboardCardTitle title="자유 게시판">
        <WriteBoardLink studyId={studyId} type="free" />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-[1px]">
        {SAMPLE_TASK_LIST?.length > 0 ? SAMPLE_TASK_LIST.map((item, index) => <TaskItem key={index} />) : <NoBoard />}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
