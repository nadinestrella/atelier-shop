'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Handbag } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { clearCart, cart, totalItems, totalPrice } = useCart();

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const order = {
      ...data, // Form data
      items: cart, // Cart items
      totalPrice: totalPrice, // Total price
      totalItems: totalItems, // Total items
      date: new Date().toISOString(),
    };

    console.log('order', order);

    console.log('data', data);
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      alert('Order placed successfully! Thank you for your purchase.');
      router.push('/');
    }, 2000);
  };

  if (totalItems === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-6">
        <p className="text-2xl tracking-widest mb-4">Your cart is empty.</p>
        <div className="flex flex-row items-center gap-6">
          <Link
            href="/"
            className="underline hover:opacity-70 transition-opacity"
          >
            Continue shopping
          </Link>

          <Handbag className="size-6" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl tracking-wider mb-12">CHECKOUT</h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pb-8">
            <fieldset className="flex flex-col">
              <legend className="text-lg tracking-wider mb-6">
                CONTACT INFORMATION
              </legend>

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="First Name"
                  type="text"
                  {...register('firstName', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Invalid First Name',
                    },
                  })}
                  className="w-full border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="Last Name"
                  type="text"
                  {...register('lastName', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Invalid Last Name',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="Email"
                  type="email"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* ERRORS */}
              <p className="text-red-500 text-xs mt-1 h-4">
                {errors.firstName?.message ||
                  errors.lastName?.message ||
                  errors.email?.message}
              </p>
            </fieldset>

            <fieldset className="flex flex-col">
              <legend className="text-lg tracking-wider mb-6">
                SHIPPING ADDRESS
              </legend>
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Street Address"
                  type="text"
                  {...register('streetAddress', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Invalid Street Address',
                    },
                  })}
                  className="w-full border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="City"
                  type="text"
                  {...register('city', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Invalid City',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="State"
                  type="text"
                  {...register('state', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Invalid State',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="Zip Code"
                  type="text"
                  {...register('zipCode', {
                    required: true,
                    pattern: {
                      value: /^\d{5}$/,
                      message: 'Invalid Zip Code',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="Country"
                  type="text"
                  {...register('country', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Invalid Country',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              {/* ERRORS */}

              <p className="text-red-500 text-xs mt-1 h-4">
                {errors.streetAddress?.message ||
                  errors.city?.message ||
                  errors.state?.message ||
                  errors.zipCode?.message ||
                  errors.country?.message}
              </p>
            </fieldset>

            <fieldset className="flex flex-col">
              <legend className="text-lg tracking-wider mb-6">
                PAYMENT DETAILS
              </legend>
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Card Number"
                  type="number"
                  {...register('cardNumber', {
                    required: true,
                    pattern: {
                      value: /^\d{16}$/,
                      message: 'Invalid Card Number',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="MM/YY"
                  type="text"
                  {...register('expiryDate', {
                    required: true,
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: 'Invalid Expiry Date',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="CVV"
                  type="number"
                  {...register('cvv', {
                    required: true,
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: 'Invalid CVV',
                    },
                  })}
                  className="border border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* ERRORS */}

              <p className="text-red-500 text-xs mt-1 h-4">
                {errors.cardNumber?.message ||
                  errors.expiryDate?.message ||
                  errors.cvv?.message}
              </p>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 tracking-wider text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'PROCESSING...' : 'PLACE ORDER'}
            </button>
          </form>
        </div>

        {/* ORDER SUMMARY*/}
        <div>
          <div className="border border-black p-8 sticky top-24">
            <h2 className="text-lg tracking-wider mb-6">ORDER SUMMARY</h2>

            {cart.map((item) => (
              <div key={`${item.product.id}-${item.size}`}>
                <div className="flex flex-row gap-3 space-y-4 mb-6">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={100}
                    height={150}
                    className="object-cover"
                  />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm tracking-wider mb-1 font-bold">
                      {item.product.name}
                    </h3>
                    <p>Size: {item.size}</p>
                    <span className="text-xs mb-2 text-gray-600">
                      Quantity: {item.quantity}
                    </span>
                    <span className="text-sm mb-2 font-bold">
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="border-t border-black pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span> Subtotal</span>
                <span>{totalPrice.toFixed(2)} </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="tracking-wider">Total</span>
                <span>{totalPrice.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
