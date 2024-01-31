import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import CommandBlock from "@components/home/CommandBlock";
import { cn } from "@/lib/utils";

interface RemoteMarkdownProps {
  markdown: string;
  prose?: boolean;
  className?: string;
}

const RemoteMarkdown = async ({
  markdown,
  prose = true,
  className,
}: RemoteMarkdownProps) => {
  return (
    <div
      className={cn(
        {
          "prose dark:prose-invert prose-a:dark:text-blue-400 prose-a:text-blue-600 prose-a:decoration-dotted prose-a:underline-offset-2":
            prose,
        },
        className
      )}
    >
      <MDXRemote source={markdown} components={{ CommandBlock }} />
    </div>
  );
};

export default RemoteMarkdown;
