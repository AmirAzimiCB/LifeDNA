import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "",
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "",
});

export async function getProductByHandle(handle: string) {
  try {
    const product = await client.product.fetchByHandle(handle);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

export async function getAllProducts() {
  try {
    const products = await client.product.fetchAll();
    return products;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
}
