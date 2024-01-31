import BlogPost from "@/components/blog/BlogPost";
import PageTitle from "@/components/ui/page-title";
import { getPagesByType } from "@/lib/queries";
import React from "react";

const Blog = async () => {
  const posts = await getPagesByType("blog");
  return (
    <div className="flex flex-col">
      <PageTitle>Hot off the press</PageTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <BlogPost featured={idx == 0} key={`blog-${post.slug}`} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
