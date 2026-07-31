import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/sections/banner";
import StickyContactButton from "@/components/stickyContactBtn";
import AOSInit from "@/components/AOSInit";

const inter = Inter({ subsets: ["latin"] });

//  SEO: Global metadata — applies to all pages unless overridden
export const metadata = {
  metadataBase: new URL("https://johnbuilds.site"),
  title: {
    default: "John Oluwafemi | Full-Stack Web Developer",
    template: "%s | John Oluwafemi",
  },
  alternates: {
    canonical: "https://johnbuilds.site",
  },
  description:
    "I'm a full-stack developer building fast, SEO-optimised websites, e-commerce stores, and booking platforms for businesses in Nigeria, Canada, and the UK.",
  keywords: [
    "full-stack web developer",
    "Next.js developer",
    "web developer in Lagos",
    "web developer Nigeria",
    "eCommerce website development",
    "custom web application development",
    "React developer",
    "Next.js e-commerce development",
    "booking platform development",
    "SEO optimisation for websites",
    "freelance web developer Nigeria",
  ],
  authors: [{ name: "John Oluwafemi", url: "https://johnbuilds.site" }],
  creator: "John Oluwafemi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johnbuilds.site",
    siteName: "John Oluwafemi",
    title: "John Oluwafemi | Full-Stack Web Developer",
    description:
      "I build fast, SEO-optimised websites and web apps for businesses across Nigeria, Canada, and the UK.",
    images: [
      {
        url: "/john-oluwafemi.jpeg",
        width: 1200,
        height: 630,
        alt: "John Oluwafemi – Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Oluwafemi | Full-Stack Web Developer",
    description:
      "Fast, conversion-focused websites and web apps, built end-to-end.",
    creator: "@lambacodes",
    images: ["/john-oluwafemi.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ✅ SEO: JSON-LD Structured Data (Person schema)
function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "John Oluwafemi",
    url: "https://johnbuilds.site",
    image: "https://johnbuilds.site/john-oluwafemi.jpeg",
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-stack web developer specialising in React, Next.js, and Node.js.",
    email: "mailto:moyinooluwafemi2004@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/johnmoyinoluwa/",
      "https://github.com/lamba01/",
      "https://twitter.com/lambacodes",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    knowsAbout: [
      "web development",
      "eCommerce websites",
      "booking platforms",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "SEO",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {/* ✅ AOS animations initialised client-side only */}
        <AOSInit />
        <Navbar />
        <StickyContactButton />
        {children}
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
