interface PopoverProps {
  onClick: () => void;
}

export default function Popover({ onClick }: PopoverProps) {
  return (
    <div className="absolute top-12 right-2 flex flex-col w-[100px] py-2 px-3 bg-white border rounded z-[1200] boder-gray-900">
      <button type="button" className="text-center text-gray-900 leading-relaxed font-medium" onClick={onClick}>
        삭제하기
      </button>
    </div>
  );
}
