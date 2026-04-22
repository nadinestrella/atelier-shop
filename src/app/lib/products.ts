import { Category, Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Blazer',
    slug: 'Minimalist-Blazer',
    price: 129.99,
    image:
      'https://images.unsplash.com/photo-1611747581894-45e5f11c7be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc3MTQyNzE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'women',
    description: 'Tailored blazer in premium fabric with a modern cut',
  },
  {
    id: '2',
    name: 'Essential Turtleneck',
    slug: 'Essential-Turtleneck',
    price: 49.99,
    image:
      'https://images.unsplash.com/photo-1653875842174-429c1b467548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc3MTQyNzE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'women',
    description: 'Classic turtleneck in soft cotton blend',
  },
  {
    id: '3',
    name: 'Pleated Midi Skirt',
    slug: 'Pleated-Midi-Skirt',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1629990994849-4ac434b2a758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2xvdGhpbmclMjBtaW5pbWFsfGVufDF8fHx8MTc3MTM3ODEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'women',
    description: 'Elegant pleated skirt with timeless silhouette',
  },
  {
    id: '4',
    name: 'Oversized Wool Coat',
    slug: 'Oversized-Wool-Coat',
    price: 199.99,
    image:
      'https://images.unsplash.com/photo-1617032869698-583c00770254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwamFja2V0JTIwbWluaW1hbHxlbnwxfHx8fDE3NzEzOTY1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'men',
    description: 'Structured wool coat with contemporary fit',
  },
  {
    id: '5',
    name: 'Silk Evening Dress',
    slug: 'Silk-Evening-Dress',
    price: 159.99,
    image:
      'https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzEzOTk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'women',
    description: 'Flowing silk dress perfect for special occasions',
  },
  {
    id: '6',
    name: 'Leather Accessories Set',
    slug: 'Leather-Accessories-Set',
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTQwNTgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'accessories',
    description: 'Premium leather accessories with minimalist design',
  },
  {
    id: '7',
    name: 'Tailored Trousers',
    slug: 'Tailored-Trousers',
    price: 69.99,
    image:
      'https://images.unsplash.com/photo-1611747581894-45e5f11c7be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc3MTQyNzE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'women',
    description: 'Classic tailored trousers in wrinkle-free fabric',
  },
  {
    id: '8',
    name: 'Cashmere Sweater',
    slug: 'Cashmere-Sweater',
    price: 139.99,
    image:
      'https://images.unsplash.com/photo-1653875842174-429c1b467548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc3MTQyNzE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'men',
    description: 'Luxurious cashmere sweater in timeless style',
  },
];

export const categories: Category[] = [
  { id: 'all', name: 'All Products', slug: '' },
  { id: 'women', name: 'Women', slug: 'women' },
  { id: 'men', name: 'Men', slug: 'men' },
  { id: 'accessories', name: 'Accessories', slug: 'accessories' },
];
