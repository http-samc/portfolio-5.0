import MarkdownPage from "@/components/ui/markdown-page";
import { getPageByTypeAndSlug } from "@/lib/queries";
import { Metadata } from "next";
import React from "react";

interface ProjectProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const page = await getPageByTypeAndSlug("project", params.slug);
  return {
    title: `[Project] ${page?.title}`,
    description: page?.description,
  };
}

// make this general catch-all???

const Project = ({ params }: ProjectProps) => {
  return <MarkdownPage pageType="project" slug={params.slug} />;
};

export default Project;
