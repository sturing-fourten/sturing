import Image from "next/image";

interface IStudyCategoryButtonProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

interface IStudyCategoryToggleBaseProps {
  children: React.ReactNode;
  className: string;
}

interface IStudyCategoryToggleProps {
  children: React.ReactNode;
  isActive: boolean;
}

export function StudyCategoryButton(props: IStudyCategoryButtonProps) {
  const { children, imageSrc, imageAlt } = props;
  return (
    <button className="inline-flex items-center justify-between gap-[8px] h-[50px] px-[12px] border rounded-[100px] text-[14px] tracking-[-0.42px] font-semibold border-gray-400 bg-white text-black">
      <Image src={imageSrc} alt={imageAlt} width={35} height={35} />
      {children}
    </button>
  );
}

export function StudyCategoryToggleBase(props: IStudyCategoryToggleBaseProps) {
  const { children, className } = props;
  return (
    <span
      className={`inline-flex items-center gap-[3px] h-[33px] px-2 border rounded-[3px] text-[14px] font-medium tracking-[-0.42px] ${className}`}>
      {children}
    </span>
  );
}

export function StudyCategoryToggle(props: IStudyCategoryToggleProps) {
  const { children, isActive } = props;
  return (
    <label className="cursor-pointer">
      <input className="hidden" type="checkbox" />
      <StudyCategoryToggleBase
        className={isActive ? "border-gray-300 bg-white text-gray-600" : "border-main-500 bg-main-100 text-main-500"}>
        {children}
      </StudyCategoryToggleBase>
    </label>
  );
}
