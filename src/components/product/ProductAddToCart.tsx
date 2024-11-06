"use client";
import { addItem } from "./actions";
import { Input } from "../ui/Input";
import Toaster from "../ui/Toaster";
import { Button } from "../ui/Button";
import LoadingDots from "../ui/LoadingDots";
import { useRouter } from "next/navigation";
import { useState, useEffect, useTransition } from "react";

const ProductAddToCart = ({
  selectedVariant,
  availableForSale,
  sellingPlanGroups,
  selectedSellingPlan,
}) => {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [feedback, setFeedback] = useState({
    status: 0,
    message: "",
  });
  const [isPending, startTransition] = useTransition();
  const selectedVariantId = selectedVariant?.id;

  useEffect(() => {
    if (feedback.status === 0) return;

    const timer = setTimeout(() => {
      setFeedback({
        status: 0,
        message: "",
      });
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [feedback.status]);

  return (
    <>
      <div className="flex md:gap-4 gap-2">
        <Input
          type="number"
          name="maxPrice"
          placeholder={"$"}
          defaultValue={1}
          disabled={selectedSellingPlan}
          onChange={(event) => setQty(Number(event.target.value))}
          className="w-full rounded-md px-[6px] py-[6px] border border-[#CACACA] disabled:cursor-not-allowed disabled:opacity-70"
        />
        <Button
          aria-label="Add item to cart"
          className="disabled:opacity-70 disabled:cursor-not-allowed"
          onClick={() => {
            // Safeguard in case someone messes with `disabled` in devtools.
            if (!availableForSale || !selectedVariantId) return;

            startTransition(async () => {
              const error = await addItem(
                selectedVariant.id,
                qty,
                selectedSellingPlan?.id
              );

              if (error) {
                setFeedback({
                  ...feedback,
                  status: -1,
                  message: error.toString(),
                });
              }
              setFeedback({
                ...feedback,
                status: 1,
                message: "Product added to cart",
              });
              router.refresh();
            });
          }}
          disabled={isPending || !availableForSale || !selectedVariantId}
        >
          <span>
            {sellingPlanGroups.nodes.length > 0 && selectedSellingPlan
              ? "Subscribe"
              : availableForSale
              ? "Add to cart"
              : "Sold out"}
            &nbsp;
            {isPending && <LoadingDots className="bg-white" />}
          </span>
        </Button>
      </div>
      <Toaster
        show={feedback.status !== 0}
        status={feedback.status}
        message={feedback.message}
      />
    </>
  );
};

export default ProductAddToCart;
