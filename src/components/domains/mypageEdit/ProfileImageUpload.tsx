"use client";

import Avatar from "@/components/commons/Avatar";
import { ICONS } from "@/constant/icons";
import { useRef } from "react";

interface ProfileImageUploadProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image: string;
}

export default function ProfileImageUpload(props: ProfileImageUploadProps) {
  const { handleFileChange, image } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-fit relative">
      <button type="button" onClick={handleUploadClick}>
        <input hidden name="profileImageUrl" value={image} onChange={handleFileChange} />
        <input
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
