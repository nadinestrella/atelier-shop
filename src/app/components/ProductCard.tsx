'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product } from '@/types';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link href={`/productDetail/${product.slug}`}>
      <div className="aspect-3/4 overflow-hidden bg-gray-100 mb-3 relative group">
        <Image
          src={product.image}
          alt={product.name}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
          width={300}
          height={400}
        />
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white transition-colors"
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className="size-5"
            fill={inWishlist ? '#f43f5e' : 'none'}
            color={inWishlist ? '#f43f5e' : '#000'}
          />
        </button>
      </div>
      <h3 className="text-sm tracking-wide mb-1">{product.name}</h3>
      <p className="text-sm font-bold">{product.price.toFixed(2)} €</p>
    </Link>
  );
}