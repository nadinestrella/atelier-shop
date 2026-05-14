---
name: ecommerce-best-practices
description: E-commerce development best practices for Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript
license: MIT
compatibility: opencode
---

## Product Data Modeling

### Types Recomendadas

```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  variants?: Variant[];
  inventory: number;
  sku?: string;
}

interface Variant {
  id: string;
  name: string; // e.g., "Size", "Color"
  options: { value: string; inventory: number }[];
}

interface CartItem {
  product: Product;
  variant?: string;
  quantity: number;
}
```

### Reglas

- Siempre usar `number` para precios (guardar en centavos si se usa Stripe)
- `compareAtPrice` para mostrar descuentos
- `inventory` >= 0 para trackear stock
- Usar `slug` para URLs amigables

---

## Cart Management

### React Context Pattern

```typescript
interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, variant?: string, quantity?: number) => void;
  removeItem: (productId: string, variant?: string) => void;
  updateQuantity: (productId: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}
```

### Best Practices

- Persistir en localStorage: `useEffect` para guardar/cargar
- Validar stock antes de añadir
- Mostrar feedback visual al añadir (badge animado)
- Gestionar empty state

---

## UI Components

### ProductCard

- Imagen con `next/image` y aspect-ratio
- Título con link a productDetail
- Precio formateado con locale
- Badge de descuento si `compareAtPrice` existe
- Quick add button o AddToCart inline

### ProductDetail

- Image gallery con thumbnails
- Variant selector (dropdown o buttons)
- Quantity selector
- Add to cart con loading state
- Breadcrumb navigation

### CartSidebar

- Slide-in desde derecha (fixed, z-50)
- Item list con imagen, nombre, variant, quantity, price
- Quantity controls (+/- buttons)
- Remove button
- Subtotal y total
- Checkout button

### Header

- Sticky position
- Cart icon con badge de items (rojo)
- Mobile hamburger menu
- Logo linking a home

---

## Checkout Flow

### Campo Order

1. Email (required)
2. Shipping address
3. Shipping method
4. Payment (último)

### Validation

- Usar `react-hook-form` con Zod para validación
- Validación server-side de precios (nunca confiar en cliente)
- Mostrar errores inline

---

## Performance

### next/image

```tsx
<Image
  src={src}
  alt={alt}
  width={800}
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
  blurDataURL={blurHash}
/>
```

### Loading States

- Skeleton loaders para product lists
- Suspense con fallback para SSR
- Optimistic UI para add to cart

### SSR/SSG

- SSG para product pages estáticos
- ISR para catalogs grandes (`revalidate: 60`)
- SSR para pricing dinámico

---

## Accessibility

### ARIA Labels

```tsx
<button aria-label="Add to cart">
  <ShoppingBag />
</button>

<button aria-label="Remove item from cart">
  <Trash2 />
</button>
```

### Keyboard Navigation

- Tab order logical
- Enter/Space para botones
- Escape para cerrar modals/sidebars

### Focus Management

- Trap focus en modals
- Return focus al cerrar
- Visible focus indicators

---

## SEO

### Meta Tags

```tsx
<Head>
  <title>{product.name} | Store</title>
  <meta name="description" content={product.description} />
  <meta property="og:title" content={product.name} />
  <meta property="og:image" content={product.images[0]} />
  <meta property="og:price:amount" content={product.price} />
  <meta property="og:price:currency" content="USD" />
</Head>
```

### JSON-LD

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: product.images,
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      }
    })
  }}
/>
```

---

## Security

### Validación Server-Side

- Siempre recalcular precios en server
- No confiar en precios enviados por cliente
- Validar inventory antes de procesar orden

### Datos Sensibles

- No guardar payment info en localStorage
- Usar tokens para sesión
- HTTPS en producción

---

## Testing

### Unit Tests

- CartContext: add, remove, update, clear
- Price calculations
- Form validation

### Integration Tests

- Add to cart flow
- Checkout complete
- Inventory updates

---

## Wishlist (Planificado)

- Guardar en localStorage o user account
- Migrar a database cuando auth esté implementado
- Sincronizar entre dispositivos si logged in