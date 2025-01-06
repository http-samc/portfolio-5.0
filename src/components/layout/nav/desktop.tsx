"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ThemeButton from "../theme-button";
import NavLink, { NavLinkProps } from "./link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { NavBarProps } from "../header";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getAllPosts } from "@/lib/queries";

export type PostFragements = Awaited<ReturnType<typeof getAllPosts>>;

interface CommandMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  pages: Omit<NavLinkProps, "type">[];
  posts: PostFragements;
}

export function CommandMenu({ open, setOpen, pages, posts }: CommandMenuProps) {
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const getRoute = (pageType: string) => {
    if (["project", "essay"].includes(pageType)) {
      return `${pageType}s`;
    }
    return pageType;
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find anything..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {pages.map((page) => (
            <CommandItem
              onSelect={() => {
                router.push(page.href);
                setOpen(false);
              }}
            >
              {page.text.charAt(0).toUpperCase() + page.text.slice(1)}
            </CommandItem>
          ))}
          {posts
            .filter((post) => !["home", "research"].includes(post.pageType))
            .map((post) => (
              <CommandItem
                onSelect={() => {
                  router.push(
                    `/${getRoute(post.pageType)}/${post.slug.current}`
                  );
                  setOpen(false);
                }}
              >
                [
                {post.pageType.charAt(0).toUpperCase() + post.pageType.slice(1)}
                ] {post.title}
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

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
          className="border px-2 mt-0.5 py-1 rounded-md bg-gray-200/80 dark:bg-black hover:opacity-80 transition-opacity duration-200"
        >
          <p className="text-sm -mt-0.5 text-muted-foreground">
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
