"use client";
import ProductTags from "./ProductTags";
import ProductAddToCart from "./ProductAddToCart";
import ProductSubscription from "./subscriptions/ProductSubscription";
import SellingPlanSelector from "./subscriptions/SellingPlanSelector";

const ProductDetails = ({ product, selectedVariant, selectedSellingPlan }) => {
  const { sellingPlanGroups } = product;

  return (
    <div className="text-gray-600 lg:px-6 px-0 lg:py-10 py-5 flex flex-col md:gap-6 gap-4 lg:border-l-[0.75px] border-[#CACACA] row-start-2 row-span-1 lg:col-start-2 lg:col-span-1 lg:row-start-1">
      {/* product description */}
      <div
        className="md:[&_p]:py-2 [&_p]:py-1"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
      />

      {sellingPlanGroups.nodes.length > 0 ? (
        <SellingPlanSelector
          sellingPlanGroups={sellingPlanGroups}
          selectedSellingPlan={selectedSellingPlan}
        >
          {({ sellingPlanGroup }) => (
            <ProductSubscription
              key={sellingPlanGroup.name}
              selectedVariant={selectedVariant}
              sellingPlanGroup={sellingPlanGroup}
              shippingPrice={
                product.metafields.find(
                  (metafield) => metafield.key === "product_shipping_price"
                ).value
              }
              originalPrice={product.priceRange.maxVariantPrice}
            />
          )}
        </SellingPlanSelector>
      ) : null}
      {/* add to cart button */}
      <ProductAddToCart
        selectedSellingPlan={selectedSellingPlan}
        sellingPlanGroups={sellingPlanGroups}
        selectedVariant={selectedVariant}
        availableForSale={product.availableForSale}
      />

      <ProductTags title="Tags" tags={product.tags} />
    </div>
  );
};

export default ProductDetails;
