import MarkdownPage from "@/components/ui/markdown-page";
import { getPageByTypeAndSlug } from "@/lib/queries";
import { Metadata } from "next";
import React from "react";

interface EssayProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: EssayProps): Promise<Metadata> {
  const page = await getPageByTypeAndSlug("essay", params.slug);
  return {
    title: `[Essay] ${page?.title}`,
    description: page?.description,
  };
}

// make this general catch-all???

const Essay = ({ params }: EssayProps) => {
  return <MarkdownPage pageType="essay" slug={params.slug} />;
};

export default Essay;
