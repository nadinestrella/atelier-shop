import { products } from '@/app/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            className="size-full object-cover"
            width={300}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-3xl tracking-widest">{product.name}</h2>
          <p className="text-xl">${product.price.toFixed(2)}</p>
          <button className="bg-black text-white py-4 px-8 tracking-widest text-sm hover:bg-gray-800 transition-colors">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
