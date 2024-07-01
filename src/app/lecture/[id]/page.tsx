import FixedBottomBar from "@/components/domains/detail/FixedBottomBar";
import Header from "@/components/domains/detail/Header";
import Contents from "@/components/domains/detail/lecture/Contents";

export default function LectureDetail() {
  return (
    <>
      <div className="flex-col inline-flex w-full h-dvh">
        <div className="flex-1 overflow-auto scrollbar-hide">
          <Header page="lecture" />
          <Contents />
        </div>
        <FixedBottomBar page="lecture" />
      </div>
    </>
  );
}
