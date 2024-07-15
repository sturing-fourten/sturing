import UserActionButton from "@/components/domains/detail/UserActionButton";
import ScrapButton from "@/components/commons/ScrapButton";
interface FixedBottomBarProps {
  page: "lecture" | "study";
  id: string;
}

export default function FixedBottomBar({ page, id }: FixedBottomBarProps) {
  return (
    <>
      <footer className="sm:absolute fixed inset-x-0 bottom-0 flex items-center justify-between gap-1 h-[74px] bg-white px-4 py-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <ScrapButton variant="detail" page={page} id={id} />
        <UserActionButton page={page} />
      </footer>
    </>
  );
}
