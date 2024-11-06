"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  contentHtml: string;
  publishedAt: string;
  image: {
    url: string;
    altText: string;
  };
  author: {
    name: string;
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { handle: string };
}) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log(`Fetching blog post with handle: ${params.handle}`);
        const response = await fetch(`/api/blog/${params.handle}`);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched blog post:", data);

        setPost(data);
      } catch (err) {
        console.error("Error:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.handle]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;

  if (!post)
    return <div className="text-center py-8">Blog post not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="relative h-64 w-full mb-8">
        {post.image && (
          <Image
            src={post.image.url}
            alt={post.image.altText || post.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <div className="mt-8 text-sm text-gray-500">
        <span>By {post.author.name}</span>
        <span> | </span>
        <span>{format(new Date(post.publishedAt), "MMM dd, yyyy")}</span>
      </div>
    </div>
  );
}
