"use client";
import Link from "next/link";
import Portal from "../Portal";
import CartItem from "./CartItem";
import { Button } from "../ui/Button";
import CartHeader from "./CartHeader";
import { createUrl } from "@/lib/utils";
import useEscape from "../hooks/useEscape";
import { DEFAULT_OPTION } from "@/constants";
import { useState, useEffect, useRef } from "react";
import useBodyLockScroll from "../hooks/useBodyLockScroll";

const CartModal = ({ cart }) => {
  const cartRef = useRef(null);
  const [open, setOpen] = useState(false);
  useBodyLockScroll(open);
  useEscape(() => setOpen(false));
  const quantityRef = useRef(cart?.totalQuantity);
  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!open) {
        setOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [open, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button
        type="button"
        title="open cart"
        onClick={() => setOpen(true)}
        className="gap-2 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 lg:flex hidden"
          version="1.1"
          viewBox="0 0 483.1 483.1"
        >
          <g>
            <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6   c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3   C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z    M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1   c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z" />
          </g>
        </svg>
        <div className="w-6 h-6 ">
          <div className="text-xs flex leading-none w-6 h-6 items-center justify-center rounded-[50%] text-white bg-accent-color">
            {cart?.totalQuantity ? cart?.totalQuantity : 0}
          </div>
        </div>
      </button>
      <Portal>
        {open && (
          <div className="text-gray-600 inset-0 z-[9999] flex fixed justify-end backdrop-blur bg-[rgba(0, 0, 0, 0.25)] ">
            <div
              onClick={() => setOpen(false)}
              className="md:flex flex-1 hidden"
            />
            <aside
              ref={cartRef}
              className="flex flex-col bg-white md:max-w-[450px] w-full border-l-[.75px] border-[#CACACA]"
            >
              <CartHeader handleClose={() => setOpen(false)} />
              <CartBody cart={cart} close={() => setOpen(false)} />
            </aside>
          </div>
        )}
      </Portal>
    </>
  );
};

export default CartModal;

function EmptyCart() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <p>CART IS EMPTY</p>
    </div>
  );
}

function CartSubTotal({ checkoutUrl, currency, subtotal, total, tax }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex py-2 justify-between border-b border-[#CACACA]">
        <p className="opacity-70 text-sm capitalize font-semibold">Taxes:</p>
        <p className="text-sm capitalize">
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: currency,
          }).format(tax)}
        </p>
      </div>
      <div className="flex py-2 justify-between border-b border-[#CACACA]">
        <p className="opacity-70 text-sm capitalize font-semibold">Subtotal:</p>

        <p className="text-sm capitalize">
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: currency,
          }).format(subtotal)}
        </p>
      </div>
      <div className="flex py-2 justify-between border-b border-[#CACACA]">
        <p className="opacity-70 text-sm capitalize font-semibold">Total:</p>
        <p className="text-sm capitalize">
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: currency,
          }).format(total)}
        </p>
      </div>
      <p className="text-xs">(*) Shipping calculated at checkout</p>
      <Link target={"_blank"} href={checkoutUrl}>
        <Button>Checkout</Button>
      </Link>
    </div>
  );
}

function CartBody({ cart, close }) {
  return (
    <>
      {!cart || cart.lines.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="grid gap-2">
              {cart.lines.map((item, index) => {
                const merchandiseSearchParams = {};

                item.merchandise.selectedOptions.forEach(({ name, value }) => {
                  if (value !== DEFAULT_OPTION) {
                    merchandiseSearchParams[name] = value;
                  }
                });
                const merchandiseUrl = createUrl(
                  `/products/${item.merchandise.product.handle}`,
                  new URLSearchParams(merchandiseSearchParams)
                );

                return (
                  <CartItem
                    item={item}
                    close={close}
                    href={merchandiseUrl}
                    key={`cart-item-${index}`}
                  />
                );
              })}
            </ul>
          </div>
          <CartSubTotal
            checkoutUrl={cart.checkoutUrl}
            total={cart.cost.totalAmount.amount}
            tax={cart.cost.totalTaxAmount.amount}
            subtotal={cart.cost.subtotalAmount.amount}
            currency={cart.cost.subtotalAmount.currencyCode}
          />
        </>
      )}
    </>
  );
}
