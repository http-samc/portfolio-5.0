"use client";

import React, { useEffect, useState } from "react";
import ThemeButton from "./ThemeButton";
import NavLink, { NavLinkProps } from "./NavLink";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavBarProps } from "./Header";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const DesktopNavBar = ({ pages }: NavBarProps) => {
  const [activePage, setActivePage] = useState(pages[0].href);
  const pathname = usePathname();

  useEffect(() => {
    // const { pathname } = window.location;

    if (pathname === "/") {
      setActivePage("/");
    } else {
      pages.forEach(({ href }) => {
        if (pathname?.startsWith(href)) {
          setActivePage(href);
        }
      });
    }
  }, [pages, pathname]);

  return (
    <div className="hidden md:flex md:space-x-4">
      <motion.nav
        layoutId="desktop-nav"
        className="flex space-x-2 items-center"
      >
        {pages.map((page) => (
          <Tooltip key={page.text}>
            <TooltipTrigger>
              <NavLink
                {...page}
                type="desktop"
                key={`desktop-nav-${page.href}`}
                active={activePage === page.href}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{page.text}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.nav>
      <ThemeButton />
    </div>
  );
};

export default DesktopNavBar;
