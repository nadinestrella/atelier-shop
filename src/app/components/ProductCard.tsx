import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/productDetail/${product.slug}`}>
      <div className="aspect-3/4 overflow-hidden bg-gray-100 mb-3">
        <Image
          src={product.image}
          alt={product.name}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
          width={300}
          height={400}
        />
      </div>
      <h3 className="text-sm tracking-wide mb-1">{product.name}</h3>
      <p className="text-sm font-bold">{product.price.toFixed(2)} €</p>
    </Link>
  );
}
