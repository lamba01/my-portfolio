"use client";

export default function StickyContactButton() {
  return (
    <div className="fixed bottom-6 right-4 sm:right-2.5 z-50 block sm:hidden">
      <a
        href="/contact"
        className="bg-white text-black px-6 py-3 rounded-full shadow-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
      >
        📞 Contact Me
      </a>
    </div>
  );
}
