import { FiExternalLink } from "react-icons/fi";
import { title } from "framer-motion/client";
import logo from "@/../public/images/logo.png";

const projectsData = [
  {
    id: 1,
    title: "Centre for Population and Health Research Website",
    image: "/images/project1.png",
    logo: "/images/cepher-logo.jpeg",
    // title: "Centre for Population and Health Research Website",
    description: `Modern nonprofit website to increase credibility and public awareness.`,
    technologies: ["React", "Tailwind CSS", "CMS", "Contentful", "Vite"],
    caseStudyLink: "/case-studies/cepher",
    liveLink: null,
  },
  {
    id: 2,
    title: "UNDR. — Intimate Apparel E-commerce Store",
    image: "/images/undr-logo.png",
    logo: "/images/undr-logo.png",
    description:
      "Built a full-stack e-commerce platform for a Lagos-based intimate apparel boutique, with custom CMS-managed catalog, secure payments, and order automation.",
    technologies: [
      "Next.js",
      "Payload CMS",
      "Neon PostgreSQL",
      "Cloudinary",
      "Paystack",
      "Resend",
    ],
    caseStudyLink: "/case-studies/undr",
    liveLink: null,
  },
  {
    id: 3,
    title: "Nigerian Journal of Social Health",
    image: "/images/project2.png",
    logo: "/images/commerce-logo.png",
    // title: "Nigerian Journal of Social Health",
    description: `Built a complete online journal system with submission workflow, peer review, and DOI integration.`,
    technologies: ["OJS", "PHP", "JavaScript", "CPanel"],
    caseStudyLink: "/case-studies/njsh",
    liveLink: null,
  },
  {
    id: 4,
    title: "SB Lofa Driving School",
    image: "/images/sblofa-logo.webp",
    logo: "/images/sblofa-logo.webp",
    description:
      "Increased visibility & student bookings through Local SEO and Google Business optimization.",
    technologies: [
      "Local Citation",
      "Google Analytics",
      "Keyword Research",
      "Google Business Profile",
      "Search Console",
    ],
    caseStudyLink: "/case-studies/sb-lofa",
    liveLink: null,
  },
  {
    id: 5,
    title: "Healing Path Psychotherapy Services",
    image: "/images/hpps.jpg",
    logo: "/images/hpps.jpg",
    description:
      "Designed and built a full booking and portfolio website for a Toronto-based registered psychotherapist, creating a warm, conversion-focused online presence to attract and onboard virtual therapy clients across Ontario.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Booking Integration",
      "SEO",
      "Responsive Design",
    ],
    caseStudyLink: "/case-studies/hpps",
    liveLink: null,
  },
  {
    id: 6,
    title: "Shore Residence Limited — Real Estate Portfolio",
    image: "/images/shore-logo.png",
    logo: "/images/shore-logo.png",
    description:
      "Designed and built a dark luxury portfolio website for a UK-based real estate company, showcasing completed properties with a refined, high-end aesthetic.",
    technologies: [
      "Next.js",
      "React 19",
      "Tailwind CSS v4",
      "Cloudinary",
      "Responsive Design",
    ],
    caseStudyLink: "/case-studies/shore-residence",
    liveLink: null,
  },
];

export default projectsData;
