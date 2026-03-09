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
    caseStudyLink: "/case-studies/sb-lofa", 
    liveLink: null,   
  
  },
  {
  id: 5,
  title: "Rwatos LTD Web Design",
  image: "/images/rwatos2.png",
  logo: "/images/rwatoslogo.png",
  description:
    "Designed and built a high-converting landing page for a UK-based trades business, focused on capturing local leads and turning website visits into booked enquiries.",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Conversion Optimisation",
    "Local SEO",
    "Google Analytics",
  ],
  liveLink: "https://rwatosltd.com",   // 👈 external live site
  caseStudyLink: null,   
},
{
  id: 6,
  title: "UK Service Business Landing Page",
  image: "/images/claxxafter.png",
  logo: "/images/claxx-logo.png",
  description:
    "Built a focused landing page for a UK service provider, combining clear messaging and strong calls-to-action to drive customer enquiries from local search traffic.",
  technologies: [
    "React",
    "Tailwind CSS",
    "Lead Generation",
    "Local SEO",
    "Responsive Design",
  ],
  liveLink: "https://claxxltd.co.uk/",   // 👈 external live site
  caseStudyLink: null,   
},
];

export default projectsData;
