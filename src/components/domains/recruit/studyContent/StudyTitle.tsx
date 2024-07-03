import TextField from "@/components/commons/TextField";

interface StudyTitleProps {
  studyTitle: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StudyTitle({ studyTitle, handleTitleChange }: StudyTitleProps) {
  return (
    <div className="flex-col gap-2 inline-flex">
      <TextField
        type="text"
        name="study_title"
        addStyle="w-full"
        value={studyTitle}
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
