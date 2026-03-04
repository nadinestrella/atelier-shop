'use client';
import Link from 'next/link';
import { categories } from '../data/products';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="border-b border-black sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="tracking-widest text-xl hover:opacity-70 transition-opacity"
          >
            ATELIER
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.slug ? `/category/${category.slug}` : '/'}
                className="text-sm tracking-wider uppercase hover:opacity-70 transition-opacity"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              // onClick={() => setIsCartOpen(true)}
              className="relative hover:opacity-70 transition-opacity"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="size-5" />
              {/* {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full size-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )} */}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:opacity-70 transition-opacity"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-black">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.slug ? `/category/${category.slug}` : '/'}
                className="block py-3 text-sm tracking-wider uppercase hover:opacity-70 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
