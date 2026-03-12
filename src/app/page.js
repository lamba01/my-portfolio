import Hero from "@/sections/hero";
import Stats from "@/sections/stats";
import Projects from "@/components/projectComponent";
import Experience from "@/sections/workExperience";
import Tools from "@/sections/tools";
import About from "@/sections/aboutSection";

// ✅ SEO: Page-level metadata (overrides layout defaults for this page)
export const metadata = {
  title: "Web Developer in Edmonton, Canada",
  description:
    "I help startups and businesses build responsive websites, eCommerce stores, and booking platforms that convert.",
  alternates: {
    canonical: "https://johncodes.xyz",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Tools />
    </main>
  );
}
