import Providers from "@/components/layout/providers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "2 phone engineering | audio by smrth",
  description:
    "2 phone engineering is Samarth Chitgopekar's DJ and music production site. Find remixes, originals, and more by 2phonesamc. Brought to you by smrth.",
};

const Layout = ({ children }: React.PropsWithChildren) => {
  return <Providers>{children}</Providers>;
};

export default Layout;
