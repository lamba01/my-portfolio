import Hero from "@/sections/hero";
import Stats from "@/sections/stats";
import Projects from "@/components/projectComponent";
import Experience from "@/sections/workExperience";
// import Tools from "@/sections/tools";
import About from "@/sections/aboutSection";

export const metadata = {
  title: "John Oluwafemi | Full-Stack Developer & E-Commerce Expert",
  description:
    "Hire John Oluwafemi, expert full-stack web developer and e-commerce specialist. Custom web design, booking platforms, and SEO services for your business.",
  alternates: {
    canonical: "https://johnbuilds.site/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <About />
      {/* <Tools /> */}
    </main>
  );
}
