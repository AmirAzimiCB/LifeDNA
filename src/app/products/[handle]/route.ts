import { NextResponse } from "next/server";
import { shopifyClient } from "@/utils/shopify";

export async function GET(
  request: Request,
  { params }: { params: { handle: string } }
) {
  const { handle } = params;

  if (!handle) {
    return NextResponse.json(
      { error: "Product handle is required" },
      { status: 400 }
    );
  }

  try {
    console.log("Fetching product with handle:", handle); // Debug log
    const product = await shopifyClient.product.fetchByHandle(handle);
    console.log("Fetched product:", product); // Debug log
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
}
