interface IStudyCategoryToggleBaseProps {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

interface IStudyCategoryToggleProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

function StudyCategoryToggleBase(props: IStudyCategoryToggleBaseProps) {
  const { children, className, onClick } = props;
  return (
    <span
      className={`inline-flex items-center gap-[3px] h-[33px] px-2 border rounded-[3px] text-[14px] font-medium tracking-[-0.42px] ${className}`}
      onClick={onClick}>
      {children}
    </span>
  );
}

export function StudyCategoryToggle(props: IStudyCategoryToggleProps) {
  const { children, isActive, onClick } = props;
  return (
    <label className="cursor-pointer">
      <input className="hidden" type="checkbox" />
      <StudyCategoryToggleBase
        className={isActive ? "border-main-500 bg-main-100 text-main-500" : "border-gray-300 bg-white text-gray-600"}
        onClick={onClick}>
        {children}
      </StudyCategoryToggleBase>
    </label>
  );
}
