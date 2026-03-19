export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: Size;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: Size) => void;
  removeFromCart: (productId: string, size: Size) => void;
  updateQuantity: (productId: string, quantity: number, size: Size) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  totalPrice: number;
}
