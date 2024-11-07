import Link from "next/link";
import Stars from "../ui/Stars";
import { ProductReviews } from "@/types";
import { reviewsList } from "@/constants";
import { ChevronLeft } from "lucide-react";

const ProductHeader = ({
  price,
  title,
  rating = reviewsList,
  currencyCode = "USD",
}: {
  price: string;
  title: string;
  currencyCode: string;
  rating?: ProductReviews;
}) => {
  return (
    <div className="flex items-end justify-between md:gap-6 gap-4 border-b-[0.75px] border-[#CACACA] pb-3">
      {/* md:gap-6 gap-4 */}
      <div className="flex flex-col  text-gray-600">
        <Link
          href="/products"
          className="font-semibold transition-opacity hover:opacity-70 inline-flex items-center justify-center w-fit md:pb-6 pb-4"
        >
          <ChevronLeft className="w-5 h-5 inline-block md:mr-[6px] mr-1" />
          DNA-Targeted Products
        </Link>
        <h1 className="lg:text-3xl text-2xl text-[#383B42] font-bold ">
          {title}
        </h1>
        {/* average rating section */}
        <div className="flex gap-2">
          <Stars rating={rating.averageRating} />
          <p className="opacity-70">&#40;{rating.averageRating}/5&#41;</p>
        </div>
      </div>
      <p className="lg:text-3xl text-2xl text-[#383B42] font-bold md:pb-6 pb-4">
        {`${new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: currencyCode,
          currencyDisplay: "narrowSymbol",
        }).format(parseFloat(price))}`}
      </p>
    </div>
  );
};

export default ProductHeader;
