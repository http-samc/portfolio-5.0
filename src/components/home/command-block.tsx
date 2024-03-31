import { ChevronRightIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Balancer } from "react-wrap-balancer";

interface CommandBlockProps {
  title: string;
  children: ReactNode;
}

const CommandBlock = ({ title, children }: CommandBlockProps) => {
  return (
    <div className="flex flex-col space-y-0.5">
      <h4 className="flex items-center space-x-1 -ml-2">
        <ChevronRightIcon size={16} />
        <span className="font-mono -mt-[2.5px]">{title}</span>
      </h4>
      <div className="-ml-1">{children}</div>
    </div>
  );
};

export default CommandBlock;
