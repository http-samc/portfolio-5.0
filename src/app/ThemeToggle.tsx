"use client";

import React from "react";
import { Button } from "@components/ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <Button
      size="icon"
      variant="outline"
      className="rounded-full"
      onClick={() => setTheme("light")}
    >
      {theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </Button>
  );
};

export default ThemeToggle;
