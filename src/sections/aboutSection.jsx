"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ShoppingCart,
  CalendarCheck,
  Search,
  Layers,
  Globe,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Fullstack Development",
    desc: "End-to-end web applications built with React, Next.js, Node.js, and Tailwind CSS — from database to deployment.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    desc: "Custom online stores designed to convert browsers into buyers, with seamless checkout and inventory management.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Platforms",
    desc: "Automated scheduling systems that eliminate manual bookings, reduce no-shows, and streamline client management.",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    desc: "Technical SEO, structured data, and Google Business optimisation to drive organic traffic and improve rankings.",
  },
  {
    icon: Layers,
    title: "CMS Integration",
    desc: "Headless CMS setups with Contentful and custom platforms so clients can manage content without touching code.",
  },
  {
    icon: Globe,
    title: "Web Presence Strategy",
    desc: "From domain to deployment — helping businesses establish a credible, high-performing presence on the web.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section className="w-full pt-14 pb-24 px-6 sm:px-12 flex flex-col items-center gap-20 bg-[#0a0a0a] text-gray-200">

      {/* Bio */}
      {/* Capabilities Grid */}
      <div className="w-full max-w-5xl">
        <h4
          className="text-3xl md:text-5xl font-bold mb-3 text-center pb-10"
          data-aos="fade-up"
        >
          What I do
        </h4>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-500/40 hover:bg-[#141414] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                <Icon size={20} className="text-indigo-400" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-indigo-500/5 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

