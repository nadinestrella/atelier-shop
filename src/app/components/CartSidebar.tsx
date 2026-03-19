'use client';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export function CartSidebar() {
  const {
    cart,
    clearCart,
    totalPrice,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    totalItems,
  } = useCart();

  console.log('cart', cart);

  if (!isCartOpen) return null;
  return (
    <>
      {/* Background Overlay*/}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 z-50"
      >
        {/* Sidebar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col fixed right-0 top-0 h-full w-full max-w-md bg-white z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-black">
            <h2 className="tracking-widest text-lg">
              {' '}
              SHOPPING BAG ({totalItems}){' '}
            </h2>
            <button
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {totalItems > 0 ? (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4"
                  >
                    <div className="bg-gray-100">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={100}
                        height={150}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-sm tracking-wide mb-1 font-bold">
                        {item.product.name}
                      </h3>
                      <span className="text-sm mb-2">Size: {item.size}</span>
                      <span className="text-sm mb-2">
                        {item.product.price.toFixed(2)} €
                      </span>

                      <div className="flex flex-row  gap-3">
                        <div className=" flex items-center border border-black">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.size,
                              )
                            }
                            className="p-1 hover:bg-black hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-4" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.size,
                              )
                            }
                            className="p-1 hover:bg-black hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-4" />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.size)
                          }
                          className="text-xs underline hover:opacity-70 transition-opacity"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                Your cart is empty
              </p>
            )}
          </div>
          {cart.length > 0 && (
            <button
              className="text-xs underline hover:opacity-70 transition-opacity mb-4"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          )}

          {/* Footer */}
          {cart.length > 0 && (
            <div className="flex flex-col justify-between items-center mt-auto p-4 border-t border-black">
              <div className="flex flex-row justify-between w-full mb-4">
                <span>TOTAL</span>
                <span>{totalPrice.toFixed(2)}</span>
              </div>
              <Link
                onClick={() => setIsCartOpen(false)}
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
