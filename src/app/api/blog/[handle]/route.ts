import { NextResponse } from "next/server";
import { adminClient } from "@/utils/shopify";

export async function GET(
  request: Request,
  { params }: { params: { handle: string } }
) {
  const query = `
    {
      blogs(first: 1) {
        edges {
          node {
            articles(first: 1, query: "handle:${params.handle}") {
              edges {
                node {
                  id
                  title
                  content
                  contentHtml
                  publishedAt
                  handle
                  image {
                    url
                    altText
                  }
                  author {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await adminClient.request(query);
    const article = data.blogs.edges[0]?.node.articles.edges[0]?.node;

    if (!article) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Error fetching blog post" },
      { status: 500 }
    );
  }
}
