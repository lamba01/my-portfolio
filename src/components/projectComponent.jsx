"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projectsData";

export default function Projects() {
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Featured Projects
        </h2>
        <p className="text-gray-400">
          Websites and systems built for real business impact
        </p>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg flex flex-col border border-white/5 hover:border-indigo-500/30 transition-colors duration-300"
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
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
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
        ))}
      </div>
    </section>
  );
}
