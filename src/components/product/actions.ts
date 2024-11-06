"use server";

import {
  ADD_TO_CART_MUTATION,
  CREATE_CART_MUTATION,
  EDIT_CART_ITEMS_MUTATION,
  REMOVE_FROM_CART_MUTATION,
} from "@/lib/mutations/cart";
import { cookies } from "next/headers";
import { GraphQLClient } from "graphql-request";
import { GET_CART_QUERY } from "@/lib/queries/cart";

const shopifyClient = new GraphQLClient(
  `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`,
  {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
  }
);

export const addItem = async (variantId, qty = 1, sellingPlanId) => {
  let cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await shopifyClient.request(GET_CART_QUERY, { cartId });
    cart = result.cart;
  }

  if (!cartId || !cart) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await shopifyClient.request(CREATE_CART_MUTATION);
    cart = result.cartCreate.cart;
    cartId = cart.id;
    cookies().set("cartId", cartId ?? "");
  }

  if (!variantId) {
    console.error("Missing product variant ID");
    return "Missing product variant ID";
  }
  const variables = {
    cartId,
    lines: [{ merchandiseId: variantId, quantity: qty, sellingPlanId }],
  };
  try {
    const data: unknown = await shopifyClient.request(
      ADD_TO_CART_MUTATION,
      variables
    );
    console.log("item added to cart  : ", data);
  } catch (e) {
    console.error("Error adding item to cart : ", e);
    return "Error adding item to cart";
  }
};

export const removeItem = async (lineId) => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }
  const variables = {
    cartId,
    lineIds: [lineId],
  };
  try {
    const data: unknown = await shopifyClient.request(
      REMOVE_FROM_CART_MUTATION,
      variables
    );
    // cartLinesRemove.cart
    console.log("item removed from cart  : ", data);
  } catch (e) {
    return "Error removing item from cart";
  }
};

export const updateItemQuantity = async ({ lineId, variantId, quantity }) => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }
  const variables = {
    cartId,
    lines: [{ id: lineId, merchandiseId: variantId, quantity }],
  };
  try {
    const data: unknown = await shopifyClient.request(
      EDIT_CART_ITEMS_MUTATION,
      variables
    );
    // cartLinesUpdate.cart
    console.log("cart updated : ", data);
  } catch (e) {
    return "Error updating item quantity";
  }
};
