import { ICONS } from "@/constant/icons";
import Image from "next/image";
import { SetStateAction, useRef } from "react";

interface ImageUploadProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image: string | undefined;
  setImage: React.Dispatch<SetStateAction<string | undefined>>;
}
export default function ImageUpload(props: ImageUploadProps) {
  const { handleFileChange, image, setImage } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full flex gap-3 justify-start items-center">
      <button
        type="button"
        className="w-16 h-16 p-2 bg-white rounded-md border border-neutral-200 justify-center items-center gap-3.5 inline-flex"
        onClick={handleUploadClick}>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <img src={ICONS.camera.src} width={16} height={16} alt={ICONS.camera.alt} />
      </button>
      {image ? (
        <div className="relative">
          <div className="w-16 h-16 flex justify-center items-center rounded-md border border-neutral-200 object-cover">
            <Image src={image} alt="업로드된 사진 미리보기" width={70} height={70} />
          </div>
          <button className="absolute -top-1.5 -right-1.5" onClick={() => setImage("")}>
            <img src={ICONS.imageCancel.src} alt={ICONS.imageCancel.alt} />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
