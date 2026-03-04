import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      {/* TODO: LINK TO PRODUCT PAGE ID */}
      <div className="aspect-3/4 overflow-hidden bg-gray-100 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-sm tracking-wide mb-1">{product.name}</h3>
      <p className="text-sm">${product.price.toFixed(2)}</p>
    </div>
  );
}
