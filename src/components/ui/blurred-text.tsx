import React, { ReactNode } from "react";

interface BlurredTextProps {
  children: ReactNode;
}

const BlurredText = ({ children }: BlurredTextProps) => {
  return (
    <span className="blur-md bg-white/80 mx-2 select-none">{children}</span>
  );
};

export default BlurredText;
