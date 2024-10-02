"use client"; // Add this line to mark the component as a Client Component

import ProductList from "../../components/ProductList"; // Adjust the path based on your structure
import { useEffect, useState } from "react";

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

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductNode[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products"); // Adjust the API endpoint as needed
      const data = await response.json();
      setProducts(data); // Assuming the data is an array of ProductNode
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <ProductList products={products} /> {/* Pass the products prop */}
    </div>
  );
}
