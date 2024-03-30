"use client";
import React from "react";
import { Post, Category } from "../../../sanity/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { unifraktur_cook } from "@/lib/fonts";
import Link from "next/link";

const BlogPreview = ({
  title,
  slug,
  mainImage,
  description,
  publishedAt,
  featured,
  categories,
}: Post & { categories: Category[] | null; featured?: boolean }) => {
  return (
    <Link
      href={`/blog/${slug.current}`}
      className={cn("h-42 flex flex-col group relative overflow-hidden", {
        "lg:col-span-3 lg:row-span-2 lg:h-full": featured,
        "h-42": !featured,
      })}
    >
      <h4
        className={cn("text-lg font-semibold", {
          "lg:text-4xl": featured,
          "lg:text-lg": !featured,
        })}
      >
        {title}
      </h4>
      <div
        className={cn(
          "relative w-full border h-32 rounded-lg overflow-hidden my-3",
          {
            "lg:mt-8 lg:h-64": featured,
          }
        )}
      >
        {mainImage && (
          <Image
            src={urlForImage(mainImage)
              .width(featured ? 500 : 300)
              .url()}
            alt={description}
            className="object-cover group-hover:scale-[102%] transition-transform"
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
        <div
          className={cn("flex text-sm", {
            "flex-col space-y-1": featured,
            "space-x-1.5 items-center divide-x": !featured,
          })}
        >
          <p className="text-gray-700 dark:text-gray-400">
            {new Date(publishedAt).toLocaleDateString(
              "en-us",
              featured
                ? {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                : undefined
            )}
          </p>
          <p
            className={cn(
              "font-mono text-blue-400 whitespace-nowrap overflow-ellipsis overflow-hidden",
              {
                "pl-2": !featured,
              }
            )}
          >
            {categories?.map((category) => category.title).join(" • ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPreview;
