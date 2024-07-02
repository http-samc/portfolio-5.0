import { universThin } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { interactiveButton } from "./sampler";

interface PadProps {
  label?: string;
  customContent?: ReactNode;
  hideIndicator?: boolean;
  doubleIndicator?: boolean;
  indicatorName?: string;
  className?: string;
  onClick(): void;
}

const Pad = ({
  label,
  customContent,
  hideIndicator,
  indicatorName,
  doubleIndicator,
  className,
  onClick,
}: PadProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="w-full flex ml-2 space-x-2 pt-1.5 items-baseline">
        <span
          className={cn(
            "w-2 h-2 bg-gray-600 rounded-full",
            hideIndicator && "hidden",
            !indicatorName && "mb-1.5"
          )}
        ></span>
        <span
          className={cn(
            "w-2 h-2 bg-gray-600 rounded-full !ml-7",
            !doubleIndicator && "hidden"
          )}
        ></span>
        <span
          className={cn("text-[10px] text-gray-600", universThin.className)}
        >
          {indicatorName}
        </span>
      </div>
      <div className="w-16 h-16 bg-black drop-shadow-lg overflow-hidden grid place-content-center">
        <button
          className={cn(
            interactiveButton,
            "w-[62px] h-[62px] rounded-lg border flex items-start justify-start px-2 py-1",
            className
          )}
          onClick={onClick}
        >
          {label && (
            <span className="text-white font-mono text-lg">{label}</span>
          )}
          {customContent}
        </button>
      </div>
    </div>
  );
};

export default Pad;
