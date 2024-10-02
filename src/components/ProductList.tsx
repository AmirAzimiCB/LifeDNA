"use client";

import Link from "next/link";
import Image from "next/image"; // Use Image for displaying product images

interface ProductNode {
  id: string;
  title: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
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
  handle?: string; // Add handle as an optional property
}

export default function ProductList({ products }: { products: ProductNode[] }) {
  return (
    <div>
      {products.map((node) => (
        <div key={node.id}>
          <h2>{node.title}</h2>
          <p>Price: {node.priceRange.minVariantPrice.amount}</p>
          {node.images.edges.length > 0 && (
            <Image
              src={node.images.edges[0].node.originalSrc}
              alt={node.images.edges[0].node.altText}
              width={500}
              height={500}
            />
          )}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            <Link href={`/products/${node.handle}`}>View Product</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
