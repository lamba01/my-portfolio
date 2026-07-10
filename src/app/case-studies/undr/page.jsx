import Head from "next/head";
import Link from "next/link";

export default function UndrCaseStudy() {
  const tools = [
    "Next.js",
    "Payload CMS",
    "Neon PostgreSQL",
    "Cloudinary",
    "Paystack",
    "Resend",
  ];

  const solutionRows = [
    {
      action:
        "Built a custom storefront on Next.js with a Payload CMS-managed product catalog",
      why: "Gives the client full control to add, edit, and retire products without touching code.",
    },
    {
      action:
        "Integrated Paystack for secure, Nigeria-first checkout and payments",
      why: "Local payment rails reduce checkout friction and build trust with Nigerian shoppers.",
    },
    {
      action: "Set up Cloudinary for product image delivery and optimisation",
      why: "Keeps product pages fast even with a large, growing catalog of high-resolution images.",
    },
    {
      action: "Wrote and structured product copy across the catalog",
      why: "Clear, consistent copy helps shoppers understand fit, material, and sizing without guesswork.",
    },
    {
      action: "Configured order notification emails via Resend",
      why: "Keeps the client instantly informed of new orders without needing to check a dashboard.",
    },
    {
      action: "Set up a custom domain (undr.ng) and implemented on-page SEO",
      why: "A branded domain and search visibility are essential for an independent boutique competing for organic traffic.",
    },
  ];

  return (
    <>
      <Head>
        <title>UNDR. – Case Study | JohnCodes</title>
        <meta
          name="description"
          content="How I built a full-stack e-commerce platform for UNDR., a Lagos-based intimate apparel boutique."
        />
      </Head>

      <main className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <section className="relative bg-black text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #e11d78 0%, transparent 60%), radial-gradient(circle at 80% 20%, #9d174d 0%, transparent 50%)",
            }}
          />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-pink-300 hover:text-white transition-colors mb-8"
            >
              <span>←</span> Back to Projects
            </Link>

            <div className="mb-4">
              <span className="inline-block bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                E-commerce Development
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              UNDR.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
              Full-stack e-commerce platform for a Lagos-based intimate apparel
              boutique, built to handle catalog management, secure payments, and
              order fulfilment end-to-end.
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
              href="https://undr.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-400 transition-colors text-white font-semibold px-6 py-3 rounded-lg text-sm"
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
              UNDR. is a Lagos-based intimate apparel boutique looking to move
              from informal, social-media-driven sales to a proper e-commerce
              storefront. The goal was a platform the client could manage
              independently, with a checkout experience built for the Nigerian
              market from the ground up.
            </p>
          </section>

          {/* Problem */}
          <section>
            <SectionLabel>The Problem</SectionLabel>
            <ul className="space-y-3 mt-2">
              {[
                "Sales were managed manually through DMs, with no central catalog or inventory visibility.",
                "There was no way to accept payments online in a way customers could trust.",
                "Product presentation was inconsistent across platforms, with no dedicated storefront to point customers to.",
                "The client needed to be able to update products and pricing without relying on a developer for every change.",
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
              Build a production-grade e-commerce store with a self-service CMS,
              secure local payments, and a polished storefront that gives the
              brand a credible, independent online presence.
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
                "The client now has a fully independent storefront with self-managed products, orders, and pricing.",
                "Customers can check out securely with local payment methods via Paystack.",
                "The client receives instant order notifications by email, with no manual dashboard checks required.",
                "The brand now operates on its own domain with a searchable, SEO-optimised presence.",
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
              href="https://undr.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black hover:bg-slate-800 transition-colors text-white font-semibold px-8 py-4 rounded-xl text-base"
            >
              View Live Site →
            </a>
            <p className="mt-8 text-slate-400 text-sm">
              Want something like this?{" "}
              <Link
                href="/contact"
                className="text-pink-500 hover:underline font-medium"
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
    <h2 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3">
      {children}
    </h2>
  );
}
