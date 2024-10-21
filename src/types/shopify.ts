export interface ShopifyImage {
  id: string;
  originalSrc: string;
  altText: string | null;
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice: {
    amount: string;
    currencyCode: string;
  } | null;
  sku: string;
  availableForSale: boolean;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  images: ShopifyImage[];
  variants: ShopifyProductVariant[];
  vendor: string;
  tags: string[];
}
