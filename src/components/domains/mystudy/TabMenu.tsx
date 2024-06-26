import Link from "next/link";

interface ITabMenuProps {
  segment: string;
  type: string;
  count: number;
  currentTab: string;
}

export default function TabMenu(props: ITabMenuProps) {
  const { segment, type, count, currentTab } = props;
  return (
    <Link
      className={`w-full flex justify-center items-center gap-1 py-3 border-b-2 text-sm font-medium leading-snug tracking-[-0.42px] ${
        segment === currentTab ? "text-main-500 border-main-500" : "border-transparent"
      }`}
      href={`/mystudy/${segment}`}>
      <span>{type}</span>
      <span>{count}</span>
    </Link>
  );
}
