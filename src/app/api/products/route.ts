import { products } from '@/app/lib/products';
import { Product } from '@/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let result: Product[] = products;

  if (category) {
    result = products.filter((products) => products.category === category);
  }

  return Response.json(result);
}
