import React from "react";

const GitHubActivitySkeleton = () => {
  return (
    <div className="flex not-prose font-mono text-xs sm:text-sm items-center justify-between p-2 mx-3 rounded border bg-card">
      <div className="flex space-x-2 items-center">
        {/* Avatar skeleton */}
        <div className="w-8 h-8 bg-gray-200/40 rounded-full animate-pulse" />

        {/* Action text skeleton */}
        <div className="w-20 h-4 bg-gray-200/40 rounded animate-pulse" />

        {/* Repo link skeleton */}
        <div className="w-32 h-4 bg-gray-200/40 rounded animate-pulse" />

        {/* Message skeleton - hidden on mobile */}
        <div className="hidden md:block w-48 h-4 bg-gray-200/40 rounded animate-pulse" />
      </div>

      {/* DateTime skeleton - hidden on mobile */}
      <div className="hidden md:block w-24 h-4 bg-gray-200/40 rounded animate-pulse" />
    </div>
  );
};

export default GitHubActivitySkeleton;
