import React from "react";
import { getPagesByType } from "@/lib/queries";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/ui/page-title";
import { urlForImage } from "../../../../sanity/lib/image";
import ProjectPreview from "@/components/projects/project-preview";

const Projects = async () => {
  const projects = await getPagesByType("project");

  return (
    <div className="flex flex-col">
      <PageTitle>What I&apos;ve been up to</PageTitle>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectPreview
            key={`project-preview-${project.slug.current}`}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
