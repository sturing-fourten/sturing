import Image from "next/image";
import { ITagProps } from "../TagBase";
import { TagLight } from "./TagLight";
import { star } from "../../../../public/icons/icons";

export function TagRate({ children }: ITagProps) {
  return (
    <TagLight>
      <Image src={star} width={12} height={12} alt="rate icon" />
      {children}
    </TagLight>
  );
}
