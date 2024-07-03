"use client";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  steps: number;
  maxSteps: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const { maxSteps, steps } = props;
  const [barWidth, setBarWidth] = useState<number>(0);

  useEffect(() => {
    const fullWidth = document.getElementById("progress-bar-container")?.clientWidth || 0;
    const stepWidth = fullWidth / maxSteps;
    const currentWidth = steps * stepWidth;
    setBarWidth(currentWidth);
  }, [steps, maxSteps]);

  return (
    <div id="progress-bar-container" className="w-full h-1 bg-zinc-100 relative">
      <div
        className="h-1 bg-indigo-500 absolute left-0 transition-all duration-300"
        style={{ width: `${barWidth}px` }}></div>
    </div>
  );
}
