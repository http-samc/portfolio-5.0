import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
  hasSubtitle?: boolean;
}

const PageTitle = ({ children, hasSubtitle = false }: PageTitleProps) => {
  return (
    <h3
      className={cn(
        "font-semibold text-3xl underline decoration-double underline-offset-4 md:pt-3",
        {
          "mb-2": hasSubtitle,
          "mb-4": !hasSubtitle,
        }
      )}
    >
      {children}
    </h3>
  );
};

export default PageTitle;
