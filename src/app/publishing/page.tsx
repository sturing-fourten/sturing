import { TagLight, TagMain, TagRate } from "@/components/commons/Tags";

// UI 확인 용
export const SAMPLE_PROGRESS_WAY_TYPE = {
  online: "온라인",
  offline: "오프라인",
  mix: "온/오프라인",
};

export default function page() {
  return (
    <div className="w-full text-[0px]">
      <TagRate>4.5</TagRate>
      <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.online}</TagMain>
      <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.offline}</TagMain>
      <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.mix}</TagMain>
      <TagLight>마케팅</TagLight>
      <TagLight>디자인</TagLight>
      <TagLight>6월 7일</TagLight>
    </div>
  );
}
