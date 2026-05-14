'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';
import { Product } from '@/types';

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product, 'M');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl tracking-widest mb-8">WISHLIST</h1>

      {items.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.product.id} className="group">
                <Link href={`/productDetail/${item.product.slug}`}>
                  <div className="aspect-3/4 overflow-hidden bg-gray-100 mb-3 relative">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={300}
                      height={400}
                    />
                  </div>
                  <h3 className="text-sm tracking-wide mb-1">{item.product.name}</h3>
                  <p className="text-sm font-bold">{item.product.price.toFixed(2)} €</p>
                </Link>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleAddToCart(item.product)}
                    className="flex items-center justify-center gap-2 bg-black text-white py-2 px-3 text-sm hover:bg-gray-800 transition-colors flex-1"
                  >
                    <ShoppingBag className="size-4" />
                    Add
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.product.id)}
                    className="flex items-center justify-center gap-2 border border-black py-2 px-3 text-sm hover:bg-gray-100 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {items.length > 1 && (
            <button
              onClick={() => clearWishlist()}
              className="text-sm underline hover:opacity-70 transition-opacity mt-8"
            >
              Clear Wishlist
            </button>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <Heart className="size-12 mx-auto mb-4 text-gray-300" />
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <Link
            href="/"
            className="text-sm underline hover:opacity-70 transition-opacity"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}