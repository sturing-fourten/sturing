import { useEffect, useRef, useState } from "react";
import Title from "../commons/Title";
import Subtitle from "../commons/Subtitle";
import ImageUpload from "./ImageUpload";
import StudyTitle from "./StudyTitle";
import StudyIntroduction from "./StudyIntroduction";
import StudyExample from "./StudyExample";
import ProgressWay from "./ProgressWay";
import { useStudyContentStore } from "@/store/recruitStore";
import { PutBlobResult } from "@vercel/blob";

interface StudyContentProps {
  onIntroduceChange: (image: string, title: string, introduction: string, progressWay: string) => void;
}

export default function StudyContent({ onIntroduceChange }: StudyContentProps) {
  const [fileToRead, setFileToRead] = useState<File | null>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const image = useStudyContentStore((state) => state.image);
  const setImage = useStudyContentStore((state) => state.setImage);
  const title = useStudyContentStore((state) => state.title);
  const setTitle = useStudyContentStore((state) => state.setTitle);
  const introduction = useStudyContentStore((state) => state.introduction);
  const setIntroduction = useStudyContentStore((state) => state.setIntroduction);
  const progressWay = useStudyContentStore((state) => state.progressWay);
  const setProgressWay = useStudyContentStore((state) => state.setProgressWay);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (file?.size > 1 * 1024 * 1024) {
      alert("파일 크기는 1MB를 초과할 수 없습니다.");
      return;
    }
    setFileToRead(file);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTitle = e.target.value;
    if (inputTitle.length <= 24) {
      setTitle(inputTitle);
    }
  };

  const handleIntroductionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaIntroduction = e.target.value;
    if (textareaIntroduction.length <= 500) {
      setIntroduction(textareaIntroduction);
    }
  };

  const handleProgressWayToggle = (progressWay: string) => {
    setProgressWay(progressWay);
  };

  useEffect(() => {
    if (!fileToRead) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = reader.result as string;
      setImage(newImage);
    };

    const fetchImage = async (file: any) => {
      try {
        const response = await fetch(`/api/image-test?filename=${file.name}`, {
          method: "POST",
          body: file,
        });
        const newBlob = (await response.json()) as PutBlobResult;
        const uploadImage = newBlob.url;
        setBlob(newBlob);
        setImage(uploadImage);
      } catch (error: any) {
        console.error("Error fetching Image:", error.message);
        throw error;
      }
    };

    fetchImage(fileToRead);

    reader.readAsDataURL(fileToRead);
    setFileToRead(null);
  }, [fileToRead, setImage]);

  useEffect(() => {
    onIntroduceChange(image ?? "", title, introduction, progressWay);
  }, [image, title, introduction, progressWay]);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-5 inline-flex">
      <Title>스터디에 대해 소개해 주세요.</Title>
      <div className="flex-col justify-start items-start gap-3 inline-flex">
        <Subtitle>스터디 대표 사진</Subtitle>
        <ImageUpload handleFileChange={handleFileChange} image={image} setImage={setImage} />
      </div>
      <div className="flex-col gap-3 inline-flex">
        <Subtitle>스터디 제목</Subtitle>
        <StudyTitle studyTitle={title} handleTitleChange={handleTitleChange} />
      </div>
      <div className="flex-col gap-2 inline-flex">
        <Subtitle>스터디 소개</Subtitle>
        <StudyIntroduction studyIntroduction={introduction} handleIntroductionChange={handleIntroductionChange} />
      </div>
      <StudyExample />
      <ProgressWay selectedProgressWay={progressWay} onClickToggle={handleProgressWayToggle} />
    </div>
  );
}
