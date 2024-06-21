import Image from "next/image";

interface IStudyCategoryButton {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export function StudyCategoryButton(props: IStudyCategoryButton) {
  const { children, imageSrc, imageAlt } = props;
  return (
    <button className="inline-flex items-center justify-between gap-[8px] h-[50px] px-[12px] border rounded-[100px] text-[14px] tracking-[-0.42px] font-semibold border-gray-400 bg-white text-black">
      <Image src={imageSrc} alt={imageAlt} width={35} height={35} />
      {children}
    </button>
  );
}
