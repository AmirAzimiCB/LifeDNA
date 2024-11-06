import {
  ShopifyCart,
  ShopifyProduct,
  ShopifyProductResponse,
  ShopifyCollectionFilters,
} from "@/types/shopify";
import { GET_CART_QUERY } from "./queries/cart";
import { PRODUCTS_PER_PAGE } from "@/constants";
import { reshapeProduct, reshapeCart } from "./utils";
import { ClientError, GraphQLClient } from "graphql-request";
import { GET_PRODUCT_QUERY, ALL_PRODUCTS_QUERY } from "./queries/product";

const shopifyClient = new GraphQLClient(
  `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-10/graphql.json`,
  // `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`,
  {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
  }
);

export async function getCart(
  cartId: string
): Promise<ShopifyCart | undefined> {
  const result = await shopifyClient.request<{ cart: ShopifyCart }>(
    GET_CART_QUERY,
    { cartId }
  );
  if (!result.cart) return undefined;
  return reshapeCart(result.cart);
}

export async function getProduct(
  handle: string,
  options: { name: string; value: string }[] = []
): Promise<ShopifyProduct | undefined> {
  const result = await shopifyClient.request<{ product: ShopifyProduct }>(
    GET_PRODUCT_QUERY,
    {
      handle,
      selectedOptions: options,
    }
  );
  if (!result.product) return undefined;
  return reshapeProduct(result.product);
}

export async function getProductList(
  sort: string,
  reverse: boolean,
  filters: ShopifyCollectionFilters[]
) {
  const variables = {
    sortKey: sort,
    reverse: reverse,
    filters: filters,
    handle: "all-products",
    first: PRODUCTS_PER_PAGE,
  };
  try {
    const data: ShopifyProductResponse = await shopifyClient.request(
      ALL_PRODUCTS_QUERY,
      variables
    );
    if (!data?.collection?.products) {
      throw new Error("Products data is missing from the response");
    }
    return {
      filters: data.collection.products.filters,
      pageInfo: data.collection.products.pageInfo,
      products: data.collection.products.edges.map((edge) => edge.node),
    };
  } catch (error) {
    console.error("Error fetching products:", error); // Log the error
    if (error instanceof ClientError) {
      // Extract the specific GraphQL error message
      const graphqlError = error.response.errors?.[0]?.message;
      throw new Error(
        `Error fetching products: ${graphqlError || "Unknown GraphQL error"}`
      );
    }
    // For other types of errors
    throw new Error(
      `Error fetching products: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
