import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface GitHubBadgeProps {
  owner?: string;
  repo?: string;
}

const GitHubBadge = ({ owner, repo }: GitHubBadgeProps) => {
  return (
    <Link
      href={`https://github.com/${owner}/${repo}`}
      className="inline-flex mx-1.5 px-2 py-1 items-center bg-[#1b1c1d] dark:bg-black space-x-1.5 w-fit rounded-lg !text-white"
    >
      <GithubIcon size={14} className="mt-px" />
      <span className="text-sm">{repo || owner}</span>
    </Link>
  );
};

export default GitHubBadge;
