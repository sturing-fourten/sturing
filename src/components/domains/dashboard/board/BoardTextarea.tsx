interface BoardTextareaProps {
  boardTextarea: string;
  handleTextareaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function BoardTextarea({ boardTextarea, handleTextareaChange }: BoardTextareaProps) {
  return (
    <>
      <textarea
        className="w-full h-60 text-sm font-semibold leading-snug border border-gray-300  bg-white py-3 px-4 flex items-center gap-2 rounded-[5px] focus-visible:outline-none focus:border-main-600 placeholder:text-[14px] placeholder:font-semibold placeholder:tracking-[-0.42px] placeholder:leading-[22px]"
        maxLength={500}
        placeholder="소개글을 입력해 주세요 (최소 20자 필수)"
        onChange={handleTextareaChange}
        value={boardTextarea}
      />
      <div className="w-full text-right text-zinc-800 text-xs font-normal">
        {boardTextarea.length}
        <span className="text-stone-300">/500</span>
      </div>
    </>
  );
}
