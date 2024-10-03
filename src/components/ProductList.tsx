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

export default function ProductList({
  products = [],
}: {
  products?: ProductNode[];
}) {
  // Debugging: Log the products prop
  console.log("Products:", products);

  // Ensure products is an array
  if (!Array.isArray(products)) {
    return <p>No products available.</p>; // Handle the case when products is not an array
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((node) => (
        <div key={node.id} className="p-4">
          {node.images.edges.length > 0 &&
          node.images.edges[0].node.originalSrc ? (
            <Image
              src={node.images.edges[0].node.originalSrc}
              alt={node.images.edges[0].node.altText || "Product image"}
              width={500}
              height={500}
              className="aspect-square object-contain pb-4" // Set aspect ratio to 1:1
            />
          ) : (
            <p>No image available</p> // Fallback if no image is available
          )}
          <h2 className="text-lg font-semibold">{node.title}</h2>
          <p>Price: {node.priceRange.minVariantPrice.amount}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mt-2">
            <Link href={`/products/${node.handle}`}>View Product</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
