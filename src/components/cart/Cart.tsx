import { getCart } from "@/lib";
import CartModal from "./CartModal";
import { cookies } from "next/headers";

export default async function Cart() {
  const cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }
  return <CartModal cart={cart} />;
}
