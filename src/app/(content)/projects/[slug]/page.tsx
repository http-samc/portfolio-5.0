import MarkdownPage from "@/components/ui/markdown-page";
import React from "react";

// make this general catch-all???

const Project = ({ params }: { params: { slug: string } }) => {
  return <MarkdownPage pageType="project" slug={params.slug} />;
};

export default Project;
