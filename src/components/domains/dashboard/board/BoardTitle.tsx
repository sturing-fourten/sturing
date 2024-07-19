interface StudyTitleProps {
  boardTitle: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BoardTitle({ boardTitle, handleTitleChange }: StudyTitleProps) {
  return (
    <div className="flex-col gap-2 inline-flex">
      <input
        type="text"
        name="board_title"
        className="w-full border border-gray-300 focus:border-main-600 text-[14px] font-semibold tracking-[-0.42px] leading-[22px] bg-white py-3 px-4 flex items-center gap-2 rounded-[5px] focus-visible:outline-none placeholder:text-[14px] placeholder:font-semibold placeholder:tracking-[-0.42px] placeholder:leading-[22px]"
        value={boardTitle}
        placeholder="제목을 입력해주세요"
        maxLength={24}
        onChange={handleTitleChange}
      />
      <div className="w-full text-right text-zinc-800 text-xs font-normal">
        {boardTitle.length}
        <span className="text-stone-300">/24</span>
      </div>
    </div>
  );
}
