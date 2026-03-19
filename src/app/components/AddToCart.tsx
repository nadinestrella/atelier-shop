'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product, Size } from '@/types';

export function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size>('M');

  const sizes: Size[] = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div>
      {/* Size Selector */}

      <div className="mb-8">
        <label className="block text-sm tracking-wider mb-4">Select Size</label>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border border-black h-12 w-12 text-sm tracking-wider ${selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}

      <button
        onClick={() => addToCart(product, selectedSize)}
        className="bg-black text-white py-4 px-8 tracking-widest text-sm hover:bg-gray-800 transition-colors"
      >
        ADD TO CART
      </button>
    </div>
  );
}
