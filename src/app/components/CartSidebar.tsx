import { X } from 'lucide-react';

export function CartSidebar() {
  return (
    <>
      {/* Background Overlay*/}

      <div className="fixed inset-0 bg-black/50 z-50">
        <div>
          {/* Header */}
          <div>
            <h2> SHOPPING BAG</h2>
            <button>
              <X className="size-6" />
            </button>
          </div>

          {/* Cart Items */}

          <div>
            <p>Your cart is empty</p>
          </div>
        </div>
      </div>
    </>
  );
}
