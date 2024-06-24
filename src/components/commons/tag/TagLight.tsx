import TagBase, { ITagProps } from "../TagBase";

export function TagLight({ children }: ITagProps) {
  return <TagBase className="border-main-500 bg-main-100 text-main-500">{children}</TagBase>;
}
