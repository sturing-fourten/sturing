import { useEffect, useState } from "react";
import Title from "../commons/Title";
import Subtitle from "../commons/Subtitle";
import ImageUpload from "./ImageUpload";
import StudyTitle from "./StudyTitle";
import StudyIntroduction from "./StudyIntroduction";
import StudyExample from "./StudyExample";
import ProgressWay from "./ProgressWay";
import { useRecruitStore } from "@/store/recruitStore";
import { PutBlobResult } from "@vercel/blob";

interface StudyContentProps {
  onIntroduceChange: (image: string, title: string, introduction: string, progressWay: string) => void;
}

export default function StudyContent({ onIntroduceChange }: StudyContentProps) {
  const [fileToRead, setFileToRead] = useState<File | null>(null);

  const image = useRecruitStore((state) => state.image);
  const setImage = useRecruitStore((state) => state.setImage);
  const title = useRecruitStore((state) => state.title);
  const setTitle = useRecruitStore((state) => state.setTitle);
  const introduction = useRecruitStore((state) => state.introduction);
  const setIntroduction = useRecruitStore((state) => state.setIntroduction);
  const progressWay = useRecruitStore((state) => state.progressWay);
  const setProgressWay = useRecruitStore((state) => state.setProgressWay);

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
    const loadImageFromFile = async (file: File) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImage = reader.result as string;
          resolve(newImage);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    const uploadImageToServer = async (file: File) => {
      try {
        const response = await fetch(`/api/image-test?filename=${file.name}`, {
          method: "POST",
          body: file,
        });

        const newBlob = (await response.json()) as PutBlobResult;
        const uploadImage = newBlob.url;
        return uploadImage;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const processImageUpload = async () => {
      if (fileToRead) {
        try {
          const [imageUrl] = await Promise.all([loadImageFromFile(fileToRead), uploadImageToServer(fileToRead)]);
          setImage(imageUrl);
          setFileToRead(null);
        } catch (error) {
          console.error("Error processing image upload:", error);
        }
      }
    };

    processImageUpload();
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
