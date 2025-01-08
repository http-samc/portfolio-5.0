import React, { Suspense } from "react";
import GithubActivity, { GitHubActivityProps } from "./component";
import GitHubActivitySkeleton from "./skeleton";

const Index = (props: GitHubActivityProps) => {
  return (
    <Suspense fallback={<GitHubActivitySkeleton />}>
      <GithubActivity {...props} />
    </Suspense>
  );
};

export default Index;
