"use client";
import { cn } from "@/lib/utils";
import Toaster from "../ui/Toaster";
import { useRouter } from "next/navigation";
import LoadingDots from "../ui/LoadingDots";
import { removeItem } from "../product/actions";
import { useState, useEffect, useTransition } from "react";

export default function DeleteItemButton({ item }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState({
    status: 0,
    message: "",
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setFeedback({
        ...feedback,
        status: 0,
        message: "",
      });
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [feedback]);
  return (
    <>
      <button
        aria-label="Remove cart item"
        onClick={() => {
          startTransition(async () => {
            const error = await removeItem(item.id);

            if (error) {
              setFeedback({
                ...feedback,
                status: -1,
                message: error.toString(),
              });
            }

            router.refresh();
          });
        }}
        disabled={isPending}
        className={cn(
          "p-[5px] underline bg-transparent disabled:opacity-70 disabled:cursor-not-allowed",
          isPending && "opacity-70"
        )}
      >
        {isPending ? <LoadingDots /> : "remove"}
      </button>
      <Toaster
        show={feedback.status}
        status={feedback.status}
        message={feedback.message}
      />
    </>
  );
}
