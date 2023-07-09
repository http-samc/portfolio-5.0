"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex w-full max-w-[800px] mx-auto items-center justify-between p-4 backdrop-blur-md fixed">
      <p className="font-mono bg-clip-text text-transparent brand-gradient">
        smrth
      </p>
      <div className="">
        <nav></nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
