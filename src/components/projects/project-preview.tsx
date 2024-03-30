import { ExpandedPost } from "@/lib/queries";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

const ProjectPreview = (project: ExpandedPost) => {
  return (
    <Link
      href={{
        pathname: `/projects/${project.slug.current}`,
      }}
      className="border group rounded w-full flex lg:flex-col justify-between relative h-32 lg:h-72 overflow-hidden transition-transform hover:scale-105 active:scale-95"
    >
      <div className="w-1/3 lg:w-full h-full lg:h-2/3 relative">
        {project.mainImage && (
          <Image
            src={urlForImage(project.mainImage).width(300).url()}
            fill
            style={{ objectFit: "contain" }}
            alt="me"
            className="p-3"
            draggable={false}
          />
        )}
        <div className="absolute m-2 w-32 h-32 rounded-full -left-3 -top-3 group-hover:bg-brand-gradient-from mix-blend-lighten filter blur-xl -z-30 transition-all"></div>
        <div className="absolute m-3 w-32 h-32 rounded-full -right-3 -top-3 group-hover:bg-brand-gradient-via mix-blend-lighten filter blur-xl -z-10 transition-all"></div>
        <div className="absolute w-32 h-32 rounded-full left-0 bottom-0 group-hover:bg-brand-gradient-to mix-blend-lighten filter blur-xl -z-20 transition-all"></div>
        <div className="absolute w-32 h-32 rounded-full right-0 bottom-0 group-hover:bg-brand-gradient-from mix-blend-lighten filter blur-xl -z-20 transition-all"></div>
      </div>
      <div className="w-2/3 group-hover:border-0 border-l lg:border-l-0 lg:border-t lg:w-full h-full lg:h-1/3 flex flex-col space-y-1 px-4 py-1">
        <p className="font-semibold">{project.title}</p>
        <p className="overflow-hidden text-sm text-blue-400 whitespace-nowrap overflow-ellipsis font-mono">
          {project.categories &&
            project.categories.map((category) => category.title).join(" • ")}
        </p>
      </div>
    </Link>
  );
};

export default ProjectPreview;
