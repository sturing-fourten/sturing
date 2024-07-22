import { ICONS, LOGO } from "@/constant/icons";

export default function loading() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <img src={LOGO.logoText.src} alt={LOGO.logoText.alt} width={88} height={34} />
        <img
          src={ICONS.ready.src}
          alt={ICONS.ready.alt}
          width={62}
          height={62}
          className="animate-[spin_5s_linear_infinite]"
        />
      </div>
    </div>
  );
}
