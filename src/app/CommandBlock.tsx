import { ChevronRightIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Balancer } from "react-wrap-balancer";

interface CommandBlockProps {
  title: string;
  text: string | ReactNode;
}

const CommandBlock = ({ title, text }: CommandBlockProps) => {
  return (
    <div className="flex flex-col space-y-0.5">
      <h4 className="flex items-center space-x-1 -ml-2">
        <ChevronRightIcon size={16} />
        <span className="font-mono">{title}</span>
      </h4>
      <p className="-ml-1">
        <Balancer>{text}</Balancer>
      </p>
    </div>
  );
};

export default CommandBlock;
