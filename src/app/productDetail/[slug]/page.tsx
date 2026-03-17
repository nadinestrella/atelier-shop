import Image from 'next/image';
import { AddToCartButton } from '@/app/components';
import { products } from '@/app/data/products';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl traking-widest mb-4">Product not found</h2>
          <Link href="/">Return to shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            className="size-full object-cover"
            width={300}
            height={400}
          />
        </div>
        {/* Product Info */}
        <div>
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-3xl tracking-widest">{product.name}</h2>
            <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
          </div>
          {/* Add to Cart Button */}
          <AddToCartButton product={product} />
          {/* Product Details */}
          <div className="border-t border-black pt-8 mt-8">
            <details className="mb-4">
              <summary className="cursor-pointer text-sm tracking-wider py-2">
                DESCRIPTION
              </summary>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                {product.description}
              </p>
            </details>
            <details className="mb-4">
              <summary className="cursor-pointer text-sm tracking-wider py-2">
                SHIPPING & RETURNS
              </summary>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                Free shipping on orders over $100. Easy returns within 30 days.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
