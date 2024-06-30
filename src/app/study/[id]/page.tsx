import FixedBottomBar from "@/components/domains/detail/FixedBottomBar";
import Header from "@/components/domains/detail/Header";
import Contents from "@/components/domains/detail/study/Contents";

export default function StudyDetail() {
  return (
    <>
      <Header page="study" />
      <Contents />
      <FixedBottomBar page="study" />
    </>
  );
}
