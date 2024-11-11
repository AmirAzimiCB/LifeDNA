import { calculateSubscriptionPrice } from "@/lib/utils";

const SubscriptionPrice = ({
  selectedSellingPlan,
  selectedVariant,
  originalPrice,
  shippingPrice,
}) => {
  const sellingPlanPriceAdjustments = selectedSellingPlan?.priceAdjustments;
  if (!sellingPlanPriceAdjustments?.length) return null;

  const selectedVariantPrice = {
    amount: parseFloat(selectedVariant.price.amount),
    currencyCode: selectedVariant.price.currencyCode,
  };
  const sellingPlanPrice = calculateSubscriptionPrice(
    sellingPlanPriceAdjustments,
    selectedVariantPrice
  );

  return (
    <div className="flex items-center gap-3 capitalize">
      <span className="opacity-70 font-medium line-through text-lg">
        {`${new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: originalPrice.currencyCode,
          currencyDisplay: "narrowSymbol",
        }).format(parseFloat(originalPrice.amount))}`}
      </span>
      <span className="font-semibold text-xl">{`${new Intl.NumberFormat(
        undefined,
        {
          style: "currency",
          currency: sellingPlanPrice.currencyCode,
          currencyDisplay: "narrowSymbol",
        }
      ).format(parseFloat(sellingPlanPrice.amount))}`}</span>
      <span className="font-semibold ">
        +&nbsp;{shippingPrice}&nbsp;shipping
      </span>
      {/* percentage of flat price off */}
      <span className="rounded-lg overflow-hidden p-2 bg-green-950 text-white text-sm font-semibold">
        save&nbsp;{sellingPlanPrice?.amountSaved}
      </span>
    </div>
  );
};

export default SubscriptionPrice;
