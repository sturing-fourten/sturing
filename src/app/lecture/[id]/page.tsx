import FixedBottomBar from "@/components/domains/detail/FixedBottomBar";
import Header from "@/components/domains/detail/Header";
import Contents from "@/components/domains/detail/lecture/Contents";

export default function LectureDetail() {
  return (
    <>
      <Header page="lecture" />
      <Contents />
      <FixedBottomBar />
    </>
  );
}
