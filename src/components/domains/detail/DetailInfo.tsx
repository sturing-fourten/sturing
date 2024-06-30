import Image from "next/image";

interface DetailInfoProps {
  icon: { src: string; alt: string };
  title: string;
  content: string;
}

export default function DetailInfo({ icon, title, content }: DetailInfoProps) {
  return (
    <>
      <li className="list-none flex items-center gap-[11px] text-[14px] font-medium text-gray-800 leading-[150%]">
        <div className="flex items-center w-[62px] gap-[7px]">
          <Image src={icon.src} alt={icon.alt} width={18} height={18} />
          <p>{title}</p>
        </div>
        <p>{content}</p>
      </li>
    </>
  );
}
