import { products } from '@/app/lib/products';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return new Response('Product not found', { status: 404 });
  }

  return Response.json(product);
}
