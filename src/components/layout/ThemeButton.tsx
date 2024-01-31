"use client";

import React from "react";
import { Button } from "@components/ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      className="rounded-full mx-auto"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {!theme || theme === "dark" ? (
        <SunIcon size={16} />
      ) : (
        <MoonIcon size={16} />
      )}
    </Button>
  );
};

export default ThemeButton;
