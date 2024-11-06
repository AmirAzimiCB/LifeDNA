"use client";
import { useState } from "react";
import { RichText } from "@shopify/hydrogen-react";
import { cn } from "@/lib/utils";

interface ProductExtraDetailsProps {
  data: string;
  title: string;
}

const ProductExtraDetails = ({
  data,
  title = "Product Details",
}: ProductExtraDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid md:pb-8 pb-4 lg:pr-6 border-b-[0.75px] border-[#CACACA] ">
      <h4 className="text-lg font-semibold capitalize">{title}</h4>
      <div
        className={cn(
          "relative prose max-h-full",
          !isExpanded && " max-h-[300px] overflow-hidden"
        )}
      >
        <RichText as="div" data={data} />

        {/* Gradient overlay when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="hover:opacity-70 transition-opacity font-semibold"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ProductExtraDetails;
