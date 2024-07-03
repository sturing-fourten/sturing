import Image from "next/image";
import { deleteBlue } from "@/../public/icons/icons";

export default function PhotoProofThumbnail() {
  return (
    <li className="relative aspect-square">
      <button>
        <Image src={deleteBlue} alt="" fill={true} />
      </button>
    </li>
  );
}
