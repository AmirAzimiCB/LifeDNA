"use client";
import Link from "next/link";
import Image from "next/image";
import CartUpdate from "./CartUpdate";
import { DEFAULT_OPTION } from "@/constants";
import DeleteItemButton from "./DeleteItemButton";

const CartItem = ({ item, href, close }) => {
  return (
    <li className="gap-4 grid grid-cols-[90px_auto]">
      <Link href={href} legacyBehavior>
        <a onClick={close}>
          <div className="w-full overflow-hidden aspect-[3/4] relative pb-[3px] border-[.5px] rounded-xl border-[#CACACA]">
            <Image
              fill
              alt={
                item.merchandise.product.featuredImage.altText ||
                item.merchandise.product.title
              }
              src={item.merchandise.product.featuredImage.url}
              className="object-cover"
            />
          </div>
        </a>
      </Link>
      <div className="gap-2 py-3 flex text-sm flex-col justify-center">
        <Link href={href} legacyBehavior>
          <a onClick={close}>
            <div>
              <span className="font-medium">
                {item.merchandise.product.title}
              </span>
            </div>
          </a>
        </Link>

        <div className="flex flex-wrap items-center justify-between">
          {item.merchandise.title !== DEFAULT_OPTION && (
            <span className="text-sm">{item.merchandise.title}</span>
          )}
          {item.sellingPlanAllocation && (
            <p>
              <small>{item.sellingPlanAllocation.sellingPlan.name}</small>
            </p>
          )}
          <p className="text-sm font-semibold" suppressHydrationWarning={true}>
            {`${new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: item.cost.totalAmount.currencyCode,
              currencyDisplay: "narrowSymbol",
            }).format(parseFloat(item.cost.totalAmount.amount))}`}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <CartUpdate item={item} />
          <DeleteItemButton item={item} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
