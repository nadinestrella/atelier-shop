'use client';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export function CartSidebar() {
  const {
    cart,
    addToCart,
    clearCart,
    totalPrice,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    totalItems,
  } = useCart();

  if (!isCartOpen) return null;
  return (
    <>
      {/* Background Overlay*/}

      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 z-50"
      >
        {/* Sidebar */}
        <div className="flex flex-col fixed right-0 top-0 h-full w-full max-w-md bg-white z-50">
          {/* Header */}
          <div className="flex flex-row  ">
            <h2> SHOPPING BAG ({totalItems}) </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Cart Items */}

          {totalItems > 0 ? (
            <div>
              {cart.map((item) => (
                <div key={item.product.id}>
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={100}
                    height={200}
                  />
                  <h3>{item.product.name}</h3>
                  <span>{item.product.price}</span>

                  <div>
                    <button onClick={() => removeFromCart(item.product.id)}>
                      {' '}
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}

          {/* Footer */}

          {cart.length > 0 && (
            <div className="flex flex-col justify-between items-center mt-auto p-4 border-t border-black">
              <div className="flex flex-row justify-between w-full mb-4">
                <span>TOTAL</span>
                <span>{totalPrice.toFixed(2)}</span>
              </div>
              <Link
                href="/checkout"
                className="bg-black text-white py-4 px-8 tracking-widest text-sm hover:bg-gray-800 transition-colors"
              >
                CHECKOUT
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
