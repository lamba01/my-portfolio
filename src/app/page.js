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
  title: "Website Development Company & E-commerce Website Development | JohnCodes",
  description:
    "JohnCodes Studio is the expert website development company for your business. As a leading web design agency, we deliver custom e-commerce website development solutions."
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
