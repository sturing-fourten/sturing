import Button from "@/components/commons/Button";
import { ICONS } from "@/constant/icons";

export default function BottomButton() {
  return (
    <footer className="flex justify-between items-center w-full py-3 px-4">
      <Button
        varient="circle"
        type="button"
        addStyle="w-[50px] h-[50px] transform transition-transform duration-200 hover:scale-105">
        <img
          src={ICONS.rightArrowWhite.src}
          alt={ICONS.rightArrowWhite.alt}
          width={24}
          height={24}
          style={{ transform: "scale(-1, 1)" }}
          className="w-[24px] h-[24px]"
        />
      </Button>
      <Button
        varient="circle"
        type="button"
        addStyle="w-[50px] h-[50px] transform transition-transform duration-200 hover:scale-105">
        <img src={ICONS.rightArrowWhite.src} alt={ICONS.rightArrowWhite.alt} width={24} height={24} />
      </Button>
    </footer>
  );
}
