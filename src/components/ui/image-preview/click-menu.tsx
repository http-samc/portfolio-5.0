"use client";

import { CheckIcon, ExternalLinkIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ClickMenuProps {
  url: string;
}

const ClickMenu = ({ url }: ClickMenuProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000);
    }
  }, [copied]);

  return (
    <>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
        }}
      >
        {copied ? (
          <CheckIcon size={12} className="text-green-600 dark:text-green-400" />
        ) : (
          <LinkIcon
            size={12}
            className="hover:opacity-80 active:opacity-100 transition-opacity"
          />
        )}
      </button>
      <Link href={url} target="_blank">
        <ExternalLinkIcon
          size={12}
          className="hover:opacity-80 active:opacity-100 transition-opacity"
        />
      </Link>
    </>
  );
};

export default ClickMenu;
