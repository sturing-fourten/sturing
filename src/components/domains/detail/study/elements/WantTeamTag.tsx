//추후 태그 컴포넌트들 리팩토링시 제거

export default function WantTeamTag({ text }: { text: string[] }) {
  return (
    <>
      {text.map((text, idx) => (
        <span
          key={idx}
          className="inline-flex items-center h-[33px] px-3 text-center border border-main-500 rounded-[3px] text-[14px] font-medium  text-main-500 tracking-[-0.42px]">
          {text}
        </span>
      ))}
    </>
  );
}
