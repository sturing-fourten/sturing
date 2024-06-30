import SearchBar from "@/components/commons/SearchBar";
import SelectLocation from "@/components/commons/SelectLocation";

export default function LocationContent() {
  return (
    <>
      <SearchBar placeholder="스터디 선호지역을 입력해 주세요" />
      <SelectLocation />
    </>
  );
}
