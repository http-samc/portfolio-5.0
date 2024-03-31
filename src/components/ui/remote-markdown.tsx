import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import CommandBlock from "@/components/home/command-block";
import { cn } from "@/lib/utils";
import GitHubActivity from "@/components/home/github-activity";

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
          "prose dark:prose-invert prose-a:dark:text-purple-400 prose-a:text-purple-800 prose-a:decoration-dotted prose-a:underline-offset-2":
            prose,
        },
        className
      )}
    >
      <MDXRemote
        source={markdown}
        components={{ CommandBlock, GitHubActivity }}
      />
    </div>
  );
};

export default RemoteMarkdown;
