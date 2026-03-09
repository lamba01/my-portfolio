"use client";

import { BsTwitterX } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="sm:h-60 flex flex-col sm:flex-row items-center justify-between py-10 sm:py-5 px-6.25 sm:px-15 sm:gap-0 gap-10 text-white"
      style={{
        backgroundImage: "linear-gradient(to top left, #2563eb, #1e3a8a)",
        backgroundColor: "#2563eb",
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-3 sm:gap-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-4xl font-semibold leading-snug">
          Let&apos;s build awesome products!
        </h1>

        <a
          href="mailto:moyinooluwafemi2004@gmail.com"
          className="text-lg sm:text-xl text-gray-200 hover:text-gray-300 transition-all duration-200"
        >
          moyinooluwafemi2004@gmail.com
        </a>
      </div>

      {/* Right Section */}
      <aside className="text-center">
        <div className="flex items-center gap-4 bg-white/10 border border-white/20 px-6 py-4 rounded-3xl backdrop-blur-lg shadow-lg">
          <h2 className="text-lg font-semibold capitalize">follow</h2>

          <div className="flex gap-4 items-center justify-center">
            
            <a
              href="https://twitter.com/lambacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <BsTwitterX size={18} />
            </a>

            <a
              href="https://frontendmentor.io/profile/lamba01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <SiFrontendmentor size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/johnmoyinoluwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://github.com/lamba01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>

          </div>
        </div>
      </aside>
    </footer>
  );
}