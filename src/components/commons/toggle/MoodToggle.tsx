import { MoodBigBase } from "../MoodBase";
import { IMoodMiniBaseProps, MoodMiniBase } from "../MoodBase";

interface IMoodBigTagProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  isActive: boolean;
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
            ? "border-main-500 bg-main-100 text-main-500 font-semibold"
            : "border-gray-300 bg-white text-gray-600 font-medium"
        }>
        {children}
      </MoodBigBase>
    </label>
  );
}

interface IMoodMiniToggleProps extends Omit<IMoodMiniBaseProps, "className"> {
  isActive: boolean;
  onClick: () => void;
}

export function MoodMiniToggle(props: IMoodMiniToggleProps) {
  const { children, imageSrc, imageAlt, isActive, onClick } = props;

  return (
    <label className="cursor-pointer">
      <input className="hidden" type="checkbox" />
      <MoodMiniBase
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        className={isActive ? "border-main-500 bg-main-100 text-main-500" : "border-gray-300 bg-white text-gray-600"}
        onClick={onClick}>
        {children}
      </MoodMiniBase>
    </label>
  );
}
