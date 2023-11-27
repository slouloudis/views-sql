import { allPosts } from "contentlayer/generated";

export function getPosts() {
  // we could call an API, or a database to get our post data;
  return allPosts;
}

export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}