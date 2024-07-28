import { ICONS } from "@/constant/icons";

interface ProgressBarProps {
  progress: number;
}

export default function SturingProgressBar({ progress }: ProgressBarProps) {
  return (
    <>
      <div className="mt-11">
        <div>
          <div className="w-full h-2 bg-main-100 relative shrink-0 rounded-full ">
            <div
              className={`h-full bg-gradient-to-r from-gradient-to to-gradient-blue rounded-full relative`}
              style={{ width: `${progress}%` }}>
              <div className="absolute bottom-4 -right-[27px]">
                <div className="relative ">
                  <img src={ICONS.toolTipBlue.src} alt={ICONS.toolTipBlue.alt} />
                  <p className="text-white text-base text-center font-medium absolute inset-y-0 top-1 left-[11px]">
                    {`${progress}%`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-600 flex flex-col items-center">
          <span className="font-black mt-[-2px]">·</span>
          <p className="font-semibold text-xs -mt-[7px]">첫 지수 50%</p>
        </div>
      </div>
    </>
  );
}
