"use client";

export default function Banner() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 sm:px-6 flex flex-col sm:flex-row gap-5 items-center justify-between text-center">
      <div className="max-w-3xl flex items-start flex-col">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Looking to create a website?
        </h1>
        <p className="text-gray-300 text-sm sm:text-xl">
          Let&apos;s discuss your project and see how we can help you achieve your goals.
        </p>
      </div>
      <a
        href="/contact"
        className="bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 uppercase tracking-wider"
      >
        Get Started Now!
      </a>
    </section>
  );
}