import { ICONS } from "@/constant/icons";

export default function loading() {
  return (
    <div className="flex h-[356px] justify-center items-center">
      <img
        src={ICONS.ready.src}
        alt={ICONS.ready.alt}
        width={62}
        height={62}
        className="animate-[spin_5s_linear_infinite]"
      />
    </div>
  );
}
