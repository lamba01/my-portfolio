// ✅ Server Component — fully SSR'd for Google crawlability
import AboutSection from "@/sections/aboutSection";

// ✅ SEO: About page metadata
export const metadata = {
  title: "About John – Freelance Fullstack Web Developer in Lagos",
  description:
    "Learn more about John Oluwafemi, a fullstack web developer in Lagos, Nigeria. I build eCommerce stores, booking platforms and custom websites using React, Next.js & Node.js.",
  alternates: {
    canonical: "https://johncodes.xyz/about",
  },
};

export default function About() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
