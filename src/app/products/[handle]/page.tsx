import { getProduct } from "@/lib";
import { ClientError } from "graphql-request";
import { notFound, redirect } from "next/navigation";
import ProductMedia from "@/components/product/ProductMedia";
import ProductUsage from "@/components/product/ProductUsage";
import { reviewsList, HIDDEN_PRODUCT_TAG } from "@/constants";
import ProductHeader from "@/components/product/ProductHeader";
import ProductDetails from "@/components/product/ProductDetails";
import ProductRatings from "@/components/product/ProductRatings";
import ProductWarnings from "@/components/product/ProductWarnings";
import ProductArticles from "@/components/product/ProductArticles";
import ProductIngredients from "@/components/product/ProductIngredients";
import ProductExtraDetails from "@/components/product/ProductExtraDetails";

export async function generateMetadata({ params }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

function redirectToFirstVariant({ product, params }) {
  const searchParams = new URLSearchParams(params);
  const firstVariant = product?.variants[0];
  for (const option of firstVariant.selectedOptions) {
    searchParams.set(option.name, option.value);
  }
  redirect(`/products/${product.handle}?${searchParams.toString()}`);
}

const getProductDetails = async (
  handle: string,
  options: { name: string; value: string }[]
) => {
  try {
    const product = await getProduct(handle, options);

    if (!product?.id) {
      throw notFound();
    }

    return product;
  } catch (error: unknown) {
    console.error("Error fetching product:", error); // Log the error
    if (error instanceof ClientError) {
      // Extract the specific GraphQL error message
      const graphqlError = error.response.errors?.[0]?.message;
      throw new Error(
        `Error fetching products: ${graphqlError || "Unknown GraphQL error"}`
      );
    }
    // For other types of errors
    throw new Error(
      `Error fetching products: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export default async function ProductPage({ params, searchParams }) {
  const paramsArr: { name: string; value: string }[] = [];
  const clownedParams = new URLSearchParams(searchParams);

  clownedParams.forEach((value, key) => {
    paramsArr.push({ name: key, value: value });
  });
  const filteredParams = paramsArr.filter(
    (option) =>
      // Filter out Shopify predictive search query params
      !option.name.startsWith("_sid") &&
      !option.name.startsWith("_pos") &&
      !option.name.startsWith("_psq") &&
      !option.name.startsWith("_ss") &&
      !option.name.startsWith("_v") &&
      // Filter out third party tracking params
      !option.name.startsWith("fbclid")
  );
  const product = await getProductDetails(params.handle, filteredParams);

  // selling plan code
  // 1- Get the selected selling plan id from the request url
  const selectedSellingPlanId = clownedParams.get("selling_plan") ?? null;
  // 2- Get the selected selling plan from the product's selling plan groups
  const selectedSellingPlan =
    product.sellingPlanGroups.nodes?.[0]?.sellingPlans.nodes?.find(
      (sellingPlan) => sellingPlan.id === selectedSellingPlanId
    ) ?? null;
  // this option is here in case its needed in the future
  // 3- If the product includes selling plans but no selling plan is selected,
  // we redirect to the first selling plan, so that's is selected by default
  // if (product.sellingPlanGroups.nodes?.length && !selectedSellingPlan) {
  //   const firstSellingPlanId =
  //     product.sellingPlanGroups.nodes[0].sellingPlans.nodes[0].id;
  //   return redirect(
  //     `/products/${product.handle}?${new URLSearchParams({
  //       selling_plan: firstSellingPlanId,
  //     }).toString()}`
  //   );
  // }
  //

  const firstVariant = product.variants[0];
  const firstVariantIsDefault = Boolean(
    firstVariant?.selectedOptions.find(
      (option) => option.name === "Title" && option.value === "Default Title"
    )
  );

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant;
  } else {
    // if no selected variant was returned from the selected options,
    // we redirect to the first variant's url with it's selected options applied
    if (!product.selectedVariant) {
      throw redirectToFirstVariant({ product, params: filteredParams });
    }
  }

  const renderProductMetadata = (metafield) => {
    switch (metafield?.key) {
      case "product_extra_details":
        return (
          <ProductExtraDetails
            key={metafield.id}
            data={metafield.value}
            title={`${product.title} Details`}
          />
        );
      case "product_ingredients":
        return <ProductIngredients key={metafield.id} data={metafield} />;
      case "product_warnings":
        return <ProductWarnings key={metafield.id} data={metafield} />;

      default:
        break;
    }
  };
  const renderProductMetadata2 = (metafield) => {
    switch (metafield?.key) {
      case "usage_guide":
        return <ProductUsage data={metafield} key={metafield.id} />;
      case "related_articles":
        return <ProductArticles data={metafield} key={metafield.id} />;
      case "references":
        return (
          <ProductArticles
            data={metafield}
            title="References"
            key={metafield.id}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 pt-8">
      <ProductHeader
        title={product.title}
        price={product.priceRange.maxVariantPrice.amount}
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
      />
      <div className="grid lg:grid-cols-[1fr_45%] grid-cols-1 lg:grid-rows-[auto_1fr]">
        <ProductMedia media={product.images} />
        <div className="py-4 col-start-1 col-span-1 row-start-3 lg:row-start-2 row-span-1 text-gray-600 flex flex-col md:gap-8 gap-4">
          {product.metafields &&
            product.metafields.length &&
            product.metafields.map((metafield) => {
              return renderProductMetadata(metafield);
            })}

          <ProductRatings data={reviewsList} />
        </div>
        <ProductDetails
          product={product}
          selectedVariant={firstVariant}
          selectedSellingPlan={selectedSellingPlan}
        />
        {/* product references and extra metafields */}
        <div className="flex flex-col md:gap-6 lg:px-6 px-0 lg:pb-0 pb-6 gap-4 lg:border-l-[0.75px] border-[#CACACA]    lg:row-start-2 row-span-1">
          {product.metafields &&
            product.metafields.length &&
            product.metafields.map((metafield) => {
              return renderProductMetadata2(metafield);
            })}
        </div>
      </div>
    </div>
  );
}
