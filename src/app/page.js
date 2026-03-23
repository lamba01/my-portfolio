import Hero from "@/sections/hero";
import Stats from "@/sections/stats";
import Projects from "@/components/projectComponent";
import Experience from "@/sections/workExperience";
import Tools from "@/sections/tools";
import About from "@/sections/aboutSection";

// export const metadata = {
//   title: "Web Developer in Edmonton, Canada",
//   description:
//     "I help startups and businesses build responsive websites, eCommerce stores, and booking platforms that convert.",
//   alternates: {
//     canonical: "https://johncodes.xyz",
//   },
// };
export const metadata = {
  title: "Web Design Agency Edmonton | Websites That Convert | JohnCodes",
  description:
    "JohnCodes is a web and app design agency serving businesses in Edmonton and beyond. We build fast, conversion-focused websites, eCommerce stores, and booking platforms.",
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
