import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import NoticeItem from "./NoticeItem";
import NoBoard from "./NoBoard";
import { TBoardCardProps } from "@/types/board";

export default function NoticeCard({ studyId, data: noticeBoardsData }: TBoardCardProps) {
  return (
    <DashboardCardPaginationLayout hasMore={true}>
      <DashboardCardTitle title="공지사항">
        <WriteBoardLink studyId={studyId} type="notice" />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-2 mb-3">
        {noticeBoardsData?.length > 0 ? (
          noticeBoardsData.map((noticeBoard) => (
            <NoticeItem key={noticeBoard._id} noticeBoardData={noticeBoard} important={noticeBoard.isImportant} />
          ))
        ) : (
          <NoBoard />
        )}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
