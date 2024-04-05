import React from "react";
import { getPagesByType } from "@/lib/queries";
import Link from "next/link";
import PageTitle from "@/components/ui/page-title";
import EssayPreview from "@/components/essays/essay-preview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essays",
};

const Essays = async () => {
  const essays = await getPagesByType("essay");

  return (
    <div className="flex flex-col">
      <PageTitle>Thoughts.</PageTitle>
      <div className="flex flex-col w-full space-y-2">
        {essays.map((essay, idx) => (
          <>
            <EssayPreview
              index={idx}
              numEssays={essays.length}
              key={`essay-preview-${essay.slug.current}`}
              {...essay}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Essays;
