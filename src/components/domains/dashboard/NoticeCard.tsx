import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardButton from "./WriteBoardButton";
import NoticeItem from "./NoticeItem";
import NoBoard from "./NoBoard";

const SAMPLE_NOTICE_LIST = [{ important: false }, { important: true }, { important: false }, { important: true }];

export default function NoticeCard() {
  const isEditing = false;

  return (
    <DashboardCardPaginationLayout>
      <DashboardCardTitle isEditing={isEditing} title="공지사항">
        <WriteBoardButton />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-2 mb-3">
        {SAMPLE_NOTICE_LIST ? (
          SAMPLE_NOTICE_LIST.map((item, index) => <NoticeItem key={index} important={item.important} />)
        ) : (
          <NoBoard />
        )}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
