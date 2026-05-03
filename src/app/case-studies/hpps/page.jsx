import Head from "next/head";
import Link from "next/link";

export default function HPPSCaseStudy() {
  const tools = [
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
    "Booking Integration",
    "SEO Optimisation",
  ];

  const solutionRows = [
    {
      action:
        "Designed warm, trust-building UI aligned with the brand's therapeutic ethos",
      why: "First impressions matter in healthcare — visitors decide within seconds whether to trust a provider.",
    },
    {
      action:
        "Built dedicated service pages for Individual, Couples, Family, and Pastoral Counselling",
      why: "Helps clients self-identify the right service and arrive at consultations better prepared.",
    },
    {
      action:
        "Integrated appointment booking flow linked to Psychology Today and Jane App",
      why: "Removes friction between intent and booking — clients can act immediately while motivated.",
    },
    {
      action: "Implemented FAQ section addressing common therapy concerns",
      why: "Reduces cold-feet drop-off by resolving doubts before the client has to reach out.",
    },
    {
      action:
        "Optimised for local search visibility in Ontario's psychotherapy market",
      why: "Ensures the practice is discoverable by clients actively searching for virtual therapy in Ontario.",
    },
    {
      action: "Built with Next.js for performance and SEO out of the box",
      why: "Fast load times and server-rendered HTML signal quality to both users and search engines.",
    },
  ];

  return (
    <>
      <Head>
        <title>Healing Path Psychotherapy – Case Study | JohnCodes</title>
        <meta
          name="description"
          content="How I designed and built a full booking and portfolio website for a Toronto-based registered psychotherapist serving virtual clients across Ontario."
        />
      </Head>

      <main className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <section className="relative bg-[#0f1f38] text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #4f83cc 0%, transparent 60%), radial-gradient(circle at 80% 20%, #6ba3be 0%, transparent 50%)",
            }}
          />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors mb-8"
            >
              <span>←</span> Back to Projects
            </Link>

            <div className="mb-4">
              <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                Web Design &amp; Development
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Healing Path Psychotherapy Services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
              Booking platform &amp; portfolio website for a Toronto-based
              registered psychotherapist, designed to convert visitors into
              booked clients.
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

            <a
              href="https://hppstherapy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-semibold px-6 py-3 rounded-lg text-sm"
            >
              View Live Site →
            </a>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="max-w-5xl mx-auto py-10 px-6 pb-24 space-y-20">
          {/* Overview */}
          <section>
            <SectionLabel>Overview</SectionLabel>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Healing Path Psychotherapy Services is a virtual therapy practice
              run by Morenike Orubuloye, a Registered Psychotherapist
              (Qualifying) serving clients across Ontario, Canada. She offers
              individual, couples, family, and pastoral counselling, with
              particular expertise in neurodivergence, trauma, and newcomer
              mental health.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mt-4">
              The practice had no website. Potential clients had no way to learn
              about her services, her approach, or how to book — the entire
              client acquisition process was word-of-mouth and referrals. The
              goal was to change that.
            </p>
          </section>

          {/* Problem */}
          <section>
            <SectionLabel>The Problem</SectionLabel>
            <ul className="space-y-3 mt-2">
              {[
                "No online presence meant the practice was invisible to people searching for virtual therapy in Ontario.",
                "Prospective clients had no way to self-qualify — to understand her specialisations, modalities, or approach before reaching out.",
                "Booking required a direct conversation first, creating friction that caused potential clients to drop off.",
                "The practice lacked the digital credibility that healthcare clients expect before trusting a provider with their mental health.",
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
              Build a full production website that establishes the
              practice&apos;s online presence, communicates Morenike&apos;s
              unique approach and expertise, and provides a clear, low-friction
              path for Ontario-based clients to book a virtual session.
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
                "The practice now has a credible, production-grade online presence that can be found via search.",
                "Prospective clients can explore all six service areas, read about the therapist's background and approach, and self-qualify before booking.",
                "Appointment booking is one click away from any page — directly linked to Jane App and Psychology Today.",
                "The site is fast, fully responsive, and optimised for Ontario-based search queries.",
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
            <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Live Project
            </p>
            <a
              href="https://hppstherapy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0f1f38] hover:bg-[#1a3456] transition-colors text-white font-semibold px-8 py-4 rounded-xl text-base"
            >
              View Live Site →
            </a>
            <p className="mt-8 text-slate-400 text-sm">
              Want something like this?{" "}
              <Link
                href="/contact"
                className="text-blue-500 hover:underline font-medium"
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
    <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">
      {children}
    </h2>
  );
}
