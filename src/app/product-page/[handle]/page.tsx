"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ShopifyProduct } from "@/types/shopify";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductPageProps {
  handle: string;
}

export default function ProductPage({ handle }: ProductPageProps) {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product with handle:", handle); // Debug log
        const response = await fetch(`/api/products/${handle}`);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Fetched product data:", data); // Log the fetched data
        if (!data || Object.keys(data).length === 0) {
          throw new Error("Received empty product data");
        }
        setProduct(data);
        // Safely set the main image
        setMainImage(
          data.images && data.images.length > 0
            ? data.images[0].src
            : "/placeholder.svg"
        );
      } catch (err: unknown) {
        console.error("Error fetching product:", err); // Debug log
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, newQuantity)); // Ensure quantity is at least 1
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  const productImages = product.images || [];

  // Safely get the price
  const price =
    product.variants && product.variants.length > 0 && product.variants[0].price
      ? `$${parseFloat(product.variants[0].price.amount).toFixed(2)}`
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
              src={mainImage || "/placeholder.svg"}
              alt={product.title || "Product image"}
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {productImages.map((img, index) => (
              <button
                key={img.id || index}
                onClick={() => setMainImage(img.src)}
                className="flex-shrink-0"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.altText || `${product.title} thumbnail ${index + 1}`}
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
          <div
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml || "" }}
          />
          <p className="text-2xl font-bold mb-4">{price}</p>
          <div className="flex items-center space-x-4 mb-6">
            <Input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20"
              min={1}
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

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">How To Use</h2>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml || "" }}
          />
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
