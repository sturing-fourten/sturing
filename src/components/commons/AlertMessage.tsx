import { ALERT_MESSAGE_CONFIG } from "@/constant/alertMessageConfig";
import Image from "next/image";

interface AlertMessageProps {
  varient: "matching" | "recruit" | "apply" | "notFound" | "preparing";
}

export default function AlertMessage({ varient }: AlertMessageProps) {
  const formattedText = ALERT_MESSAGE_CONFIG[varient].content.split("\n").map((line, index) => (
    <span key={index} className="text-[14px] text-center text-gray-700 font-normal tracking-[-0.28px] leading-[21px]">
      {line}
      <br />
    </span>
  ));

  return (
    <>
      <Image
        src={ALERT_MESSAGE_CONFIG[varient].src}
        alt={ALERT_MESSAGE_CONFIG[varient].alt}
        width={62}
        height={62}
        className={`${varient === "preparing" && "animate-[spin_5s_linear_infinite]"}`}
      />
      <div className="flex flex-col justify-center items-center mt-[13px]">
        <h1 className="text-[24px] text-center font-semibold tracking-[-0.48px] leading-[36px]">
          {ALERT_MESSAGE_CONFIG[varient].title}
        </h1>
        <div className="mt-[8px] text-center">{formattedText}</div>
      </div>
    </>
  );
}
