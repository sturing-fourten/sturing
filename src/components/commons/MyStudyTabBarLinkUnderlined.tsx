import { TMyStudyTabMenuLinkUnderlinedItem } from "@/types/study";
import { MyStudyTabMenuLinkUnderlined } from "./MyStudyTabMenuLinkUnderlined";

interface IMyStudyTabBarUnderlinedProps {
  myStudyTabMenuList: TMyStudyTabMenuLinkUnderlinedItem[];
}

export default function MyStudyTabBarUnderlined(props: IMyStudyTabBarUnderlinedProps) {
  const { myStudyTabMenuList } = props;

  return (
    <nav className={`flex justify-between items-center bg-white sticky top-[54px] z-1`}>
      {myStudyTabMenuList.map((item) => (
        <MyStudyTabMenuLinkUnderlined key={item.id} {...item} />
      ))}
    </nav>
  );
}
