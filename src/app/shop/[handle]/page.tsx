import ProductPage from "../../product-page/[handle]/page";

interface ProductPageWrapperProps {
  params: {
    handle: string;
  };
}

export default function ProductPageWrapper({
  params,
}: ProductPageWrapperProps) {
  return <ProductPage handle={params.handle} />;
}
