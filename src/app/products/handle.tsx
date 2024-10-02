import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Ensure you import Image

// Define or import the Product type
interface Product {
  name: string;
  imageUrl: string;
  // Add other properties as needed
}

export default function ProductPage() {
  const router = useRouter();
  const { handle: productHandle } = router.query; // Get the product handle from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch product data based on productHandle
  const fetchProductData = useCallback(async () => {
    if (!productHandle) return; // Exit if productHandle is not available
    setLoading(true);
    try {
      const response = await fetch(`/api/products/${productHandle}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data);
    } catch (err: unknown) {
      // Specify the type of err as unknown
      if (err instanceof Error) {
        setError(err.message); // Use err.message if err is an instance of Error
      } else {
        setError("An unknown error occurred"); // Fallback for unknown error types
      }
    } finally {
      setLoading(false);
    }
  }, [productHandle]); // Include productHandle in the dependency array

  useEffect(() => {
    fetchProductData(); // Call fetchProductData when productHandle changes
  }, [fetchProductData]); // Use fetchProductData in the dependency array

  // Example usage of loading and product
  return (
    <div>
      {loading && <p>Loading...</p>} {/* Display loading message */}
      {error && <p>Error: {error}</p>} {/* Display error if exists */}
      {product && (
        <div>
          <h1>{product.name}</h1> {/* Display product name */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
          />{" "}
          {/* Use Image component */}
        </div>
      )}
    </div>
  );
}
