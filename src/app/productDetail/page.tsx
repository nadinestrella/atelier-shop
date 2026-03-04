'use client';
import { useState } from 'react';
import { products } from '../data/products';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl tracking-widest mb-4">PRODUCT NOT FOUND</h1>
          <Link
            href="/"
            className="underline hover:opacity-70 transition-opacity"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    //todo
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-3/4 bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="size-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl tracking-wider mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider mb-4">
                SELECT SIZE
              </label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      w-12 h-12 border transition-colors
                      ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'border-black hover:bg-gray-100'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 tracking-wider text-sm hover:bg-gray-800 transition-colors mb-4"
            >
              ADD TO CART
            </button>

            {/* Product Details */}
            <div className="border-t border-black pt-8 mt-8">
              <details className="mb-4">
                <summary className="cursor-pointer text-sm tracking-wider py-2">
                  DESCRIPTION
                </summary>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Premium quality materials and expert craftsmanship combine to
                  create this timeless piece. Designed with attention to detail
                  and a focus on modern minimalism.
                </p>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer text-sm tracking-wider py-2">
                  SHIPPING & RETURNS
                </summary>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Free shipping on orders over $100. Easy returns within 30
                  days.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
