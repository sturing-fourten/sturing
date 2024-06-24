import TagBase, { ITagProps } from "../TagBase";

export function TagMain({ children }: ITagProps) {
  return <TagBase className="border-main-500 bg-main-500 text-white">{children}</TagBase>;
}
