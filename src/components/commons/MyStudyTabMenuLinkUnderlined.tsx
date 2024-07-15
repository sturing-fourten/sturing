import { resetMyStudyAction } from "@/lib/database/action/myStudyList";
import { THrefType } from "@/types/study";
import { useRouter } from "next/navigation";

interface IMyStudyTabMenuLinkUnderlinedProps {
  href: THrefType;
  isCurrent: boolean;
  title: string;
  count?: number;
}

const getNextListType = (href: THrefType) => {
  switch (href) {
    case "/mystudy/recruitment":
      return "RECRUIT_START_OWNER";
    case "/mystudy/done":
      return "DONE";
    case "/mystudy/":
      return "PROGRESS";
  }
};

export default function MyStudyTabMenuLinkUnderlined(props: IMyStudyTabMenuLinkUnderlinedProps) {
  const { href, title, isCurrent } = props;
  const router = useRouter();
  const nextListType = getNextListType(href);

  const onClick = () => {
    resetMyStudyAction(href, nextListType);
    router.push(href);
  };

  return (
    <button
      className={`w-full flex justify-center items-center gap-1 py-3 border-b-2 text-sm font-medium leading-snug tracking-[-0.42px] ${
        isCurrent ? "border-b-3 text-main-500 border-main-500" : "border-gray-300"
      }`}
      onClick={onClick}>
      <span>{title}</span>
      {props?.count && <span>{props.count}</span>}
    </button>
  );
}
