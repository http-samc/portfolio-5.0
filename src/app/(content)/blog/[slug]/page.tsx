import MarkdownPage from "@/components/ui/markdown-page";
import React from "react";

// make this general catch-all???

const Post = ({ params }: { params: { slug: string } }) => {
  return <MarkdownPage pageType="blog" slug={params.slug} />;
};

export default Post;
