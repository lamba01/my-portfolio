"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-10 bg-[#0e0e0e] text-white overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-linear-to-b from-[#111] via-[#0e0e0e] to-black opacity-80"
      />

      {/* ✅ SEO: h1 contains primary keyword — visible to Google via SSR */}
      <motion.div style={{ y, opacity }} className="relative z-10">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Shaping Ideas{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500"
          >
            into Websites
          </motion.span>
          <br />
          that{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
            className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-red-500 capitalize"
          >
            attract customers
          </motion.span>
        </h1>

        {/* ✅ SEO: Meta-rich description in the hero for crawlers */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
        >
          I help businesses build websites that generate revenue fast, SEO-optimised,
          and built to convert.The kind that load
          fast, look great on any device, and turn visitors into paying
          customers. No jargon, no fluff. Just results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* ✅ Anchor link scrolls to projects section */}
          <a
            href="#projects"
            className="px-6 py-3 w-full sm:w-fit rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 w-full sm:w-fit rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
