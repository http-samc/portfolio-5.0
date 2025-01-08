"use client";

import React, { useEffect, useState } from "react";
import ThemeButton from "../theme-button";
import NavLink from "./link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavBarProps } from "../header";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { getAllPosts } from "@/lib/queries";
import CommandMenu from "../command-menu";

export type PostFragements = Awaited<ReturnType<typeof getAllPosts>>;

interface DesktopNavProps extends NavBarProps {
  posts: PostFragements;
}

const DesktopNav = ({ pages, posts }: DesktopNavProps) => {
  const [activePage, setActivePage] = useState(pages[0].href);
  const pathname = usePathname();
  const [commandOpen, setCommandOpen] = React.useState(false);

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
    <>
      <CommandMenu
        pages={pages}
        posts={posts}
        open={commandOpen}
        setOpen={setCommandOpen}
      />
      <div className="hidden lg:flex lg:space-x-4 lg:items-center">
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
        <button
          onClick={() => setCommandOpen(true)}
          className="border px-2 mt-0.5 py-1 rounded-md bg-background hover:opacity-80 transition-opacity duration-200"
        >
          <p className="text-sm text-muted-foreground">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
            &nbsp; Find...
          </p>
        </button>
        <ThemeButton />
      </div>
    </>
  );
};

export default DesktopNav;
