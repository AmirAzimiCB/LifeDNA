import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

const shopifyClient = new GraphQLClient(
  `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2023-04/graphql.json`,
  {
    headers: {
      "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!,
    },
  }
);

// Define the expected type for the response
type BlogResponse = {
  blogs: {
    edges: {
      node: {
        id: string;
        title: string;
        articles: {
          edges: {
            node: {
              id: string;
              title: string;
              handle: string;
              content: string;
              excerpt: string;
              publishedAt: string;
              image: {
                url: string;
                altText: string;
              };
              author: {
                name: string;
              };
            };
          }[];
        };
      };
    }[];
  };
};

export async function GET() {
  const query = `
    {
      blogs(first: 1) {
        edges {
          node {
            id
            title
            articles(first: 20) {
              edges {
                node {
                  id
                  title
                  handle
                  content
                  excerpt
                  publishedAt
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
    console.log("Fetching blog posts...");
    const data: BlogResponse = await shopifyClient.request(query); // Cast the response to the expected type
    console.log("Raw response:", JSON.stringify(data, null, 2));

    const articles =
      data.blogs.edges.flatMap((blog) =>
        blog.node.articles.edges.map((edge) => edge.node)
      ) || [];

    console.log("Processed articles:", articles);
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Error fetching blog posts" },
      { status: 500 }
    );
  }
}
