// export interface ShopifyProduct {
//   id: string;
//   title: string;
//   handle: string;
//   description: string;
//   descriptionHtml: string;
//   images: ShopifyImage[];
//   variants: ShopifyVariant[];
// }

export interface ShopifyImage {
  id: string;
  src: string;
  altText: string | null;
}
export interface ShopifyVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
}
export interface ShopifyCollectionFilters {
  id: string;
  label: string;
  type: string;
  values: {
    id: string;
    label: string;
    count: string;
    input: string;
  };
}
export interface ShopifyProductResponse {
  collection: {
    products: {
      filters: {
        id: string;
        label: string;
        type: string;
        values: {
          id: string;
          label: string;
          count: string;
          input: string;
        };
      }[];
      edges: {
        node: {
          id: string;
          title: string;
          handle: string;
          priceRange: {
            maxVariantPrice: {
              amount: string;
              currencyCode: string;
            };
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
        };
      }[];
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
        startCursor: string;
        hasPreviousPage: boolean;
      };
    };
  };
}
export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};
export type Money = {
  amount: string;
  currencyCode: string;
};
export type SEO = {
  title: string;
  description: string;
};
export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};
export type CartProduct = {
  id: string;
  handle: string;
  title: string;
  featuredImage: Image;
};
export type CartItem = {
  id: string | undefined;
  quantity: number;
  cost: {
    totalAmount: Money;
    amountPerQuantity: Money;
    compareAtAmountPerQuantity: Money;
  };
  sellingPlanAllocation: {
    sellingPlan: {
      id: string;
      name: string;
    };
    priceAdjustments: {
      price: Money;
      compareAtPrice: Money;
      perDeliveryPrice: Money;
    };
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: CartProduct;
  };
};
export type ShopifyCart = {
  id: string | undefined;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};
export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};
export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};
export interface PriceAdjustment {
  adjustmentValue: {
    __typename: string;
    adjustmentAmount?: Money;
    price?: Money;
    adjustmentPercentage?: number;
  };
  orderCount: number;
}

export interface CheckoutChargeValue {
  percentage?: number;
  amount?: string;
  currencyCode?: string;
}
export type SellingPlan = {
  id: string;
  title: string;
  description: string;
  recurringDeliveries: boolean;
  options: {
    name: string;
    value: string;
  };
  priceAdjustments: PriceAdjustment[];
  checkoutCharge: {
    type: string;
    value: CheckoutChargeValue;
  };
};
export type SellingPlanGroup = {
  name: string;
  options: {
    name: string;
    values: string[];
  };
  sellingPlans: {
    nodes: SellingPlan[];
  };
};
export type Metaobject = {
  id: string;
  type: string;
  fields: {
    key: string;
    value: string;
    reference?: {
      id: string;
      image: Image;
    };
  };
};
export type ShopifyProduct = {
  id: string;
  handle: string;
  vendor: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  metafields: {
    id: string;
    key: string;
    value: string;
    namespace: string;
    references: Connection<Metaobject>;
  }[];
  selectedVariant: ProductVariant;
  variants: Connection<ProductVariant>;
  requiresSellingPlan: boolean;
  sellingPlanGroups: {
    nodes: SellingPlanGroup[];
  };
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
  publishedAt: string;
};
