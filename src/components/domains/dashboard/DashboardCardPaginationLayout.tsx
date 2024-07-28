import Image from "next/image";
import { downArrowDark } from "@/../public/icons/icons";

interface IDashboardCardLayoutProps {
  children: React.ReactNode;
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function DashboardCardPaginationLayout(props: IDashboardCardLayoutProps) {
  const { children, hasMore, onLoadMore } = props;

  return (
    <article
      className={`pt-6 px-5 rounded-lg border border-gray-300 bg-white ${
        hasMore
          ? "relative pb-[6px] before:absolute before:content-[''] before:bg-gradient-to-b before:from-transparent before:to-white before:bottom-[-1px] before:left-[-1px] before:z-[1] before:w-[calc(100%+2px)] before:h-[30%] before:min-h-[70px] before:max-h-[calc(100%-70px)] before:rounded-lg"
          : "pb-6"
      }`}>
      {children}

      {hasMore && (
        <button type="button" className="relative z-[1] block my-0 mx-auto" onClick={onLoadMore}>
          <Image src={downArrowDark} alt="" width={24} height={24} />
        </button>
      )}
    </article>
  );
}
