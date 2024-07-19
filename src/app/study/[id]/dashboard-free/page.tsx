"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import WriteContent from "@/components/domains/dashboard/board/WriteContent";
import Title from "@/components/domains/recruit/commons/Title";
import { useDashBordFreestore } from "@/store/dashboard-noticeStore";
import ImageContent from "@/components/domains/dashboard/board/ImageContent";
import { PutBlobResult } from "@vercel/blob";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function DashBoardFreePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { title, textarea, image, setTitle, setTextarea, setImage } = useDashBordFreestore();
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
    const newText = event.target.value;
    setTextarea(newText);
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
        setImage(uploadImage);
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
  }, [fileToRead, setImage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("textarea", textarea);
    formData.append("image", image);

    try {
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  const isInputEmpty = title.trim().length === 0 || textarea.trim().length === 0;

  useEffect(() => {
    if (isSubmitted) {
      setTitle("");
      setTextarea("");
      setImage("");
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
            textarea={textarea}
            onTitleChange={handleTitleChange}
            onTextareaChange={handleTextareaChange}
          />
          <ImageContent
            handleFileChange={handleFileChange}
            setImage={setImage}
            setPreviewImage={setPreviewImage}
            previewImage={previewImage}
          />
        </div>
        <Link href={`/study/${id}/dashboard-free/success`}>
          <div className="w-full py-3 px-4 flex gap-2.5">
            <Button
              type="submit"
              varient="filled"
              addStyle="w-full h-12 bg-blue-500 text-white font-semibold rounded"
              disabled={isInputEmpty}>
              등록하기
            </Button>
          </div>
        </Link>
      </div>
    </form>
  );
}
