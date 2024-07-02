import Image from "next/image";
import { downArrowDark } from "@/../public/icons/icons";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";

interface IDashboardCardLayoutProps {
  children: React.ReactNode;
  hasMore: boolean;
  title: string;
}

export default function DashboardCardPaginationLayout(props: IDashboardCardLayoutProps) {
  const { children, hasMore, title } = props;

  return (
    <article
      className={`pt-6 px-5 rounded-lg border border-gray-300 ${
        hasMore
          ? "relative pb-[6px] before:absolute before:content-[''] before:bg-gradient-to-b before:from-transparent before:to-white before:bottom-[-1px] before:left-[-1px] before:z-[1] before:w-[calc(100%+2px)] before:h-[150px] before:rounded-lg"
          : "pb-6"
      }`}>
      <DashboardCardTitle title={title}>
        <WriteBoardLink />
      </DashboardCardTitle>

      {children}

      {hasMore && (
        <button className="relative z-[1] block my-0 mx-auto">
          <Image src={downArrowDark} alt="" width={24} height={24} />
        </button>
      )}
    </article>
  );
}
