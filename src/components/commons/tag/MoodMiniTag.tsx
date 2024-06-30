import { IMoodMiniBaseProps, MoodMiniBase } from "../MoodBase";

interface IMoodMiniTagProps extends Omit<IMoodMiniBaseProps, "className"> {}

export function MoodMiniTag(props: IMoodMiniTagProps) {
  const { children, imageSrc, imageAlt } = props;
  return (
    <MoodMiniBase
      className="h-[33px] border border-main-500 bg-white text-main-500"
      imageSrc={imageSrc}
      imageAlt={imageAlt}>
      {children}
    </MoodMiniBase>
  );
}
