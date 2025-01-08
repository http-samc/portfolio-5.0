"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider as ReactWrapProvider } from "react-wrap-balancer";
import { TooltipProvider } from "../ui/tooltip";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        enableSystem={true}
        disableTransitionOnChange
      >
        <ReactWrapProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ReactWrapProvider>
      </ThemeProvider>
    </PostHogProvider>
  );
};

export default Providers;
