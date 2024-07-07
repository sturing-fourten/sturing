import Content from "@/components/domains/search/result/Content";
import TopFilterBar from "@/components/domains/search/result/TopFilterBar";
import TopSearchBar from "@/components/domains/search/result/TopSearchBar";

export default function page() {
  return (
    <>
      <TopSearchBar />
      <TopFilterBar />
      <Content />
    </>
  );
}
