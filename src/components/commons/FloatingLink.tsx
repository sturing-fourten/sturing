import Link from "next/link";

interface IFloatingLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function FloatingLink(props: IFloatingLinkProps) {
  const { children, href } = props;
  return (
    <Link
      className="flex items-center justify-center w-14 h-14 fixed right-[22px] bottom-10 bg-blue-500 rounded-full shadow"
      href={href}>
      {children}
    </Link>
  );
}
