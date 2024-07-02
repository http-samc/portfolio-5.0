import { universThin } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { interactiveButton } from "./sampler";

interface LabeledButtonProps {
  label: string;
  labelClassName: string;
  button: string;
  buttonClassName: string;
  onClick(): void;
}

const LabeledButton = ({
  label,
  labelClassName,
  button,
  buttonClassName,
  onClick,
}: LabeledButtonProps) => {
  return (
    <div className="flex flex-col w-16">
      <div className="bg-black h-7 overflow-hidden">
        <button
          className={cn(
            interactiveButton,
            universThin.className,
            "bg-neutral-400 border-gray-600 rounded-lg text-white w-[62px] ml-px h-full",
            buttonClassName
          )}
          onClick={onClick}
        >
          <p className="pt-0.5 text-xs">{button}</p>
        </button>
      </div>
      <div
        className={cn(
          labelClassName,
          universThin.className,
          "grid place-content-center h-6"
        )}
      >
        <p className="text-xs">{label}</p>
      </div>
    </div>
  );
};

export default LabeledButton;
