import { ProductCard } from '../../components/ProductCard';
import { categories, products } from '../../data/products';

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  const categoryName = categories.find((cat) => cat.slug === category);

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-8 uppercase">
          {categoryName?.name || category}
        </h2>
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          <div>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
