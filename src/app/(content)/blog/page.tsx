import BlogPreview from "@/components/blog/blog-preview";
import PageTitle from "@/components/ui/page-title";
import { getPagesByType } from "@/lib/queries";
import React from "react";

const Blog = async () => {
  const posts = await getPagesByType("blog");
  return (
    <div className="flex flex-col">
      <PageTitle>Hot off the press</PageTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <BlogPreview
            featured={idx == 0}
            key={`blog-preview-${post.slug.current}`}
            {...post}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
