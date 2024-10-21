"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Star } from "lucide-react";
import { ShopifyProduct } from "@/types/shopify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductPage({ handle }: { handle: string }) {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${handle}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched product data:", data); // Log the fetched data
        setProduct(data);
        // Safely set the main image
        setMainImage(
          data.images?.edges[0]?.node.originalSrc || "/placeholder.svg"
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (handle) {
      fetchProduct();
    }
  }, [handle]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  const productImages = product.images?.edges || [];

  // Safely get the price
  const price = product.variants?.edges[0]?.node.price
    ? `$${parseFloat(product.variants.edges[0].node.price).toFixed(2)}`
    : "Price not available";

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/shop" className="text-gray-600 hover:text-gray-900">
          <ChevronLeft className="inline-block mr-2" />
          Products
        </Link>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <div className="mb-4">
            <Image
              src={mainImage}
              alt={product.title}
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img.node.originalSrc)}
                className="flex-shrink-0"
              >
                <Image
                  src={img.node.originalSrc}
                  alt={
                    img.node.altText ||
                    `${product.title} thumbnail ${index + 1}`
                  }
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-bold mb-4">{price}</p>
          <div className="flex items-center space-x-4 mb-6">
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20"
            />
            <Button>Add to Cart</Button>
          </div>
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe To Save Up To 20%
            </h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Once" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="once">Once</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Save 10% on each refill order
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Cancel or modify anytime
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Free shipping
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              Save 20% when you subscribe to 3 or more products. *
            </p>
          </div>
        </div>
      </div>

      {/* The rest of your component remains largely unchanged */}
      {/* You may need to adjust how you access certain properties based on the ShopifyProduct type */}
      {/* For example, ingredients, warnings, and reviews might not be available in the standard Shopify product type */}
      {/* You may need to add these as metafields or custom fields in your Shopify setup */}

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">How To Use</h2>
          <p className="text-gray-600">
            {product.descriptionHtml ? (
              <div
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            ) : (
              "Product usage information not available."
            )}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Related</h2>
          <h3 className="font-semibold mb-2">Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Lorem Ipsum
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Lorem Ipsum Dolor Sit Amet
            </li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Health Concerns</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Lorem Ipsum
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Lorem Ipsum Dolor Sit Amet
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Articles And Videos</h2>
        <ul className="space-y-2">
          <li>Lorem Ipsum Dolor Sit Amet Consectetur</li>
          <li>Lorem Ipsum Dolor Sit Amet Consectetur</li>
          <li>Lorem Ipsum Dolor Sit Amet Consectetur</li>
          <li>Lorem Ipsum Dolor Sit Amet Consectetur</li>
        </ul>
      </div>
    </div>
  );
}
