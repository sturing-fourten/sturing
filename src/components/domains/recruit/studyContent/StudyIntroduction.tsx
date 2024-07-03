interface StudyIntroductionProps {
  studyIntroduction: string;
  handleIntroductionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function StudyIntroduction({ studyIntroduction, handleIntroductionChange }: StudyIntroductionProps) {
  return (
    <>
      <textarea
        className="w-full h-60 text-sm font-medium leading-snug border border-gray-300  bg-white py-3 px-4 flex items-center gap-2 rounded-[5px] focus-visible:outline-none focus:border-main-600 placeholder:text-[14px] placeholder:font-medium placeholder:tracking-[-0.42px] placeholder:leading-[22px]"
        maxLength={500}
        onChange={handleIntroductionChange}
      />
      <div className="w-full text-right text-zinc-800 text-xs font-normal">
        {studyIntroduction.length}
        <span className="text-stone-300">/500</span>
      </div>
    </>
  );
}
