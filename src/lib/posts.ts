import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";

export type Post = CollectionEntry<"blog">;

// Published posts, newest first. Drafts show up in `astro dev` only.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function minutesToRead(post: Post): string {
  const minutes = Math.max(1, Math.ceil(readingTime(post.body ?? "").minutes));
  return `${minutes} min read`;
}

export function getTags(posts: Post[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export const postHref = (post: Post) => `/blog/${post.id}`;
