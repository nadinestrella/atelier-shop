import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Header } from './components/Header';

import './globals.css';
import { CartSidebar, WishlistSidebar } from './components';
import Chatbot from './components/Chatbot';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Atelier Shop',
  description: 'Online store for minimalist fashion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <WishlistProvider>
            <Header />
            <CartSidebar />
            <WishlistSidebar />
            {children}
            <Chatbot />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
