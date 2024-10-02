import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <ProductList />
    </div>
  );
}
