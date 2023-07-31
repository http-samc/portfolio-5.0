import React from "react";
import ThemeButton from "./ThemeButton";

const DesktopNavBar = () => {
  return (
    <div className="hidden md:block">
      <nav></nav>
      <ThemeButton />
    </div>
  );
};

export default DesktopNavBar;
