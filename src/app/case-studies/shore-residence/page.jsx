import Head from "next/head";
import Link from "next/link";

export default function ShoreResidenceCaseStudy() {
  const tools = [
    "Next.js",
    "React 19",
    "Tailwind CSS v4",
    "Cloudinary",
    "Responsive Design",
  ];

  const solutionRows = [
    {
      action:
        "Designed a dark, luxury visual identity using a gold and near-black palette",
      why: "Premium real estate buyers expect a visual experience that signals exclusivity from the first scroll.",
    },
    {
      action:
        "Paired Cormorant Garamond with Inter for a refined, editorial typography system",
      why: "Serif headings add elegance while a clean sans-serif keeps body content easy to read.",
    },
    {
      action:
        "Built the layout with Tailwind v4 using deliberate inline styles over utility classes",
      why: "Gave finer control over the bespoke, non-templated look the brand needed.",
    },
    {
      action:
        "Featured completed Sheffield and Grays properties with dedicated showcase sections",
      why: "Lets prospective buyers explore finished work in detail, building confidence in the developer.",
    },
    {
      action:
        "Hosted property video walkthroughs on Cloudinary after hitting GitHub's file size limits",
      why: "Keeps large video assets out of the codebase while ensuring fast, reliable playback.",
    },
  ];

  return (
    <>
      <Head>
        <title>Shore Residence Limited – Case Study | JohnCodes</title>
        <meta
          name="description"
          content="How I designed and built a dark luxury portfolio website for Shore Residence Limited, a UK-based real estate company."
        />
      </Head>

      <main className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <section className="relative bg-[#0a0a0a] text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #c9a227 0%, transparent 60%), radial-gradient(circle at 80% 20%, #a67c00 0%, transparent 50%)",
            }}
          />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-white transition-colors mb-8"
            >
              <span>←</span> Back to Projects
            </Link>

            <div className="mb-4">
              <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                Web Design &amp; Development
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Shore Residence Limited
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
              A dark luxury portfolio website for a UK-based real estate
              company, built to showcase completed properties with a refined,
              high-end aesthetic.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {tools.map((t) => (
                <span
                  key={t}
                  className="bg-white/10 text-slate-200 text-xs font-medium px-3 py-1 rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="max-w-5xl mx-auto py-10 px-6 pb-24 space-y-20">
          {/* Overview */}
          <section>
            <SectionLabel>Overview</SectionLabel>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Shore Residence Limited is a UK-based real estate company that
              needed a portfolio site to match the calibre of the properties it
              develops. The brief called for a bespoke, editorial feel — not
              another templated property listing site.
            </p>
          </section>

          {/* Problem */}
          <section>
            <SectionLabel>The Problem</SectionLabel>
            <ul className="space-y-3 mt-2">
              {[
                "The company had no dedicated site to showcase completed developments to prospective buyers and partners.",
                "Generic real estate templates didn't reflect the premium positioning of the brand.",
                "Completed properties needed a way to be presented with rich media, including video walkthroughs.",
                "The site needed to feel distinctive within a market saturated with near-identical property listing pages.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-600 text-base leading-relaxed"
                >
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Goal */}
          <section>
            <SectionLabel>The Goal</SectionLabel>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Design and build a portfolio website with a distinctive dark
              luxury aesthetic that presents completed properties in detail and
              positions Shore Residence as a premium developer.
            </p>
          </section>

          {/* Solution */}
          <section>
            <SectionLabel>The Solution</SectionLabel>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-5 py-3 font-semibold text-slate-700 w-1/2">
                      Action
                    </th>
                    <th className="px-5 py-3 font-semibold text-slate-700 w-1/2">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {solutionRows.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="px-5 py-4 text-slate-700 align-top border-b border-slate-100">
                        {row.action}
                      </td>
                      <td className="px-5 py-4 text-slate-500 align-top border-b border-slate-100">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Results */}
          <section>
            <SectionLabel>Results</SectionLabel>
            <ul className="space-y-3 mt-2">
              {[
                "The brand now has a portfolio site that visually matches the quality of its developments.",
                "Sheffield and Grays properties are showcased in full, including video walkthroughs.",
                "The distinctive dark, gold-accented design sets the brand apart from generic property sites.",
                "The site gives Shore Residence a credible asset to share with prospective buyers and partners.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-600 text-base leading-relaxed"
                >
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Tools */}
          <section>
            <SectionLabel>Tools Used</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center border-t border-slate-100 pt-16">
            <p className="mt-2 text-slate-400 text-sm">
              Want something like this?{" "}
              <Link
                href="/contact"
                className="text-amber-500 hover:underline font-medium"
              >
                Let&apos;s talk.
              </Link>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

// ── Helper ──
function SectionLabel({ children }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
      {children}
    </h2>
  );
}
