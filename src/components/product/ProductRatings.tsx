"use client";
import Stars from "../ui/Stars";
import { cn } from "@/lib/utils";
import { ProductReviews } from "@/types";

const ProductRatings = ({ data }: { data: ProductReviews }) => {
  return (
    <div className="grid md:pb-8 pb-4 gap-4 text-gray-600">
      <div className="flex flex-col gap-2 border-b-[0.75px] border-[#CACACA] pb-4">
        <div className="flex gap-2 lg:flex-col lg:justify-start justify-between lg:items-start items-center">
          <h4 className="text-lg font-semibold capitalize">Reviews</h4>
          <h2 className="lg:text-3xl text-2xl font-semibold">
            {data.averageRating}/5
          </h2>
        </div>
        <button
          type="button"
          title="add review"
          onClick={() => null}
          className="capitalize text-sm inline-flex"
        >
          write a review
        </button>
      </div>

      {data.reviews.map((review, index) => {
        return (
          <div
            key={`product-review-${index}`}
            className={cn(
              "grid lg:grid-cols-[1fr_2fr] grid-cols-1 md:gap-6 gap-4 border-b-[0.75px] border-[#CACACA] pb-4 pl-[5px]",
              index + 1 === data.reviews.length && "lg:border-b-0"
            )}
          >
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-2 lg:flex-col flex-row-reverse lg:justify-start justify-between">
                <Stars rating={review.rating} />
                <p className="capitalize font-medium">{review.user}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:pr-6">
              <p className="capitalize font-semibold">{review.reviewTitle}</p>
              <p>{review.reviewBody}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductRatings;
