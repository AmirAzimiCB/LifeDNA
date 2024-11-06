import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const ProductHeader = ({
  price,
  currencyCode = "USD",
}: {
  price: string;
  currencyCode: string;
}) => {
  return (
    <div className="flex items-end justify-between md:gap-6 gap-4 border-b-[0.75px] border-[#CACACA]">
      <div className="flex flex-col md:gap-6 gap-4 text-gray-600">
        <Link
          href="/products"
          className="font-semibold transition-opacity hover:opacity-70 inline-flex items-center justify-center w-fit"
        >
          <ChevronLeft className="w-5 h-5 inline-block md:mr-[6px] mr-1" />
          DNA-Targeted Products
        </Link>
        <h1 className="lg:text-3xl text-2xl text-[#383B42] font-bold md:pb-6 pb-4">
          Essential Nutrients 50+
        </h1>
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
