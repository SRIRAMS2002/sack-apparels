'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { fetchProducts, Product } from "@/lib/hygraph"
import Image from "next/image"

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts()
        setProducts(data)
            // Log image URLs here
     data.forEach(product => {
  console.log("Product Image URL:", product.image.url)
    console.log("Product:", product)
})

      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    loadProducts()
  }, [])

  return (
    <div id="shop" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className="group relative bg-white/90 rounded-xl">
{product.image.url ? (

  
  <img
    src={product.image.url}
    alt={product.name}
    width={500}
    height={500}
    className="aspect-square w-full object-cover group-hover:opacity-75"
  />
) : (
  <div className="aspect-square w-full bg-gray-200 flex items-center justify-center text-gray-500">
    No Image
  </div>
)}
                
                <div className="bg-black px-3 py-3 flex rounded-b-xl justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-300">{product.color}</p>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-gray-100">₹{product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
