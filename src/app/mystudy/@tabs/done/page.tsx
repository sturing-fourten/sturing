import { urlRenderAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

const getIsUrlRender = (currentInsideMenu: string | null) => {
  switch (currentInsideMenu) {
    case "PROGRESS":
    case "RECRUIT_END":
    case "RECRUIT_START_OWNER":
    case "RECRUIT_START_MEMBER":
    case null:
      return true;
    default:
      return false;
  }
};

export default async function DoneTabPage() {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;

  if (getIsUrlRender(myStudyListType)) {
    urlRenderAction("DONE");
  }

  return null;
}
