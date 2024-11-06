"use client";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import LoadingDots from "../ui/LoadingDots";
import { removeItem, updateItemQuantity } from "../product/actions";

export default function EditItemQuantityButton({ item, type, handleError }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      onClick={() => {
        startTransition(async () => {
          const error =
            type === "minus" && item.quantity - 1 === 0
              ? await removeItem(item.id)
              : await updateItemQuantity({
                  lineId: item.id,
                  variantId: item.merchandise.id,
                  quantity:
                    type === "plus" ? item.quantity + 1 : item.quantity - 1,
                });

          if (error) {
            handleError(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={cn(
        "w-10  h-9 border-0 flex items-center justify-center bg-transparent transition-opacity hover:opacity-70",
        isPending && "cursor-not-allowed"
      )}
    >
      {isPending ? (
        <LoadingDots />
      ) : type === "plus" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15"
          ></path>
        </svg>
      )}
    </button>
  );
}
