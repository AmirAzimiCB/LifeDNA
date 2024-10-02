"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  const [products, setProducts] = useState<
    {
      node: {
        id: string;
        title: string;
        priceRange: { minVariantPrice: { amount: string } };
        images: {
          edges: Array<{ node: { originalSrc: string; altText: string } }>;
        };
      };
    }[]
  >([]); // Define the type for products
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true); // Set loading to true
      const response = await fetch("/api/products");

      // Log the response status
      console.log("Response Status:", response.status);

      if (!response.ok) {
        console.error("Failed to fetch products:", response.statusText);
        setError("Failed to load products."); // Set error message
        setLoading(false); // Set loading to false
        return;
      }

      try {
        const data = await response.json(); // Parse the response body
        setProducts(data.products.edges);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setError("Failed to parse products."); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(({ node }) => (
        <div
          key={node.id}
          className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <Image
            src={node.images.edges[0]?.node.originalSrc || "/placeholder.png"} // Load image from Shopify API
            alt={node.images.edges[0]?.node.altText || node.title}
            width={300}
            height={300}
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <h2 className="text-lg font-semibold mb-2">{node.title}</h2>
          <p className="text-gray-600 mb-2">
            ${parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2)}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            <Link href={`/products/${node.handle}`}>View Product</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
