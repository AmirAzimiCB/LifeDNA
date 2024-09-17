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

export async function GET() {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyClient.request(query);
    console.log("Fetched data:", data); // Log the fetched data
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching products:", error); // Log the error
    return NextResponse.json(
      { error: "Error fetching products" }, // Simplified error response
      { status: 500 }
    );
  }
}
