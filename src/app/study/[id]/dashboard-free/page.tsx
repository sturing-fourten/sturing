"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import WriteContent from "@/components/domains/dashboard/board/WriteContent";
import Title from "@/components/domains/recruit/commons/Title";
import { useDashBordFreestore } from "@/store/dashboard-noticeStore";
import ImageContent from "@/components/domains/dashboard/board/ImageContent";
import { PutBlobResult } from "@vercel/blob";
import { useRouter } from "next/navigation";
import { postBoardAction } from "@/lib/database/action/board";

export default function DashBoardFreePage({ params }: { params: { id: string } }) {
  const { id: studyId } = params;
  const router = useRouter();

  const { title, content, imageUrl, setTitle, setContent, setImageUrl } = useDashBordFreestore();
  const [fileToRead, setFileToRead] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(true);

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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    setContent(newContent);
  };

  useEffect(() => {
    if (!fileToRead) return;

    const uploadImageToServer = async (file: File) => {
      try {
        const response = await fetch(`/api/image-test?filename=${file.name}`, {
          method: "POST",
          body: file,
        });
        const newBlob = (await response.json()) as PutBlobResult;
        const uploadImage = newBlob.url;
        setImageUrl(uploadImage);
      } catch (error: any) {
        console.error("Error uploading Image:", error.message);
        throw error;
      }
    };

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = reader.result as string;
      setPreviewImage(newImage);
    };
    reader.readAsDataURL(fileToRead);

    uploadImageToServer(fileToRead).finally(() => setFileToRead(null));
  }, [fileToRead, setImageUrl]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("studyId", studyId);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("postType", "free");
    formData.append("imageUrl", imageUrl);

    try {
      const res = await postBoardAction(formData);

      if (res.status !== 200) {
        throw new Error(res.message);
      }
      setIsSubmitted(true);
      router.replace(`/study/${studyId}/dashboard-free/success`);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  const isInputEmpty = title.trim().length === 0 || content.trim().length === 0;

  useEffect(() => {
    if (isSubmitted) {
      setTitle("");
      setContent("");
      setImageUrl("");
    }
  }, [isSubmitted]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-dvh flex-col inline-flex">
        <TopBar variant="back" />
        <hr className="w-full" />
        <div className="w-full px-[22px] py-[16px] flex-col gap-5 flex flex-1">
          <Title>자유롭게 글을 작성해 주세요</Title>
          <WriteContent
            title={title}
            content={content}
            onTitleChange={handleTitleChange}
            onContentChange={handleTextareaChange}
          />
          <ImageContent
            handleFileChange={handleFileChange}
            setImage={setImageUrl}
            setPreviewImage={setPreviewImage}
            previewImage={previewImage}
          />
        </div>
        <div className="w-full py-3 px-4 flex gap-2.5">
          <Button
            type="submit"
            varient="filled"
            addStyle="w-full h-12 bg-blue-500 text-white font-semibold rounded"
            disabled={isInputEmpty}>
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
