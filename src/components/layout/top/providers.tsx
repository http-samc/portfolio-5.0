"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider as ReactWrapProvider } from "react-wrap-balancer";
import { TooltipProvider } from "../../ui/tooltip";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <ReactWrapProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </ReactWrapProvider>
    </ThemeProvider>
  );
};

export default Providers;
