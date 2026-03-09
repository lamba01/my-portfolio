import { FiExternalLink } from "react-icons/fi";
import { title } from "framer-motion/client";
import logo from "@/assets/logo.png";

const projectsData = [
  {
    id: 1,
    title: "Centre for Population and Health Research Website",
    image: "/images/cepher-logo.jpeg",
    logo: "/images/cepher-logo.jpeg",
    // title: "Centre for Population and Health Research Website",
    description: `Modern nonprofit website to increase credibility and public awareness.`,
    technologies: ["React", "Tailwind CSS", "CMS", "Contentful", "Vite"],
    caseStudyLink: "/case-studies/cepher",
  },
  {
    id: 2,
    image: "/images/mcken.png",
    title: "Mcken Beauty Booking Platform",
    logo: "/images/mcken.png",
    description: `Automated booking system with calendar scheduling to eliminate call overload and prevent appointment conflicts.`,
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Nodejs",
      "Express",
      "Firebase Auth",
    ],
    caseStudyLink: "/case-studies/mcken-booking",
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
  },
  {
    id: 4,
    title: "SB Lofa Driving School",
    image: "/images/sblofa-logo.webp", // thumbnail / hero image
    logo: "/images/glamheader-logo.png", // optional small brand logo (can remove if not needed)
    description:
      "Increased visibility & student bookings through Local SEO and Google Business optimization.",
    technologies: [
      "Local Citation",
      "Google Analytics",
      "Keyword Research",
      "Google Business Profile",
      "Search Console",
    ],
    caseStudyLink: "/case-studies/sb-lofa", // internal route
  },
];

export default projectsData;
