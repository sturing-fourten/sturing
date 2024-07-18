import { InsideMenu } from "@/components/commons/card/element/InsideMenu";
import { urlRenderAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

const menuList = [
  {
    id: "RECRUIT_START_OWNER",
    title: "모집 중",
  },
  {
    id: "RECRUIT_START_MEMBER",
    title: "지원 중",
  },
];

const getIsUrlRender = (currentInsideMenu: string | null) => {
  switch (currentInsideMenu) {
    case "PROGRESS":
    case "RECRUIT_END":
    case "DONE":
    case null:
      return true;
    default:
      return false;
  }
};

export default function WaitingTabPage() {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;

  if (getIsUrlRender(myStudyListType)) {
    urlRenderAction("RECRUIT_START_OWNER");
  }
  return (
    <nav className="flex gap-3 pt-5 px-4">
      {menuList.map((item, index) => (
        <InsideMenu key={index} id={item.id} title={item.title} />
      ))}
    </nav>
  );
}
