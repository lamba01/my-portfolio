// ✅ Server Component — fully SSR'd
import ProjectComponent from "@/components/projectComponent";
import CreativeProjects from "@/sections/creativeProjects";

// ✅ SEO: Projects page metadata
export const metadata = {
  title: "Projects & Case Studies | JohnCodes",
  description:
    "Explore real-world web development projects by JohnCodes — eCommerce apps, booking platforms, SaaS tools, and business websites built with React, Next.js, and Node.js.",
  alternates: {
    canonical: "https://johnbuilds.site/case-studies",
  },
};

export default function Projects() {
  return (
    <main className="py-0">
      <ProjectComponent />
      <CreativeProjects />
    </main>
  );
}
