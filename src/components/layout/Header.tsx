"use client";

import React from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import { NavLinkProps } from "./NavLink";
import {
  HomeIcon,
  TerminalIcon,
  TestTube2Icon,
  GraduationCapIcon,
  BookIcon,
  ScrollTextIcon,
  MailIcon,
} from "lucide-react";
import { motion } from "framer-motion";
export interface NavBarProps {
  pages: Omit<NavLinkProps, "type">[];
}

const PAGES: Omit<NavLinkProps, "type">[] = [
  {
    text: "home",
    icon: <HomeIcon size={14} />,
    href: "/",
  },
  {
    text: "projects",
    icon: <TerminalIcon size={14} />,
    href: "/projects",
  },
  {
    text: "research",
    icon: <TestTube2Icon size={14} />,
    href: "/research",
  },
  {
    text: "resume",
    icon: <GraduationCapIcon size={14} />,
    href: "/resume",
  },
  {
    text: "blog",
    icon: <BookIcon size={14} />,
    href: "/blog",
  },
  {
    text: "essays",
    icon: <ScrollTextIcon size={14} />,
    href: "/essays",
  },
  {
    text: "contact",
    icon: <MailIcon size={14} />,
    href: "/contact",
  },
];

const Header = () => {
  return (
    <motion.header
      layoutScroll
      className="flex w-full max-w-[800px] mx-auto items-center justify-between p-4 backdrop-blur-md fixed z-20"
    >
      <p className="brand-gradient-text text-xl">smrth</p>
      <div className="flex items-center space-x-2">
        <DesktopNavBar pages={PAGES} />
        <MobileNavBar pages={PAGES} />
      </div>
    </motion.header>
  );
};

export default Header;
