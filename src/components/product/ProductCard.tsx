import Link from "next/link";
import Image from "next/image";
import Stars from "../ui/Stars";
interface ProductNode {
  id: string;
  title: string;
  description: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        originalSrc: string;
        altText: string;
      };
    }[];
  };
  handle?: string;
}

const ProductCard = ({ product }: { product: ProductNode }) => {
  return (
    <Link href={`/products/${product.handle}`} className="">
      <div className="relative border rounded-lg p-2 hover:shadow-lg transition-shadow text-gray-600 aspect-[1/1.26]">
        <Image
          fill
          className="object-cover"
          alt={product.images.edges[0]?.node.altText || product.title}
          src={product.images.edges[0]?.node.originalSrc || "/placeholder.svg"}
        />
        <div className="px-2 py-1 absolute left-2 bottom-2 rounded-xl bg-[rgba(255, 255, 255, 0.7)] backdrop-blur-lg text-sm font-semibold border-[0.5px] border-[#CACACA] flex items-center justify-center leading-none">
          {`${new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: product.priceRange.maxVariantPrice.currencyCode,
            currencyDisplay: "narrowSymbol",
          }).format(parseFloat(product.priceRange.maxVariantPrice.amount))}`}
        </div>
      </div>
      <div className="flex flex-col gap-1 pl-1 lg:mt-[6px] mt-3">
        <h3 className="font-medium">{product.title}</h3>
        <p className="md:text-sm text-sm line-clamp-2">{product.description}</p>
        <Stars rating={5} />
      </div>
    </Link>
  );
};

export default ProductCard;
