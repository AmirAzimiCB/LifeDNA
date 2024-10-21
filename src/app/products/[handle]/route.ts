import { NextResponse } from "next/server";
import { getProductByHandle } from "@/lib/shopify";

export async function GET(
  request: Request,
  { params }: { params: { handle: string } }
) {
  const handle = params.handle;

  try {
    const product = await getProductByHandle(handle);
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
}
