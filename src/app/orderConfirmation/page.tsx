import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl tracking-widest mb-4">THANK YOU</h1>
        <p className="text-sm text-gray-600 tracking-wider mb-8">
          Your order has been placed successfully. You will receive a
          confirmation email shortly.
        </p>

        <Link
          href="/"
          className="bg-black text-white py-4 px-8 tracking-widest text-sm hover:bg-gray-800 transition-colors"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}
