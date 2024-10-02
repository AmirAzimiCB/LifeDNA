import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductPage() {
  const router = useRouter();
  const { handle } = router.query; // Get the product handle from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (handle) {
      async function fetchProduct() {
        const response = await fetch(`/api/products/${handle}`);
        if (!response.ok) {
          setError("Failed to load product.");
          setLoading(false);
          return;
        }
        const data = await response.json();
        setProduct(data.product);
        setLoading(false);
      }
      fetchProduct();
    }
  }, [handle]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-6">
      {product && (
        <>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <Image
            src={product.images[0]?.originalSrc || "/placeholder.png"}
            alt={product.title}
            width={600}
            height={600}
          />
          <p className="text-lg">
            ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
          </p>
          <p>{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
}
