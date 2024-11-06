import SEO_FRAGMENT from "./seo";
import IMAGE_FRAGMENT from "./image";

export const SELLING_PLAN_FRAGMENT = `
  fragment SellingPlanMoney on MoneyV2 {
    amount
    currencyCode
  }

  fragment SellingPlan on SellingPlan {
    id
    name
    description
    recurringDeliveries
    options {
      name
      value
    }
    priceAdjustments {
      adjustmentValue {
        ... on SellingPlanFixedAmountPriceAdjustment {
          __typename
          adjustmentAmount {
            ... on MoneyV2 {
              ...SellingPlanMoney
            }
          }
        }
        ... on SellingPlanFixedPriceAdjustment {
          __typename
          price {
            ... on MoneyV2 {
              ...SellingPlanMoney
            }
          }
        }
        ... on SellingPlanPercentagePriceAdjustment {
          __typename
          adjustmentPercentage
        }
      }
      orderCount
    }
    recurringDeliveries
    checkoutCharge {
      type
      value {
        ... on MoneyV2 {
          ...SellingPlanMoney
        }
        ... on SellingPlanCheckoutChargePercentageValue {
          percentage
        }
      }
    }
    deliveryPolicy {
      ... on SellingPlanRecurringDeliveryPolicy {
        interval
        intervalCount
      }
    }
  }
`;

export const SELLING_PLAN_GROUP_FRAGMENT = `
   ${SELLING_PLAN_FRAGMENT}
   fragment SellingPlanGroup on SellingPlanGroup {
     name
     options {
       name
       values
     }
    sellingPlans(first:10) {
       nodes {
         ...SellingPlan
       }
     }
   }
 `;

export const PRODUCT_VARIANT_FRAGMENT = `
  fragment productVariant on ProductVariant {
    id
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

//     productOptions: metafield(namespace: "productOption", key: "color") {
//   value
//   type
//   createdAt
//   id
//   key
//   parentResource
//   reference
//   updatedAt
// }
export const PRODUCT_FRAGMENT = `
  fragment product on Product {
    id
    title
    vendor
    handle
    description
    descriptionHtml
    availableForSale
    options {
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...productVariant
    }
    variants(first: 1) {
      edges {
          node {
          ...productVariant
        }
      }
    }
    requiresSellingPlan
    sellingPlanGroups(first:10) {
      nodes {
        ...SellingPlanGroup
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    publishedAt
  }
  ${SEO_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${SELLING_PLAN_GROUP_FRAGMENT}
`;

export const PRODUCT_FRAGMENT_V2 = `
fragment product on Product {
  id
  title
  handle
  vendor
  description
  descriptionHtml
  availableForSale
  options {
    id
    name
    values
  }
  priceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
    minVariantPrice {
      amount
      currencyCode
    }
  }
  variants(first: 1) {
    edges {
      node {
        id
        title
        availableForSale
        selectedOptions {
          name
          value
        }
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
      }
    }
  }
  featuredImage {
    ...image
  }
  images(first: 20) {
    edges {
      node {
        ...image
      }
    }
  }
  seo {
    ...seo
  }
  tags
  updatedAt
  publishedAt
  
}
${SEO_FRAGMENT}
${IMAGE_FRAGMENT}
`;
