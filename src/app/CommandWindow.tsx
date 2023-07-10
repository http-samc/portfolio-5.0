import {
  XIcon,
  MinusIcon,
  Maximize2Icon,
  OptionIcon,
  CommandIcon,
} from "lucide-react";
import React from "react";
import CommandBlock from "./CommandBlock";

const CommandWindow = () => {
  return (
    <div className="w-full relative group">
      <div className="absolute flex justify-center items-center w-full h-full">
        <div className="absolute -z-10 bg-card rounded-lg w-full h-full group-hover:h-[calc(100%-4px)] group-hover:w-[calc(100%-4px)]" />
        <div className="absolute -z-20 brand-gradient-bg rounded-lg h-[calc(100%-2px)] w-[calc(100%-2px)]" />
      </div>
      <div className="absolute flex justify-center items-center w-full h-full"></div>
      <div className="flex flex-col space-x-2 space-y-2 px-2 pt-2 pb-4 rounded-lg">
        <div className="text-sm text-gray-600 dark:text-gray-400 w-full flex justify-between">
          <div className="flex space-x-1.5 group pl-1 w-20 mt-1">
            <div className="w-3 h-3 bg-red-400 active:bg-red-300 cursor-pointer rounded-full flex justify-center items-center">
              <XIcon
                size={10}
                className="text-transparent group-hover:text-red-950"
              />
            </div>
            <div className="w-3 h-3 bg-yellow-500 active:bg-yellow-300 cursor-pointer rounded-full flex justify-center items-center">
              <MinusIcon
                size={10}
                className="text-transparent group-hover:text-yellow-950"
              />
            </div>
            <div className="w-3 h-3 bg-green-500 active:bg-green-400 cursor-pointer rounded-full flex justify-center items-center">
              <Maximize2Icon
                size={7}
                fontWeight={900}
                className="text-transparent rotate-90 group-hover:text-yellow-950"
              />
            </div>
          </div>
          <p className="font-mono select-none">{"smrth's mac"}</p>
          <div className="flex items-center space-x-0.5 justify-end mr-1 w-20">
            <OptionIcon size={12} />
            <CommandIcon size={12} />
            <p className="select-none">1</p>
          </div>
        </div>
        {<CommandBlock title="foo" text="bar" />}
      </div>
    </div>
  );
};

export default CommandWindow;
