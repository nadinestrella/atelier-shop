'use client';
import { useCart } from '../context/CartContext';
import { Product } from '@/types';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white py-4 px-8 tracking-widest text-sm hover:bg-gray-800 transition-colors"
    >
      ADD TO CART
    </button>
  );
}
