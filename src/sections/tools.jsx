import Image from "next/image";
import reactlogo from "../../public/images/react.png";
import javascript from "../../public/images/js.png";
import nextjs from "../../public/images/next.png";
import figma from "../../public/images/figma.png";
import redux from "../../public/images/redux.png";
import node from "../../public/images/node.png";
import tailwind from "../../public/images/tailwindcss-mark.svg";
import express from "../../public/images/Express.png";
import mysql from "../../public/images/MySQL.png";
import wordpress from "../../public/images/wordpress.png";

const tools = [
  { src: reactlogo, alt: "React logo", label: "React" },
  { src: javascript, alt: "JavaScript logo", label: "JavaScript" },
  { src: nextjs, alt: "Next.js logo", label: "Next.js" },
  { src: figma, alt: "Figma logo", label: "Figma" },
  { src: redux, alt: "Redux logo", label: "Redux" },
  { src: node, alt: "Node.js logo", label: "Node.js" },
  { src: tailwind, alt: "Tailwind CSS logo", label: "Tailwind CSS" },
  { src: express, alt: "Express.js logo", label: "Express.js" },
  { src: mysql, alt: "MySQL logo", label: "MySQL" },
  { src: wordpress, alt: "WordPress logo", label: "WordPress" },
];

export default function Tools() {
  return (
    <section
      className="py-12.5 px-7.5 sm:px-12.5 w-full text-start text-white"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #1e3a8a, #0a0a0a)",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* ✅ SEO: keyword-rich heading */}
      <h2 className="text-3xl font-semibold mb-8" data-aos="fade-up">
        My Tools &amp; Libraries 🔧
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10 sm:py-16 py-10">
        {tools.map((tool, i) => (
          <div
            key={tool.label}
            className="flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay={`${(i + 1) * 100}`}
          >
            <Image
              src={tool.src}
              alt={tool.alt}
              width={40}
              height={40}
              className="w-10 h-auto"
            />
            <p className="font-bold text-sm md:text-lg capitalize">
              {tool.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
