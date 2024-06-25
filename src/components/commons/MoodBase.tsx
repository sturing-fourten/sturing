import Image from "next/image";

interface IMoodBigBaseProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  className: string;
}

export function MoodBigBase(props: IMoodBigBaseProps) {
  const { children, imageSrc, imageAlt, className } = props;
  return (
    <span
      className={`inline-flex items-center justify-center gap-[10px] w-full h-[70px] px-2 border rounded-[3px] text-[16px] tracking-[-0.32px] ${className}`}>
      <Image src={imageSrc} alt={imageAlt} width={30} height={30} />
      {children}
    </span>
  );
}

export interface IMoodMiniBaseProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  className: string;
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
