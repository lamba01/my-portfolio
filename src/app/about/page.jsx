// ✅ Server Component — fully SSR'd for Google crawlability
import AboutSection from "@/sections/aboutSection";

// ✅ SEO: About page metadata
export const metadata = {
  title: "Freelance Fullstack Web Developer",
  description:
    "Learn more about John Oluwafemi, a fullstack web developer in Edmonton, Canada. I build eCommerce stores, booking platforms and custom websites using React, Next.js & Node.js.",
  alternates: {
    canonical: "https://johncodes.xyz/about",
  },
};

export default function About() {
  return (
    <main className="w-full pt-32 pb-24 px-6 sm:px-12 flex flex-col items-center gap-20 bg-[#0a0a0a] text-gray-200">
            <div
              className="flex flex-col gap-6 w-full text-center"
              data-aos="fade-up"
            >
              <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                Crafting digital experiences{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-500">
                  that drive results
                </span>
              </h1>
      
              <p className="text-base sm:text-lg leading-relaxed text-gray-400">
                With a focus on performance, usability, and business impact, I
                specialise in building web applications that solve real problems.
                Whether it&apos;s a revenue-generating eCommerce store, an automated
                booking system, or a polished brand presence I approach every
                project with the same level of care and technical rigour.
              </p>
      
              <p className="text-base sm:text-lg leading-relaxed text-gray-400">
                Beyond client work, I serve as the lead developer and moderator for
                the{" "}
                <a
                  href="https://njsh.org.ng/index.php/njsh-journal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4 transition-colors"
                >
                  Nigerian Journal of Social Health
                </a>
                , a platform built to streamline academic publishing and peer-review
                workflows at scale.
              </p>
      
              <p className="text-base sm:text-lg leading-relaxed text-gray-400">
                I&apos;m driven by the belief that great software should be invisible
              it should just work, beautifully. If you have a vision, I&apos;d
                love to help build it.
              </p>
      
              {/* CTA */}
              <div className="flex justify-center mt-2">
                <a
                  href="/contact"
                  className="inline-block px-7 py-3 rounded-full bg-linear-to-r from-indigo-500 to-blue-600 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300"
                >
                  Let&apos;s work together →
                </a>
              </div>
            </div>
      
      <AboutSection />
    </main>
  );
}
