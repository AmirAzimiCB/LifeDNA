"use server";
import { PRODUCTS_PER_PAGE } from "@/constants";
import { ALL_PRODUCTS_QUERY } from "@/lib/queries/product";
import { GraphQLClient, ClientError } from "graphql-request";

interface ShopifyProductResponse {
  collection: {
    products: {
      filters: {
        id: string;
        label: string;
        type: string;
        values: {
          id: string;
          label: string;
          count: string;
          input: string;
        };
      }[];
      edges: {
        node: {
          id: string;
          title: string;
          handle: string;
          priceRange: {
            minVariantPrice: {
              amount: string;
            };
          };
          images: {
            edges: {
              node: {
                originalSrc: string;
                altText: string;
              };
            }[];
          };
        };
      }[];
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
        startCursor: string;
        hasPreviousPage: boolean;
      };
      products: {
        id: string;
        title: string;
        handle: string;
        priceRange: {
          minVariantPrice: {
            amount: string;
          };
        };
        images: {
          edges: {
            node: {
              originalSrc: string;
              altText: string;
            };
          }[];
        };
      }[];
    };
  };
}

export async function loadMoreData({ sortKey, reverse, filters, cursor }) {
  try {
    const shopifyClient = new GraphQLClient(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`,
      {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        },
      }
    );

    const variables = {
      sortKey: sortKey,
      reverse: reverse,
      filters: filters,
      endCursor: cursor,
      handle: "all-products",
      first: PRODUCTS_PER_PAGE,
    };
    const data: ShopifyProductResponse = await shopifyClient.request(
      ALL_PRODUCTS_QUERY,
      variables
    );
    const result = data.collection.products;
    result.products = result.edges.map((edge) => edge.node);
    return result;
  } catch (error: unknown) {
    if (error instanceof ClientError) {
      // Extract the specific GraphQL error message
      const graphqlError = error.response.errors?.[0]?.message;
      console.error("Error while fetching more products : ", graphqlError);
      return { error: graphqlError };
    }
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error while fetching more products : ", errorMessage);
    return { error: errorMessage };
  }
}
