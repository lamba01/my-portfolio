"use client";
// ✅ Client component — uses useRouter for redirect behaviour
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Thank you! 🎉
      </h1>
      <p className="text-gray-400 text-lg max-w-md mb-8">
        Your message has been received. I&apos;ll get back to you within 24 hours.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-xl transition-shadow"
      >
        Back to Home
      </Link>
    </main>
  );
}
