import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, PencilIcon } from "lucide-react";
import ThemeButton from "./ThemeButton";
import NavLink from "./NavLink";
import { NavBarProps } from "./Header";

const MobileNavBar = ({ pages }: NavBarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button size="icon" variant="outline" className="w-6 h-6">
          <MenuIcon className="w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-48 flex flex-col justify-between">
        <div className="flex flex-col">
          {pages.map((page) => (
            <NavLink {...page} key={`mobile-nav-${page.href}`} type="mobile" />
          ))}
        </div>
        <div className=""></div>
        <ThemeButton />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
