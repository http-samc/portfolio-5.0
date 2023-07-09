import { ChevronRightIcon } from "lucide-react";
import React, { ReactNode } from "react";

interface CommandBlockProps {
  title: string;
  text: string | ReactNode;
}

const CommandBlock = ({ title, text }: CommandBlockProps) => {
  return (
    <div className="flex flex-col space-x-2">
      <h4 className="flex items-center space-x-2">
        <ChevronRightIcon size={16} />
        <span className="font-mono">{title}</span>
      </h4>
      <p className="px-4">{text}</p>
    </div>
  );
};

export default CommandBlock;
