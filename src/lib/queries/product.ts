import { PRODUCT_FRAGMENT } from "../fragments/product";

// metafields namespaces
// custom.usage_guide
// custom.related_articles
// custom.product_warnings
// custom.product_ingredients
// custom.product_extra_details
// custom.product_shipping_price

export const GET_PRODUCT_QUERY = `
  query Product(
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) {
    product(handle: $handle) {
      ...product
      metafields(
        identifiers: [
          { namespace: "custom", key: "usage_guide" }
          { namespace: "custom", key: "related_articles" }
          { namespace: "custom", key: "references" }
          { namespace: "custom", key: "product_ingredients" }
          { namespace: "custom", key: "product_extra_details" }
          { namespace: "custom", key: "product_warnings" }
          { namespace: "custom", key: "product_shipping_price" }
        ]
      ) {
        id
        key
        value
        namespace
        references(first: 10) {
          edges {
            node {
              ... on Metaobject {
                id
                type
                fields {
                  key
                  value
                  reference {
                    ... on MediaImage {
                      id
                      image {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const ALL_PRODUCTS_QUERY = `
query getCollectionData(
  $handle: String!
  $filters: [ProductFilter!]
  $sortKey: ProductCollectionSortKeys!
  $reverse: Boolean
  $first: Int
  $last: Int
  $startCursor: String
  $endCursor: String
  ) {
      collection(handle: $handle) {
          products(
          first: $first
          last: $last
          before: $startCursor
          after: $endCursor
          filters: $filters
          sortKey: $sortKey
          reverse: $reverse
          ) {
              filters {
                  id
                  label
                  type
                  values {
                  id
                  label
                  count
                  input
                  }
              }
              edges {
                node {
                      id
                      title
                      handle
                      description
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
                      images(first: 1) {
                       edges {
                         node {
                           originalSrc
                           altText
                          }
                        }
                      }  
                }
              }
              pageInfo {
                  endCursor
                  hasNextPage
                  startCursor
                  hasPreviousPage
              }
          }
      }
  }
`;
