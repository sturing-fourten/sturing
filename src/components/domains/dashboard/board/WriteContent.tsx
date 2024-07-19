import Subtitle from "../../recruit/commons/Subtitle";
import { ChangeEvent } from "react";
import BoardTitle from "./BoardTitle";
import BoardTextarea from "./BoardTextarea";

interface WriteContentProps {
  title: string;
  textarea: string;
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onTextareaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function WriteContent({ title, textarea, onTitleChange, onTextareaChange }: WriteContentProps) {
  return (
    <>
      <div className="flex-col gap-3 inline-flex">
        <Subtitle>제목</Subtitle>
        <BoardTitle boardTitle={title} handleTitleChange={onTitleChange} />
      </div>
      <div className="flex-col gap-2 inline-flex">
        <Subtitle>내용</Subtitle>
        <BoardTextarea boardTextarea={textarea} handleTextareaChange={onTextareaChange} />
      </div>
    </>
  );
}
