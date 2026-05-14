# AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build
npm run lint    # ESLint
```

No typecheck command in package.json.

## Architecture

- Next.js 16 with App Router (`src/app/`)
- React 19 + TypeScript + Tailwind CSS 4
- State: React Context (`src/app/context/`)
- Key entrypoints: `Header.tsx`, `CartSidebar.tsx`, `AddToCart.tsx`

## Project Structure

```
src/app/
├── category/
├── checkout/
├── components/   # Header, CartSidebar, AddToCart, ProductCard...
├── context/       # CartContext
├── data/          # Products
├── orderConfirmation/
└── productDetail/
```

## Testing

Jest is configured but no test script in package.json. Test files not yet written.

## Notes

- Uses Lucide icons
- No auth configured (future: nextAuth.js)
- Wishlist is a planned feature