interface StudyTitleProps {
  studyTitle: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StudyTitle({ studyTitle, handleTitleChange }: StudyTitleProps) {
  return (
    <div className="flex-col gap-2 inline-flex">
      <input
        type="text"
        name="study_title"
        className="w-full border border-gray-300 focus:border-main-600 text-[14px] font-semibold tracking-[-0.42px] leading-[22px] bg-white py-3 px-4 flex items-center gap-2 rounded-[5px] focus-visible:outline-none placeholder:text-[14px] placeholder:font-semibold placeholder:tracking-[-0.42px] placeholder:leading-[22px]"
        value={studyTitle}
        placeholder="내 스터디를 돋보이게 하는 한마디 (최소 5자 이상 필수)"
        maxLength={24}
        onChange={handleTitleChange}
      />
      <div className="w-full text-right text-zinc-800 text-xs font-normal">
        {studyTitle.length}
        <span className="text-stone-300">/24</span>
      </div>
    </div>
  );
}
