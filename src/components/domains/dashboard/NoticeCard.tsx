import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import NoticeItem from "./NoticeItem";
import NoBoard from "./NoBoard";
import { TBoardCardProps } from "@/types/board";

const SAMPLE_NOTICE_LIST = [{ important: false }, { important: true }, { important: false }, { important: true }];

export default function NoticeCard({ studyId }: TBoardCardProps) {
  return (
    <DashboardCardPaginationLayout hasMore={true}>
      <DashboardCardTitle title="공지사항">
        <WriteBoardLink studyId={studyId} type="notice" />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-2 mb-3">
        {SAMPLE_NOTICE_LIST?.length > 0 ? (
          SAMPLE_NOTICE_LIST.map((item, index) => <NoticeItem key={index} important={item.important} />)
        ) : (
          <NoBoard />
        )}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
