import MarkdownPage from "@/components/ui/markdown-page";
import PageTitle from "@/components/ui/page-title";
import RemoteMarkdown from "@/components/ui/remote-markdown";
import { getFirstPageByType } from "@/lib/queries";
import React from "react";

const Research = async () => {
  return <MarkdownPage pageType="research" />;
  // const research = await getFirstPageByType("research");
  // if (!research) {
  //   return;
  // }

  // return (
  //   <div className="flex flex-col">
  //     <PageTitle>{research.title}</PageTitle>
  //     <RemoteMarkdown className="-mt-6" markdown={research.body} />
  //   </div>
  // );
};

export default Research;
