"use client";

import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import projectsData from "@/data/projectsData";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Featured Projects
        </h2>
        <p className="text-gray-400">
          Websites and systems built for real business impact
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 px-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg max-w-sm md:max-w-md flex flex-col"
          >
            <div className="relative group">
              {/* <Link
                href={project.caseStudyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              > */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              {/* </Link> */}
            </div>

            <div className="px-2 py-4 flex flex-col justify-between flex-1">
              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                {project.description}
              </p>

                <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white hover:shadow-xl transition-shadow w-fit px-5 py-3 mb-3 rounded-2xl cursor-pointer capitalize">
                  View case study
                </button>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1c1c1c] text-gray-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}