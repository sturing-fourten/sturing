interface UrlInputProps {
  isLectureValid: boolean;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function UrlInput({ isLectureValid, onBlur }: UrlInputProps) {
  return (
    <>
      <div
        className={`p-2.5 border ${isLectureValid ? "border-neutral-200 " : "border-red-600"}`}
        style={{ borderStyle: "dashed" }}>
        <div className="flex gap-0.5 items-center">
          <img className="w-5 h-5" src="/icons/add-gray.svg" alt="add" />
          <input
            type="text"
            name="url"
            className="w-full text-sm font-medium leading-snug focus-visible:outline-none focus:border-main-600"
            placeholder="URL을 입력하거나 복사한 URL을 붙여 넣으세요"
            onBlur={onBlur}
          />
        </div>
      </div>
      {!isLectureValid && <div className="text-red-600 text-xs">유데미에서 제공하는 강의를 입력해주세요.</div>}
    </>
  );
}
