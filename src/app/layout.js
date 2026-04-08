import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/sections/banner";
import StickyContactButton from "@/components/stickyContactBtn";
import AOSInit from "@/components/AOSInit";

const inter = Inter({ subsets: ["latin"] });

// // ✅ SEO: Global metadata — applies to all pages unless overridden
// export const metadata = {
//   metadataBase: new URL("https://johnbuilds.site"),
//   title: {
//     default: "Fullstack Web Developer",
//     template: "%s | John Oluwafemi",
//   },
//   description:
//     "John Oluwafemi is a fullstack web developer with work based in Edmonton, Canada. I build fast, SEO-optimised websites, eCommerce stores, and booking platforms for businesses.",
//   keywords: [
//     "fullstack web developer",
//     "web developer canada",
//     "React developer",
//     "Next.js developer",
//     "hire web developer in canada",
//     "eCommerce website developer",
//     "booking website developer toronto",
//   ],
//   authors: [{ name: "John Oluwafemi", url: "https://johnbuilds.site" }],
//   creator: "John Oluwafemi",
//   openGraph: {
//     type: "website",
//     locale: "en_NG",
//     url: "https://johnbuilds.site",
//     siteName: "John Codes",
//     title: "Fullstack Web Developer in Edmonton, Canada",
//     description:
//       "I build fast, SEO-optimised websites and web apps for businesses in Canada and beyond.",
//     images: [
//       {
//         url: "/john-oluwafemi.jpeg",
//         width: 1200,
//         height: 630,
//         alt: "John Oluwafemi – Fullstack Web Developer",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "John Oluwafemi | Fullstack Web Developer",
//     description:
//       "Building fast, scalable websites and web apps for businesses.",
//     creator: "@lambacodes",
//     images: ["/john-oluwafemi.jpeg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://johnbuilds.site",
//   },
// };

// // ✅ SEO: JSON-LD Structured Data (Person schema)
// function StructuredData() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "Person",
//     name: "John Oluwafemi",
//     url: "https://johnbuilds.site",
//     image: "https://johnbuilds.site/john-oluwafemi.jpeg",
//     jobTitle: "Fullstack Web Developer",
//     description:
//       "Fullstack web developer specialising in React, Next.js, and Node.js.",
//     email: "mailto:moyinooluwafemi2004@gmail.com",
//     sameAs: [
//       "https://www.linkedin.com/in/johnmoyinoluwa/",
//       "https://github.com/lamba01/",
//       "https://twitter.com/lambacodes",
//     ],
//     worksFor: {
//       "@type": "Organization",
//       name: "Freelance",
//     },
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: "Lagos",
//       addressCountry: "NG",
//     },
//     knowsAbout: [
//       "React",
//       "Next.js",
//       "Node.js",
//       "Tailwind CSS",
//       "SEO",
//       "eCommerce websites",
//       "booking platforms",
//       "web development Lagos",
//       "fullstack development",
//     ],
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//     />
//   );
// }

// ✅ SEO: Global metadata — applies to all pages unless overridden
export const metadata = {
  metadataBase: new URL("https://johnbuilds.site"),
  title: {
    default: "E-commerce Website Development &amp; Web Design Services | JohnCodes Studio",
    template: "%s | JohnCodes",
  },
  description:
    "JohnCodes is a web design and development agency. We build fast, SEO-optimised websites, eCommerce stores, and booking platforms for businesses.",
  keywords: [
    "web design agency Edmonton",
    "web design company Edmonton",
    "web development agency Edmonton",
    "free website",
    "cheap website design Edmonton",
    "free website development Edmonton",
    "best web design agency Edmonton",
    "top web design company Edmonton",
    "website design Edmonton",
    "eCommerce web design Canada",
    "Next.js web design agency",
    "booking platform development",
    "small business website design Canada",
    "website redesign Edmonton",
    "website developer",
    "web developer in Lagos",
    "best web developer in Lagos",
    "top web developer in Lagos",
    "best developer in Nigeria",
    "cheap developer in Nigeria",
  ],
  authors: [{ name: "JohnCodes", url: "https://johnbuilds.site" }],
  creator: "JohnCodes",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://johnbuilds.site",
    siteName: "JohnCodes",
    title: "Web Design Agency in Edmonton, Canada | JohnCodes",
    description:
      "We build fast, SEO-optimised websites and web apps for businesses in Edmonton and beyond.",
    images: [
      {
        url: "/john-oluwafemi.jpeg",
        width: 1200,
        height: 630,
        alt: "JohnCodes – Web Design Agency in Edmonton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnCodes | Web Design Agency Edmonton",
    description:
      "Fast, conversion-focused websites and web apps for businesses.",
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
  alternates: {
    canonical: "https://johnbuilds.site",
  },
};

// ✅ SEO: JSON-LD Structured Data (LocalBusiness schema)
function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JohnCodes",
    url: "https://johnbuilds.site",
    image: "https://johnbuilds.site/john-oluwafemi.jpeg",
    description:
      "Web design agency in Edmonton specialising in React, Next.js, and Node.js.",
    email: "mailto:moyinooluwafemi2004@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/johnmoyinoluwa/",
      "https://github.com/lamba01/",
      "https://twitter.com/lambacodes",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    founder: {
      "@type": "Person",
      name: "John Oluwafemi",
      jobTitle: "Founder & Lead Developer",
      sameAs: "https://www.linkedin.com/in/johnmoyinoluwa/",
    },
    knowsAbout: [
      "web design",
      "eCommerce websites",
      "booking platforms",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "SEO",
      "web design Edmonton",
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
