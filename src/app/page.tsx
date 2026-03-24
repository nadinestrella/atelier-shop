import Chatbot from './components/Chatbot';
import { ProductCard } from './components/ProductCard';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Chatbot />
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl tracking-widest mb-4">
            NEW COLLECTION
          </h1>
          <p className="text-sm md:text-base tracking-wider opacity-80">
            MINIMALIST ELEGANCE
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl tracking-widest mb-8">ALL PRODUCTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
