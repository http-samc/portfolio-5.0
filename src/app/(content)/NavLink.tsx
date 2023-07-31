import Link from "next/link";
import React, { ReactNode } from "react";

interface NavLinkProps {
  text: string;
  icon: ReactNode;
  href: string;
}

const NavLink = ({ text, icon, href }: NavLinkProps) => {
  return (
    <Link className="flex space-x-2 items-center" href={href}>
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default NavLink;
