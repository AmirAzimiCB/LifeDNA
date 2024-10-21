import ProductPage from "../../product-page/page";

export default function ProductPageWrapper({
  params,
}: {
  params: { handle: string };
}) {
  return <ProductPage handle={params.handle} />;
}
