"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-wrap-balancer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
};

export default Providers;
