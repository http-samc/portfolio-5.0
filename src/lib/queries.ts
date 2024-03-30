import { client } from "../../sanity/lib/client";
import { Category, Post } from "../../sanity/schema";

export interface ExpandedPost extends Post {
  categories: Category[] | null;
}

export const getPagesByType = (pageType: Post['pageType']) => (
  client.fetch<ExpandedPost[]>(`*[_type=="post" && pageType=="${pageType}"] | order(publishedAt desc) {
    ...,
    categories[]->
  }`)
);

export const getFirstPageByType = (pageType: Post['pageType']) => (
  client.fetch<ExpandedPost[]>(`*[_type=="post" && pageType=="${pageType}"] | order(publishedAt desc) {
    ...,
    categories[]->
  }`).then(result => result.length ? result[0] : null)
);

export const getPageByTypeAndSlug = (pageType: Post['pageType'], slug: string) => (
  client.fetch<ExpandedPost[]>(`*[_type=="post" && pageType=="${pageType}" && slug.current=="${slug}"] | order(publishedAt desc) {
    ...,
    categories[]->
  }`).then(result => result.length ? result[0] : null)
);