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

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-48 flex flex-col justify-between">
        <div className="flex flex-col">
          <NavLink
            text="Blog"
            icon={<PencilIcon className="w-4 h-4" />}
            href="#"
          />
        </div>
        <div className=""></div>
        <ThemeButton />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
