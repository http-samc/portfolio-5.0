import React, { Suspense } from "react";
import SpotifyActivity from "./component";
import SpotifyActivitySkeleton from "./skeleton";

const Index = () => {
  return (
    <Suspense fallback={<SpotifyActivitySkeleton />}>
      <SpotifyActivity />
    </Suspense>
  );
};

export default Index;
