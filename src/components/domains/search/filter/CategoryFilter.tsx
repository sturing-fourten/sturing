import FilterCheckbox from "./FilterCheckbox";

export default function CategoryFilter() {
  return (
    <>
      <div className="flex flex-col justify-start gap-5">
        <FilterCheckbox title="전체" count="8" />
        <FilterCheckbox title="디자인" count="1" />
        <FilterCheckbox title="개발 · 테크" count="1" />
        <FilterCheckbox title="마케팅" count="1" />
        <FilterCheckbox title="비즈니스" count="1" />
        <FilterCheckbox title="경제" count="1" />
        <FilterCheckbox title="외국어" count="1" />
        <FilterCheckbox title="자격증" count="1" />
        <FilterCheckbox title="자기계발" count="1" />
      </div>
    </>
  );
}
