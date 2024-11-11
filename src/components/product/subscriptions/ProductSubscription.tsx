"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Checkbox } from "../../ui/checkbox";
import SubscriptionPrice from "./SubscriptionPrice";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { calculateSubscriptionPrice, getSubscriptionCycle } from "@/lib/utils";

const ProductSubscription = ({
  originalPrice,
  shippingPrice,
  selectedVariant,
  sellingPlanGroup,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedVariantPrice = {
    amount: parseFloat(selectedVariant.price.amount),
    currencyCode: selectedVariant.price.currencyCode,
  };

  console.log(shippingPrice);
  return (
    <div className="text-gray-600 flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-xl md:p-4 p-3 border-[#CACACA] border-[.75px] flex gap-3 flex-col bg-green-50">
        <span className="uppercase text-white md:text-base text-sm md:font-semibold font-medium absolute right-1 top-1 p-1 bg-accent-color px-3  rounded-[6px]">
          {sellingPlanGroup.name}
        </span>
        <ul className="flex flex-1 flex-col gap-2 md:pl-2">
          {sellingPlanGroup.sellingPlans.nodes.map((plan, index) => {
            return (
              <li
                key={`selling-plan-${index}`}
                className="flex flex-col border-b-[.5px] border-[#CACACA] gap-2 pb-2"
              >
                <Link
                  replace
                  href={plan.url}
                  className="inline-flex gap-2 items-center w-fit capitalize"
                >
                  <Checkbox
                    checked={plan.isSelected}
                    onCheckedChange={() => setSelectedIndex(index)}
                  />
                  subscribe + save
                  {/* {plan.name} */}
                </Link>
                <SubscriptionPrice
                  selectedSellingPlan={plan}
                  shippingPrice={shippingPrice}
                  originalPrice={originalPrice}
                  selectedVariant={selectedVariant}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex grow flex-wrap gap-2 [&>p]:flex-auto">
          <p>
            &#10003;&nbsp;Save&nbsp;
            <span className="font-semibold">
              {
                calculateSubscriptionPrice(
                  sellingPlanGroup.sellingPlans.nodes[selectedIndex]
                    ?.priceAdjustments,
                  selectedVariantPrice
                ).amountSaved
              }
              &nbsp;Every&nbsp;
              {getSubscriptionCycle(
                sellingPlanGroup.sellingPlans.nodes[selectedIndex]
                  .deliveryPolicy.interval
              )}
            </span>
          </p>
          <p>&#10003;&nbsp;Consistent Methylation Support</p>
          <p>&#10003;&nbsp;Pause or Cancel Anytime</p>
          <p>&#10003;&nbsp;High-Quality, Pure Ingredients</p>
        </div>
      </div>
      <div className="rounded-lg md:p-4 p-3 border-[#CACACA] border-[.75px] flex items-center bg-[#ebebeb]/30">
        <label htmlFor="checkbox">
          <Link
            replace
            href={pathname}
            className="inline-flex gap-2 items-center w-fit capitalize"
          >
            <Checkbox
              name="checkbox"
              onCheckedChange={() => {
                params.delete("selling_plan");
                router.push(`${pathname}?${params.toString()}`, {
                  scroll: false,
                });
              }}
              checked={!searchParams.has("selling_plan")}
            ></Checkbox>
            Try once
            <span className="font-semibold">
              {`${new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: originalPrice.currencyCode,
                currencyDisplay: "narrowSymbol",
              }).format(parseFloat(originalPrice.amount))}`}
            </span>
            <span className="font-semibold ">
              +&nbsp;{shippingPrice}&nbsp;shipping
            </span>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default ProductSubscription;
