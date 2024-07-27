import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import TaskItem from "./TaskItem";
import NoBoard from "./NoBoard";
import { TBoardCardProps } from "@/types/board";

export default function TaskCard({ studyId, data: taskBoardsData }: TBoardCardProps) {
  return (
    <DashboardCardPaginationLayout hasMore={true}>
      <DashboardCardTitle title="과제 게시판">
        <WriteBoardLink studyId={studyId} type="task" />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-[1px] bg-gray-300">
        {taskBoardsData?.length > 0 ? (
          taskBoardsData.map((taskBoard) => <TaskItem key={taskBoard._id} taskData={taskBoard} />)
        ) : (
          <NoBoard />
        )}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
