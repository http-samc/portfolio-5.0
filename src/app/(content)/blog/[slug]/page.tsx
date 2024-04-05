import MarkdownPage from "@/components/ui/markdown-page";
import { getPageByTypeAndSlug } from "@/lib/queries";
import { Metadata } from "next";
import React from "react";

interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const page = await getPageByTypeAndSlug("blog", params.slug);
  return {
    title: `[Blog] ${page?.title}`,
    description: page?.description,
  };
}

// make this general catch-all???

const Post = ({ params }: PostProps) => {
  return <MarkdownPage pageType="blog" slug={params.slug} />;
};

export default Post;
