import Image from "next/image";

interface IMoodMiniBaseProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  className: string;
}

interface IMoodMiniTagProps extends Omit<IMoodMiniBaseProps, "className"> {}

interface IMoodMiniToggleProps extends Omit<IMoodMiniBaseProps, "className"> {
  isActive: boolean;
}

export function MoodMiniBase(props: IMoodMiniBaseProps) {
  const { children, imageSrc, imageAlt, className } = props;
  return (
    <span
      className={`inline-flex items-center gap-[3px] h-[33px] px-2 border rounded-[3px] text-[14px] font-medium tracking-[-0.42px] ${className}`}>
      <Image src={imageSrc} alt={imageAlt} width={16} height={16} />
      {children}
    </span>
  );
}

export function MoodMiniTag(props: IMoodMiniTagProps) {
  const { children, imageSrc, imageAlt } = props;
  return (
    <MoodMiniBase className="border-main-500 bg-white text-main-500" imageSrc={imageSrc} imageAlt={imageAlt}>
      {children}
    </MoodMiniBase>
  );
}

export function MoodMiniToggle(props: IMoodMiniToggleProps) {
  const { children, imageSrc, imageAlt, isActive } = props;

  return (
    <label className="cursor-pointer">
      <input className="hidden" type="checkbox" />
      <MoodMiniBase
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        className={isActive ? "border-gray-300 bg-white text-gray-600" : "border-main-500 bg-main-100 text-main-500"}>
        {children}
      </MoodMiniBase>
    </label>
  );
}
