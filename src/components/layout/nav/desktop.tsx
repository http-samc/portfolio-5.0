"use client";

import React, { useEffect, useState } from "react";
import ThemeButton from "../theme-button";
import NavLink, { NavLinkProps } from "./link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavBarProps } from "../header";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

const DesktopNav = ({ pages }: NavBarProps) => {
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

export default DesktopNav;
