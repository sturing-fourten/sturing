import Title from "@/components/domains/apply/Title";
import WriteContent from "@/components/domains/apply/WriteContent";

export default function ApplyWritePage() {
  return (
    <div className="flex flex-col h-screen w-full gap-5">
      <Title>스터디 지원글을 작성해주세요</Title>
      <WriteContent />
    </div>
  );
}
