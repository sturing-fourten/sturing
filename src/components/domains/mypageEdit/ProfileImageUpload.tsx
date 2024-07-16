"use client";

import Avatar from "@/components/commons/Avatar";
import { ICONS } from "@/constant/icons";
import { PutBlobResult } from "@vercel/blob";
import { SetStateAction, useEffect, useRef, useState } from "react";

interface ProfileImageUploadProps {
  image: string;
  setImage: React.Dispatch<SetStateAction<string>>;
}

export default function ProfileImageUpload(props: ProfileImageUploadProps) {
  const { image, setImage } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileToRead, setFileToRead] = useState<File | null>(null);

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

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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

  return (
    <div className="w-fit relative">
      <button type="button" onClick={handleUploadClick}>
        <input hidden name="profileImageUrl" value={image} onChange={handleFileChange} />
        <input
          name="file"
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Avatar profileImageUrl={image} width={90} height={90} />
        <img className="w-6 h-6 absolute right-0 bottom-0" src={ICONS.cameraCircle.src} alt={ICONS.cameraCircle.alt} />
      </button>
    </div>
  );
}
