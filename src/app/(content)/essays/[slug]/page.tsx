import MarkdownPage from "@/components/ui/markdown-page";
import React from "react";

// make this general catch-all???

const Essay = ({ params }: { params: { slug: string } }) => {
  return <MarkdownPage pageType="essay" slug={params.slug} />;
};

export default Essay;
