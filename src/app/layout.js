"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
// import StickyContactButton from "@/components/StickyContactBtn";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const hideNavbarPaths = ["/business", "/clothing-site", "/beauty-booking"];

  return (
    <html lang="en">
      <body>
        {/* <ScrollToTop /> */}

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "John Oluwafemi",
            "url": "https://johncodes.xyz",
            "image": "https://johncodes.xyz/john-oluwafemi.jpeg",
            "sameAs": [
              "https://www.linkedin.com/in/johnmoyinoluwa/",
              "https://github.com/lamba01/"
            ],
            "email": "mailto:moyinooluwafemi2004@gmail.com",
            "jobTitle": "Full-Stack Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "knowsAbout": ["React", "Node.js", "Tailwind CSS", "SEO", "business websites", 
              "landing pages", "web applications", "web design", "UI/UX design", "digital marketing", "NGO websites",
              "SaaS", "eCommerce", "web development", "frontend development", "backend development",
              "full-stack development", "software engineering", "web developer", "developer"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            }
          }
          `
        }} />

        <Navbar />

        {/* Page content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html> 
  );
}