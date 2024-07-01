import FixedBottomBar from "@/components/domains/detail/FixedBottomBar";
import Header from "@/components/domains/detail/Header";
import Contents from "@/components/domains/detail/study/Contents";

export default function StudyDetail() {
  return (
    <>
      <div className="flex-col inline-flex w-full h-dvh">
        <div className="flex-1 overflow-auto scrollbar-hide">
          <Header page="study" />
          <Contents />
        </div>
        <FixedBottomBar page="study" />
      </div>
    </>
  );
}
