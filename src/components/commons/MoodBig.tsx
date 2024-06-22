import Image from "next/image";

interface IMoodBigBaseProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  className: string;
}

interface IMoodBigTagProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  isActive: boolean;
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

export function MoodBigToggle(props: IMoodBigTagProps) {
  const { children, imageSrc, imageAlt, isActive } = props;

  return (
    <label className="cursor-pointer">
      <input className="hidden" type="checkbox" />
      <MoodBigBase
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        className={
          isActive
            ? "border-gray-300 bg-white text-gray-600 font-medium"
            : "border-main-500 bg-main-100 text-main-500 font-semibold"
        }>
        {children}
      </MoodBigBase>
    </label>
  );
}
