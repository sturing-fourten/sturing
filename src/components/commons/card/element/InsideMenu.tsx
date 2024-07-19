import { listTypeFormAction } from "@/lib/database/action/myStudyList";
import { TMyStudyListType, useMyStudyListStore } from "@/store/myStudyListStore";

type TCountType =
  | "progressStudyListCount"
  | "recruitEndStudyListCount"
  | "recruitStartOwnerStudyListCount"
  | "recruitStartMemberStudyListCount";

function getCountType(myStudyListType: Omit<TMyStudyListType, "DONE">) {
  switch (myStudyListType) {
    case "PROGRESS":
      return "progressStudyListCount";
    case "RECRUIT_END":
      return "recruitEndStudyListCount";
    case "RECRUIT_START_OWNER":
      return "recruitStartOwnerStudyListCount";
    case "RECRUIT_START_MEMBER":
      return "recruitStartMemberStudyListCount";
    default:
      return null;
  }
}
export function InsideMenu(props: any) {
  const { id, title } = props;
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;
  if (!myStudyListType) return;
  const isCurrent = myStudyListType === id;
  const countType = getCountType(id);
  if (!countType) return;
  const listTypeCount = useMyStudyListStore.getState()[countType];

  return (
    <form action={listTypeFormAction}>
      <input type="hidden" className="w-3" name="myStudyListType" value={id} />
      <button
        className={`
    inline-flex justify-start items-center gap-0.5 px-4 py-2 rounded border text-gray-900
    ${isCurrent ? "bg-main-100 border-main-300" : "bg-white border-main-200"}
    `}>
        <span className="text-gray-900 text-sm font-medium leading-tight">{title}</span>
        {!!listTypeCount && listTypeCount > 0 && (
          <span className="text-gray-900 text-sm font-medium leading-tight">{listTypeCount}</span>
        )}
      </button>
    </form>
  );
}
