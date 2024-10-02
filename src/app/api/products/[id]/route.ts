import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

const shopifyClient = new GraphQLClient(
  `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`,
  {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
  }
);

export async function GET(
  request: Request,
  { params }: { params: { handle: string } }
) {
  const query = `
    query {
      product(handle: "${params.handle}") {
        id
        title
        description
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            node {
              originalSrc
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyClient.request(query);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
}
