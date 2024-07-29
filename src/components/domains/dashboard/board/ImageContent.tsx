import { ICONS } from "@/constant/icons";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import Subtitle from "../../recruit/commons/Subtitle";

interface ImageUploadProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage: (image: string) => void;
  setPreviewImage: Dispatch<SetStateAction<string>>;
  previewImage: string;
}

export default function ImageContent(props: ImageUploadProps) {
  const { handleFileChange, setImage, setPreviewImage, previewImage } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageDelete = () => {
    setImage("");
    setPreviewImage("");
  };

  return (
    <div className="flex-col justify-start items-start gap-3 inline-flex">
      <Subtitle>대표 사진</Subtitle>
      <div className="w-full flex gap-3 justify-start items-center">
        <button
          type="button"
          className="w-16 h-16 p-2 bg-white rounded-md border border-neutral-200 justify-center items-center gap-3.5 inline-flex"
          onClick={handleUploadClick}>
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <img src={ICONS.camera.src} width={16} height={16} alt={ICONS.camera.alt} />
        </button>
        {previewImage ? (
          <div className="relative">
            <div className="w-16 h-16 flex justify-center items-center rounded-md border border-neutral-200">
              <Image
                src={previewImage}
                alt="업로드된 사진 미리보기"
                width={70}
                height={70}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <button type="button" className="absolute -top-1.5 -right-1.5" onClick={handleImageDelete}>
              <img src={ICONS.imageCancel.src} alt={ICONS.imageCancel.alt} />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
