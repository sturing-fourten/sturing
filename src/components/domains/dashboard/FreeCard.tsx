import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import TaskItem from "./TaskItem";
import NoBoard from "./NoBoard";

const SAMPLE_TASK_LIST: any[] = [];

export default function FreeCard() {
  return (
    <DashboardCardPaginationLayout hasMore={false}>
      <DashboardCardTitle title="자유 게시판">
        <WriteBoardLink />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-[1px]">
        {SAMPLE_TASK_LIST?.length > 0 ? SAMPLE_TASK_LIST.map((item, index) => <TaskItem key={index} />) : <NoBoard />}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
