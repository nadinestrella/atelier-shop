'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl tracking-wider mb-12">CHECKOUT</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <fieldset className="grid grid-cols-2 gap-4">
          <legend className="text-lg tracking-wider mb-6">
            CONTACT INFORMATION
          </legend>

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

          {/* ERRORS */}
          {(errors.firstName || errors.lastName || errors.email) && (
            <span className="text-red-500 text-sm">
              {errors.firstName?.message ||
                errors.lastName?.message ||
                errors.email?.message}
            </span>
          )}
        </fieldset>

        <fieldset className="grid grid-cols-2 gap-4">
          <legend className="text-lg tracking-wider mb-6">
            SHIPPING ADDRESS
          </legend>
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
          {/* ERRORS */}
          {(errors.streetAddress ||
            errors.city ||
            errors.state ||
            errors.zipCode ||
            errors.country) && (
            <span className="text-red-500 text-sm">
              {errors.streetAddress?.message ||
                errors.city?.message ||
                errors.state?.message ||
                errors.zipCode?.message ||
                errors.country?.message}
            </span>
          )}
        </fieldset>

        <fieldset className="grid grid-cols-2 gap-4">
          <legend className="text-lg tracking-wider mb-6">
            PAYMENT DETAILS
          </legend>
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

          {/* ERRORS */}
          {(errors.cardNumber || errors.expiryDate || errors.cvv) && (
            <span className="text-red-500 text-sm">
              {errors.cardNumber?.message ||
                errors.expiryDate?.message ||
                errors.cvv?.message}
            </span>
          )}
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
  );
}
