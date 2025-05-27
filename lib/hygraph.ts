import { GraphQLClient, gql } from "graphql-request"

const HYGRAPH_API = process.env.HYGRAPH_API!

if (!HYGRAPH_API) {
  throw new Error("HYGRAPH_API environment variable is not set")
}

const client = new GraphQLClient(HYGRAPH_API)

export interface Product {
  id: string
  name: string
  price: number
  color: string
  gsm: string
  description: string
  details: string
  highlights: string
  colour: {
    colour: {
      hex: string
    }
  }[]
  size: {
    piece: string
    inStock: boolean
  }[]
  quantity: {
    piece: string
    inStock: boolean
  }[]
  image: {
    url: string
  }[]
}

const PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      name
      price
      color
      gsm
      description
      details
      highlights
      colour {
        colour {
          hex
        }
      }
      size {
        piece
        inStock
      }
      quantity {
        piece
        inStock
      }
      image {
        url
      }
    }
  }
`

export async function fetchProducts() {
  const { products } = await client.request<{ products: Product[] }>(PRODUCTS_QUERY)
  return products
}

const PRODUCT_QUERY = gql`
  query GetProduct($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      price
      color
      gsm
      description
      details
      highlights
      colour {
        colour {
          hex
        }
      }
      size {
        piece
        inStock
      }
      quantity {
        piece
        inStock
      }
      image {
        url
      }
    }
  }
`

export async function fetchProduct(id: string) {
  try {
    console.log("Fetching product with ID:", id) // Debug log
    const data = await client.request<{ product: Product }>(PRODUCT_QUERY, { id })
    console.log("Fetched product data:", data) // Debug log
    return data.product
  } catch (error) {
    console.error("Error fetching product:", error)
    throw error
  }
}
