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
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const onUploadImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fileInputRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = fileInputRef.current.files[0];

    const response = await fetch(`/api/image-test?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    console.log(file, response);

    const newBlob = (await response.json()) as PutBlobResult;

    setBlob(newBlob);
    setImage(blob?.url || image);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (file?.size > 1 * 1024 * 1024) {
      alert("파일 크기는 1MB를 초과할 수 없습니다.");
      return;
    }
    setImage(blob?.url || image);
  };

  useEffect(() => {
    if (!blob) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(blob.url);
    };
  }, [image, blob?.url]);

  console.log(blob?.url);
  console.log(image);

  return (
    <form onSubmit={onUploadImage}>
      <div className="w-fit relative">
        <button type="submit" onClick={() => fileInputRef.current?.click()}>
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
          <img
            className="w-6 h-6 absolute right-0 bottom-0"
            src={ICONS.cameraCircle.src}
            alt={ICONS.cameraCircle.alt}
          />
        </button>
      </div>
    </form>
  );
}
