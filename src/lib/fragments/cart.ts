import { PRODUCT_FRAGMENT_V2 } from "./product";

const CART_FRAGMENT = `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
            cost {
              totalAmount {
                amount
        currencyCode
              }
              amountPerQuantity {
                amount
        currencyCode
              }
              compareAtAmountPerQuantity {
               amount
        currencyCode
              }
            }
            sellingPlanAllocation {
              sellingPlan {
                id
                name
              }
              priceAdjustments {
                price {
                  amount
                }
                compareAtPrice {
                  amount
                }
                perDeliveryPrice {
                  amount
                }
              }
            }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                ...product
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${PRODUCT_FRAGMENT_V2}
`;
export default CART_FRAGMENT;
