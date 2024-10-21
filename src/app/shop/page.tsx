"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  handle?: string;
}

export default function ShopAllPage() {
  const [products, setProducts] = useState<ProductNode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
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

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h2 className="font-semibold mb-2">Product Type</h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <Checkbox id="accessories" />
                <span>Accessories</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox id="supplements" />
                <span>Supplements</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox id="tests" />
                <span>Tests</span>
              </label>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Health Needs</h2>
            <div className="space-y-2">
              {[
                "Lorem Ipsum Dolor",
                "Lorem Ipsum Dolor",
                "Lorem Ipsum Dolor",
              ].map((item, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <Checkbox id={`health-${index}`} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Ingredients</h2>
            <Input type="search" placeholder="Search..." />
          </div>
          <div>
            <h2 className="font-semibold mb-2">Product Form</h2>
            <div className="space-y-2">
              {[
                "Lorem Ipsum Dolor",
                "Lorem Ipsum Dolor",
                "Lorem Ipsum Dolor",
              ].map((item, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <Checkbox id={`form-${index}`} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Ingredient Concerns</h2>
            <div className="space-y-2">
              {[
                "Lorem Ipsum Dolor",
                "Lorem Ipsum Dolor",
                "Lorem Ipsum Dolor",
              ].map((item, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <Checkbox id={`concern-${index}`} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">
              {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, products.length)} of{" "}
              {products.length} results
            </p>
            <Select defaultValue="rating">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">
                  Sort by Rating (Low To High)
                </SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}

          {/* Product Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <Link
                  href={`/shop/${product.handle}`}
                  key={product.id}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div>
                    <Image
                      src={
                        product.images.edges[0]?.node.originalSrc ||
                        "/placeholder.svg"
                      }
                      alt={
                        product.images.edges[0]?.node.altText || product.title
                      }
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600">
                      $
                      {parseFloat(
                        product.priceRange.minVariantPrice.amount
                      ).toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 ml-auto" />
            </Button>
            <Button variant="outline" size="icon" disabled>
              {currentPage}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
