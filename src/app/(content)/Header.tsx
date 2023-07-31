"use client";

import React from "react";
import ThemeButton from "./ThemeButton";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

const Header = () => {
  return (
    <header className="flex w-full max-w-[800px] mx-auto items-center justify-between p-4 backdrop-blur-md fixed z-20">
      <p className="brand-gradient-text text-xl">smrth</p>
      <div className="flex items-center space-x-2">
        <DesktopNavBar />
        <MobileNavBar />
      </div>
    </header>
  );
};

export default Header;
