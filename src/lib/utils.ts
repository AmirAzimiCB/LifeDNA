import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { HIDDEN_PRODUCT_TAG } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSortValuesFromParam(sortParam: string) {
  switch (sortParam) {
    case "price-high-low":
      return {
        sortKey: "PRICE",
        reverse: true,
      };
    case "price-low-high":
      return {
        sortKey: "PRICE",
        reverse: false,
      };
    case "best-selling":
      return {
        sortKey: "BEST_SELLING",
        reverse: false,
      };
    case "date-old-new":
      return {
        sortKey: "CREATED",
        reverse: true,
      };
    case "date-new-old":
      return {
        sortKey: "CREATED",
        reverse: false,
      };
    case "name-a-z":
      return {
        sortKey: "TITLE",
        reverse: false,
      };
    case "name-z-a":
      return {
        sortKey: "TITLE",
        reverse: true,
      };
    case "featured":
      return {
        sortKey: "MANUAL",
        reverse: false,
      };
    default:
      return {
        sortKey: "RELEVANCE",
        reverse: false,
      };
  }
}

export function getFilterValuesFromParams(params: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters: any[] = [];
  const available = "available";
  const variantOption = "variantOption";
  const productMetafield = "productMetafield";
  const knownFilters = ["productVendor", "productType"];
  const searchParams = new URLSearchParams(params);

  Array.from(searchParams.entries()).forEach(([key, value]) => {
    if (available === key) {
      const values = value.split(",");
      values.forEach((val) => {
        filters.push({ [key]: val === "true" });
      });
    } else if (knownFilters.includes(key)) {
      const values = value.split(",");
      for (const val of values) {
        filters.push({ [key]: val });
      }
    } else if (key.includes(variantOption)) {
      // Split the value by comma and create separate objects for each option
      const options = value.split(",");
      for (const option of options) {
        const [name, val] = option.split(":");
        filters.push({ variantOption: { name, value: val } });
      }
    } else if (productMetafield === key) {
      const options = value.split(",");
      for (const option of options) {
        const [namespace, keyword, val] = option.split(":");
        filters.push({
          productMetafield: { namespace, key: keyword, value: val },
        });
      }
    }
  });
  // Builds min and max price filter since we can't stack them separately into

  if (searchParams.has("minPrice") || searchParams.has("maxPrice")) {
    const price: { min?: number; max?: number } = {};
    if (searchParams.has("minPrice")) {
      price.min = Number(searchParams.get("minPrice")) || 0;
    }
    if (searchParams.has("maxPrice")) {
      price.max = Number(searchParams.get("maxPrice")) || 0;
    }
    filters.push({
      price,
    });
  }
  return filters;
}

export const removeEdgesAndNodes = (array) => {
  return array.edges.map((edge) => edge?.node);
};

export const reshapeImages = (images, productTitle) => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
    };
  });
};

export const reshapeCart = (cart) => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: "0.0",
      currencyCode: "USD",
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines),
  };
};

export const createUrl = (pathname, params) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const reshapeProduct = (product, filterHiddenProducts = true) => {
  if (
    !product ||
    (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))
  ) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants),
  };
};

export const calculateSubscriptionPrice = (
  sellingPlanPriceAdjustments,
  selectedVariantPrice
) => {
  return sellingPlanPriceAdjustments.reduce((acc, adjustment) => {
    switch (adjustment.adjustmentValue.__typename) {
      case "SellingPlanFixedAmountPriceAdjustment":
        return {
          amount:
            acc.amount -
            parseFloat(adjustment.adjustmentValue.adjustmentAmount.amount),
          currencyCode: acc.currencyCode,
          amountSaved: new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: adjustment.adjustmentValue.adjustmentAmount.currencyCode,
            currencyDisplay: "narrowSymbol",
          }).format(
            parseFloat(adjustment.adjustmentValue.adjustmentAmount.amount)
          ),
        };
      case "SellingPlanFixedPriceAdjustment":
        return {
          amount: parseFloat(adjustment.adjustmentValue.price.amount),
          currencyCode: acc.currencyCode,
          amountSaved: new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: adjustment.adjustmentValue.price.currencyCode,
            currencyDisplay: "narrowSymbol",
          }).format(
            acc.amount - parseFloat(adjustment.adjustmentValue.price.amount)
          ),
        };
      case "SellingPlanPercentagePriceAdjustment":
        return {
          amount:
            acc.amount *
            (1 - adjustment.adjustmentValue.adjustmentPercentage / 100),
          currencyCode: acc.currencyCode,
          amountSaved: `${adjustment.adjustmentValue.adjustmentPercentage}%`,
        };
      default:
        return acc;
    }
  }, selectedVariantPrice);
};

export const getSubscriptionCycle = (title: string) => {
  switch (title) {
    case "DAY":
      return "Day";
    case "MONTH":
      return "Month";
    case "WEEK":
      return "Week";
    case "YEAR":
      return "Year";
    default:
      return "Month";
  }
};
