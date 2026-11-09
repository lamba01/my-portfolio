"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import projectsData from "@/data/projectsData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Mobile card deck: each card sticks near the top of the screen and the next
// one slides over it. STICKY_START sits just below the fixed nav; STICKY_STEP
// lowers each card a little so the edges of the deck stay visible.
const STICKY_START = 80;
const STICKY_STEP = 14;

export default function Projects() {
  const featuredProjects = projectsData.slice(0, 6);
  const root = useRef(null);

  // Mobile only: the card underneath shrinks slightly as the next one arrives.
  // The sticking itself is CSS (sticky md:static on the wrapper below).
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray("[data-stack-card]");
          cards.forEach((card, i) => {
            const next = cards[i + 1];
            if (!next) return;
            gsap.to(card, {
              scale: 0.94,
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top 90%",
                end: `top ${STICKY_START + (i + 1) * STICKY_STEP}px`,
                scrub: true,
              },
            });
          });
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="projects" ref={root} className="py-20 bg-[#0a0a0a] text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Featured Projects
        </h2>
        <p className="text-gray-400">
          Websites and systems built for real business impact
        </p>
      </div>

      {/* Mobile: normal block so the cards can stick. md and up: the grid */}
      <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 px-6 max-w-7xl mx-auto">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            data-stack-card
            style={{ top: STICKY_START + index * STICKY_STEP }}
            className="sticky mb-8 origin-top last:mb-0 md:static md:mb-0"
          >
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="h-full bg-[#111] rounded-2xl overflow-hidden shadow-lg flex flex-col border border-white/5 hover:border-indigo-500/30 transition-colors duration-300"
            >
              {/* Image container — fixed aspect ratio for consistency */}
              <div className="relative w-full aspect-video bg-[#1a1a1a] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-[#111]/60 via-transparent to-transparent" />
              </div>

              {/* Card body */}
              <div className="px-5 py-5 flex flex-col flex-1 gap-3">
                <h3 className="text-white font-semibold text-base leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#1c1c1c] text-gray-400 text-xs rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      View Live Site →
                    </button>
                  </a>
                ) : project.caseStudyLink ? (
                  <Link href={project.caseStudyLink}>
                    <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      View Case Study →
                    </button>
                  </Link>
                ) : null}
              </div>
            </motion.article>
          </div>
        ))}
      </div>
    </section>
  );
}
