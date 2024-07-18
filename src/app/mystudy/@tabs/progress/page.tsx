import { InsideMenu } from "@/components/commons/card/element/InsideMenu";
import { urlRenderAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

const menuList = [
  {
    id: "PROGRESS",
    title: "진행 중",
  },
  {
    id: "RECRUIT_END",
    title: "진행 예정",
  },
];

const getIsUrlRender = (currentInsideMenu: string | null) => {
  switch (currentInsideMenu) {
    case "RECRUIT_START_OWNER":
    case "RECRUIT_START_MEMBER":
    case "DONE":
    case null:
      return true;
    default:
      return false;
  }
};

export default async function ProgressTabPage() {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;
  if (getIsUrlRender(myStudyListType)) {
    urlRenderAction("PROGRESS");
  }
  return (
    <nav className="flex gap-3 pt-5 px-4">
      {menuList.map((item, index) => (
        <InsideMenu key={index} id={item.id} title={item.title} />
      ))}
    </nav>
  );
}
