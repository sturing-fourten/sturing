import Button from "@/components/commons/Button";
import { ICONS } from "@/constant/icons";
import Link from "next/link";

interface BottomButtonProps {
  steps: number;
  handlePrevSection: () => void;
  handleNextSection: () => void;
  isPrevButtonDisabled: () => boolean;
  isNextButtonDisabled: () => boolean;
  goToSuccessPage: () => void;
  isSubmitted: boolean;
}

export default function BottomButton({
  steps,
  handlePrevSection,
  handleNextSection,
  isPrevButtonDisabled,
  isNextButtonDisabled,
  goToSuccessPage,
  isSubmitted,
}: BottomButtonProps) {
  return (
    <footer className="flex justify-between items-center w-full py-3 px-4">
      <Button
        varient="circle"
        type="button"
        addStyle="w-[50px] h-[50px] transform transition-transform duration-200 hover:scale-105"
        onClick={handlePrevSection}
        disabled={isPrevButtonDisabled()}>
        <img
          src={ICONS.rightArrowWhite.src}
          alt={ICONS.rightArrowWhite.alt}
          width={24}
          height={24}
          style={{ transform: "scale(-1, 1)" }}
          className="w-[24px] h-[24px]"
        />
      </Button>
      {isSubmitted ? (
        <Link href="/matching/success">
          <Button
            varient="circle"
            type="button"
            addStyle="w-[50px] h-[50px] transform transition-transform duration-200 hover:scale-105"
            onClick={steps !== 5 ? handleNextSection : goToSuccessPage}
            disabled={isNextButtonDisabled()}>
            <img src={ICONS.rightArrowWhite.src} alt={ICONS.rightArrowWhite.alt} width={24} height={24} />
          </Button>
        </Link>
      ) : (
        <Button
          varient="circle"
          type="button"
          addStyle="w-[50px] h-[50px] transform transition-transform duration-200 hover:scale-105"
          onClick={steps !== 5 ? handleNextSection : goToSuccessPage}
          disabled={isNextButtonDisabled()}>
          <img src={ICONS.rightArrowWhite.src} alt={ICONS.rightArrowWhite.alt} width={24} height={24} />
        </Button>
      )}
    </footer>
  );
}
