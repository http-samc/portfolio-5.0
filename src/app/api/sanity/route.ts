import { getPageById } from "@/lib/queries";
import type { NextApiRequest } from "next";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  for (const [key, value] of headers().entries()) {
    if (key !== "sanity-document-id") continue;

    const page = await getPageById(value);
    if (!page) continue;

    switch (page.pageType) {
      case "home":
        // revalidatePath("/");
        console.log("Not revalidating");
        break;

      case "research":
        revalidatePath("/research");
        break;

      case "project":
        revalidatePath("/projects");
        revalidatePath(`/projects/${page.slug.current}`);
        break;

      case "project":
        revalidatePath("/projects");
        revalidatePath(`/projects/${page.slug.current}`);
        break;

      case "blog":
        revalidatePath("/blog");
        revalidatePath(`/blog/${page.slug.current}`);
        break;

      case "essay":
        revalidatePath("/essays");
        revalidatePath(`/essays/${page.slug.current}`);
        break;
    }

    console.log("revalidated.");
  }

  return NextResponse.json({ foo: 1 });
}
