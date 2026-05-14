'use client';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Product } from '@/types';

export function WishlistSidebar() {
  const {
    items,
    removeFromWishlist,
    clearWishlist,
    isWishlistOpen,
    setIsWishlistOpen,
  } = useWishlist();
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  const handleAddToCart = (product: Product) => {
    addToCart(product, 'M');
  };

  return (
    <>
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="fixed inset-0 bg-black/50 z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col fixed right-0 top-0 h-full w-full max-w-md bg-white z-50"
        >
          <div className="flex items-center justify-between p-6 border-b border-black">
            <h2 className="tracking-widest text-lg">
              WISHLIST ({items.length})
            </h2>
            <button
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsWishlistOpen(false)}
              aria-label="Close wishlist"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length > 0 ? (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="bg-gray-100">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={100}
                        height={150}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                      <h3 className="text-sm tracking-wide font-bold">
                        {item.product.name}
                      </h3>
                      <span className="text-sm">
                        {item.product.price.toFixed(2)} €
                      </span>

                      <div className="flex flex-col gap-2 mt-2">
                        <button
                          onClick={() => handleAddToCart(item.product)}
                          className="flex items-center justify-center gap-2 bg-black text-white py-2 px-4 text-sm hover:bg-gray-800 transition-colors"
                        >
                          <ShoppingBag className="size-4" />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => removeFromWishlist(item.product.id)}
                          className="flex items-center justify-center gap-2 border border-black py-2 px-4 text-sm hover:bg-gray-100 transition-colors"
                        >
                          <Trash2 className="size-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                Your wishlist is empty
              </p>
            )}
          </div>

          {items.length > 0 && (
            <button
              className="text-xs underline hover:opacity-70 transition-opacity m-4"
              onClick={() => clearWishlist()}
            >
              Clear Wishlist
            </button>
          )}

          {items.length > 0 && (
            <div className="flex flex-col justify-between items-center mt-auto p-4 border-t border-black">
              <Link
                onClick={() => setIsWishlistOpen(false)}
                href="/wishlist"
                className="bg-black text-white py-4 px-8 tracking-widest text-sm hover:bg-gray-800 transition-colors"
              >
                VIEW ALL
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}