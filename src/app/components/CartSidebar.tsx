'use client';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartSidebar() {
  const { isCartOpen, setIsCartOpen, totalItems } = useCart();

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

          <div>
            {totalItems > 0 ? (
              <div>
                <img />
                <h3>Product Name</h3>
                <span>price</span>
              </div>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>

          {/* Cart Items */}
          <div>
            <span>TOTAL</span>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
}
