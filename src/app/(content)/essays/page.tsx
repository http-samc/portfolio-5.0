import React from "react";
import { getPagesByType } from "@/lib/queries";
import Link from "next/link";
import PageTitle from "@/components/ui/page-title";

const Essays = async () => {
  const essays = await getPagesByType("essay");

  return (
    <div className="flex flex-col">
      <PageTitle>Thoughts.</PageTitle>
      <div className="flex flex-col w-full md:w-2/3 mx-auto">
        <Link
          href={{
            pathname: `/essays`,
          }}
          key={`essay-[slug]`}
          className="text-lg font-semibold border rounded-lg p-3 h-14 hover:brand-gradient-bg hover:text-white"
        >
          <span className="font-mono mr-4">No. 1</span>
          Pinhole vision from a birdseye view
        </Link>
      </div>
    </div>
  );
};

export default Essays;
