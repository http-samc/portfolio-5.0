"use client";
import React from "react";
import { Post, Category } from "../../../sanity/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { unifraktur_cook } from "@/lib/fonts";

const BlogPost = ({
  title,
  mainImage,
  description,
  publishedAt,
  featured,
  categories,
}: Post & { categories: Category[] | null; featured?: boolean }) => {
  return (
    <div
      className={cn(
        "border border-transparent hover:border-inherit rounded-lg h-42 flex flex-col p-6 group relative overflow-hidden",
        {
          "lg:col-span-2 lg:row-span-2 lg:h-full": featured,
          "h-42": !featured,
        }
      )}
    >
      <p className="absolute !text-white text-center right-0 top-0 brand-gradient-bg px-1.5 text-sm rounded-lg">
        {new Date(publishedAt).toLocaleDateString()}
      </p>
      <h4
        className={cn("text-lg font-semibold", {
          "brand-gradient-text lg:text-4xl": featured,
          [unifraktur_cook.className]: featured,
          "lg:text-lg": !featured,
        })}
      >
        {title}
      </h4>
      <div
        className={cn("relative w-full h-32 rounded-lg overflow-hidden my-3", {
          "lg:mt-8 lg:h-64": featured,
        })}
      >
        {mainImage && (
          <Image
            src={urlForImage(mainImage)
              .width(featured ? 500 : 300)
              .url()}
            alt={description}
            className="object-cover"
            fill
          />
        )}
      </div>
      <div className="mt-auto">
        <p
          className={cn("text-gray-700 dark:text-gray-400 text-lg", {
            "hidden lg:block": featured,
            hidden: !featured,
          })}
        >
          {description}
        </p>
        <p className="font-mono text-sm text-purple-700 dark:text-purple-400 whitespace-nowrap overflow-ellipsis overflow-hidden">
          {categories?.map((category) => category.title).join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
