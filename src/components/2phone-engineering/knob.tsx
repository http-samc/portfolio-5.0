import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";
import React from "react";

interface KnobProps {
  className: string;
  indicatorClassName: string;
}

const Knob = ({ className, indicatorClassName }: KnobProps) => {
  return (
    <div className="w-full h-full grid place-content-center p-2">
      <div
        className={cn(
          className,
          "w-14 h-14 border group grid place-content-center drop-shadow-2xl rounded-full"
        )}
      >
        <div
          className={cn(
            className,
            "w-8 h-8 rounded-full group-hover:opacity-80 grid place-content-center group-hover:animate-spin border drop-shadow-2xl"
          )}
        >
          <Minus
            className={cn(indicatorClassName, "hidden group-hover:inline")}
          />
        </div>
      </div>
    </div>
  );
};

export default Knob;
