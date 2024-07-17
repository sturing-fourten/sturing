import Link from "next/link";

interface ITabMenuLinkUnderlinedProps {
  href: string;
  isCurrent: boolean;
  title: string;
  count?: number;
  onClick?: () => void;
}

export default function TabMenuLinkUnderlined(props: ITabMenuLinkUnderlinedProps) {
  const { href, title, isCurrent, onClick } = props;
  return (
    <Link
      className={`w-full flex justify-center items-center gap-1 py-3 border-b-2 text-sm font-medium leading-snug tracking-[-0.42px] ${
        isCurrent ? "border-b-3 text-main-500 border-main-500" : "border-gray-300"
      }`}
      href={href}
      onClick={onClick}>
      <span>{title}</span>
      {props?.count && <span>{props.count}</span>}
    </Link>
  );
}
