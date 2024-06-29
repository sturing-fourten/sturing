import Image from "next/image";
import Button from "@/components/commons/Button";
import { rightArrowwhite } from "../../../../public/icons/icons";

export default function BottomButton() {
  return (
    <footer className="flex justify-between items-center w-full py-[9px]">
      <Button varient="circle" addStyle="w-[50px] h-[50px] transform transition-transform duration-200 hover:scale-105">
        <Image
          src={rightArrowwhite}
          alt="< 아이콘"
          width={24}
          height={24}
          style={{ transform: "scale(-1, 1)" }}
          className="w-[24px] h-[24px]"
        />
      </Button>
      <Button varient="circle" addStyle="w-[50px] h-[50px] transform transition-transform duration-200 hover:scale-105">
        <Image src={rightArrowwhite} alt="> 아이콘" width={24} height={24} />
      </Button>
    </footer>
  );
}
