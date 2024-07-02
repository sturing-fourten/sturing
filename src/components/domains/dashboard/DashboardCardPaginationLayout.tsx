import Image from "next/image";
import { downArrowDark } from "@/../public/icons/icons";

interface IDashboardCardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardCardPaginationLayout(props: IDashboardCardLayoutProps) {
  const { children } = props;

  return (
    <article className="pt-6 pb-[6px] px-5 rounded-lg border border-gray-300 relative before:absolute before:content-[''] before:bg-gradient-to-b before:from-transparent before:to-white before:bottom-[-1px] before:left-[-1px] before:z-[1] before:w-[calc(100%+2px)] before:h-[150px] before:rounded-lg">
      {children}

      <button className="relative z-[1] block my-0 mx-auto">
        <Image src={downArrowDark} alt="" width={24} height={24} />
      </button>
    </article>
  );
}
