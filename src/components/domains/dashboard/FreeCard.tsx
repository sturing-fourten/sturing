import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import TaskItem from "./TaskItem";
import NoBoard from "./NoBoard";
import { TBoardCardProps } from "@/types/board";

export default function FreeCard({ studyId, data: freeBoardsData }: TBoardCardProps) {
  return (
    <DashboardCardPaginationLayout hasMore={false}>
      <DashboardCardTitle title="자유 게시판">
        <WriteBoardLink studyId={studyId} type="free" />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-[1px]">
        {freeBoardsData?.length > 0 ? (
          freeBoardsData.map((freeBoard) => <TaskItem key={freeBoard._id} taskData={freeBoard} />)
        ) : (
          <NoBoard />
        )}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
