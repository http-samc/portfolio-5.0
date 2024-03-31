import { ExpandedPost } from "@/lib/queries";
import Link from "next/link";
import React from "react";

interface EssayPreviewProps extends ExpandedPost {
  numEssays: number;
  index: number;
}

const EssayPreview = ({ numEssays, index, ...essay }: EssayPreviewProps) => {
  return (
    <Link
      href={{
        pathname: `/essays/${essay.slug.current}`,
      }}
      className="text-lg group flex space-x-4 divide-x rounded-lg transition-colors"
    >
      <p className="font-mono h-full my-auto font-semibold whitespace-nowrap group-hover:bg-clip-text group-hover:text-transparent group-hover:brand-gradient-bg">
        No. {numEssays - index}
      </p>
      <p className="pl-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:brand-gradient-bg">
        {essay.title}
      </p>
    </Link>
  );
};

export default EssayPreview;
