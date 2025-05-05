'use client';
import Link from 'next/link';
import { products } from '@/lib/products';

export default function ProductSection() {
  return (
    <div id="shop" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2> */}
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className="group relative bg-white/90 px-3 py-5 rounded-xl">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-75"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-xl font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
