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
    desc: "We provide complete, end-to-end web application development. Using modern technologies like React, Next.js, and Node.js, we manage every aspect from the database architecture to final deployment, ensuring a robust and scalable solution.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Website Development",
    desc: "Our expert team specialises in e-commerce website development, building custom online stores designed for maximum conversion. We implement seamless checkout processes and efficient inventory management systems to create a superior shopping experience for your clientele.",
  },
  {
    icon: CalendarCheck,
    title: "Custom Booking Platforms",
    desc: "We develop automated scheduling systems that streamline client management. These platforms eliminate the need for manual bookings and reduce client no-shows, increasing operational efficiency.",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    desc: "Our services include advanced technical SEO, structured data implementation, and Google Business Profile optimisation. We employ proven strategies to drive organic traffic and elevate your search engine rankings, making your business more visible to potential customers.",
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
    <section className="w-full pt-14 pb-2 px-6 sm:px-12 flex flex-col items-center gap-20 bg-[#0a0a0a] text-gray-200">

      {/* Bio */}
      {/* Capabilities Grid */}
      <div className="w-full max-w-7xl">
          
                <h2           className="text-3xl md:text-5xl font-bold mb-3 text-center"
          data-aos="fade-up">Our Comprehensive Web Design and Development Services</h2>
              
        <p className="text-gray-400 text-sm max-w-3xl m-auto text-center pb-10">As a leading web design agency in Nigeria, we offer a comprehensive suite of services to 
          build a powerful and effective online presence for your business. We are committed to 
          technical excellence and measurable success.</p>
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

