"use client";
import Image from "next/image";

function SbLofa() {
  return (
    <div className="w-full px-6 bg-[#0e0e0e] text-white mx-auto pt-20">
      <div className="flex flex-col sm:flex-row items-center mb-2 gap-5 justify-center">
        {/* Hero Image */}
        <Image
          src="/images/sblofa-logo.webp"
          alt="SB Lofa Driving School website preview"
          className="rounded-xl shadow-lg"
          width={200}
          height={200}
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          SB Lofa Driving School – Case Study
        </h1>
      </div>
      <p className="text-indigo-400 text-lg font-semibold mb-10 text-center">
        Website SEO Optimization & Local Search Visibility
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-200 leading-relaxed">
          SB Lofa is a driving school offering behind-the-wheel training to new
          and returning drivers in Canada. Despite having a website, the school
          was getting very little visibility on Google, which meant prospective
          students were not able to discover the business easily.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">The Problem</h2>
        <ul className="text-gray-200 leading-relaxed list-disc pl-5 space-y-2">
          <li>
            The website was not ranking for relevant local search keywords.
          </li>
          <li>
            The business was not appearing on Google Maps or local listings.
          </li>
          <li>No trusted backlinks were pointing to the website.</li>
          <li>Student inquiries and enrollment numbers were low.</li>
        </ul>
        <p className="text-gray-200 mt-3">
          The business had an online presence, but no one could find it.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">The Goal</h2>
        <p className="text-gray-200 leading-relaxed">
          Improve online visibility, build local search credibility, and
          increase student bookings through strategic local SEO and reputation
          optimization.
        </p>
      </section>

      {/* Section 4 - Strategy Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">The Solution</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-gray-200">
            <thead>
              <tr>
                <th className="p-3 border-b">Action</th>
                <th className="p-3 border-b">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-3">On-site SEO Optimization</td>
                <td className="border-b p-3">
                  Helps Google understand content relevance.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">
                  High-authority backlink building
                </td>
                <td className="border-b p-3">
                  Improves search ranking & trust.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">
                  Google Business Profile setup + verification
                </td>
                <td className="border-b p-3">Enables local map visibility.</td>
              </tr>
              <tr>
                <td className="border-b p-3">Customer review acquisition</td>
                <td className="border-b p-3">
                  Boosts credibility and conversion rates.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5 - Results */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <ul className="text-gray-200 list-disc pl-5 space-y-2">
          <li>
            SB Lofa now appears in Google local search and on Google Maps.
          </li>
          <li>Noticeable increase in website visitors and inquiries.</li>
          <li>More student bookings and improved online reputation.</li>
        </ul>
        <blockquote className="mt-4 italic text-gray-300 border-l-4 border-blue-400 pl-4">
          “I’m very impressed with the work done. He went above and beyond
          optimizing our Google Business Profile, improving our SEO, and helping
          the school show up online. The difference is noticeable. Excellent
          job.”
        </blockquote>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
        <div className="flex flex-wrap gap-2 ">
          {[
            "Google Business Profile",
            "Google Search Console",
            "Local Citations (Yelp, YellowPages)",
            "SEO Keyword Research Tools",
          ].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Live Link */}
      <a
        href="https://www.sblofadrivingschool.com"
        target="_blank"
        className="inline-block mt-4 mb-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
      >
        View Live Project
      </a>
    </div>
  );
}

export default SbLofa;
