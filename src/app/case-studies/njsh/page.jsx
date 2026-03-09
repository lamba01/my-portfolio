"use client";
import Image from "next/image";

function Njsh() {
  return (
    <div className="w-full px-6 bg-[#0e0e0e] text-white mx-auto pt-20">
      <div className="flex flex-col sm:flex-row items-center mb-2 gap-5 justify-center">
        {/* Hero Image */}
        <Image
          src="/images/commerce-logo.png"
          alt="NJSH Journal website preview"
          className="rounded-xl shadow-lg"
          width={200}
          height={100}
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          NJSH – Case Study
        </h1>
      </div>

      <p className="text-indigo-400 text-lg font-semibold mb-10 text-center">
        Academic Journal Website & Online Submission System
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-200 leading-relaxed">
          The Nigerian Journal of Social Health (NJSH) needed a professional
          online platform where researchers could submit articles, undergo peer
          review, and have their work published. They wanted a system that was
          easy for editors to manage without requiring technical expertise,
          while still supporting academic publishing standards such as DOI
          integration.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">The Problem</h2>
        <ul className="text-gray-200 leading-relaxed list-disc pl-5 space-y-2">
          <li>No existing website or digital journal platform.</li>
          <li>No structured submission and review workflow.</li>
          <li>Editors were not familiar with managing a website.</li>
          <li>Hard for authors to find and submit their research.</li>
        </ul>
        <p className="text-gray-200 mt-3">
          The journal wanted visibility and submissions — but lacked the system
          to support them.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">The Goal</h2>
        <p className="text-gray-200 leading-relaxed">
          Build a fully functional academic journal website that supports
          submissions, review workflow, publication, DOI assignment, and is easy
          for editors to manage independently.
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
                <td className="border-b p-3">
                  Built Website with OJS Platform
                </td>
                <td className="border-b p-3">
                  Provides a structured submission & peer review workflow.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">Configured Editorial Dashboard</td>
                <td className="border-b p-3">
                  Allows editors to manage submissions without technical skills.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">DOI & Publication Setup</td>
                <td className="border-b p-3">
                  Enables academic credibility and indexing.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">Search Visibility Optimization</td>
                <td className="border-b p-3">
                  Helps authors discover the journal and submit papers.
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
          <li>Journal is now publicly accessible online.</li>
          <li>Authors can submit research from anywhere in the world.</li>
          <li>Editors manage submissions independently.</li>
          <li>Professional academic publishing workflow established.</li>
        </ul>
        <blockquote className="mt-4 italic text-gray-300 border-l-4 border-indigo-500 pl-4">
          “John did an excellent job developing our website. We now reach a
          wider audience and have improved visibility on search engines.”
        </blockquote>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
        <div className="flex flex-wrap gap-2 ">
          {["OJS", "PHP", "cPanel Hosting", "DOI Integration"].map((tool) => (
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
        href="https://njsh.org.ng"
        target="_blank"
        className="inline-block mt-4 mb-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
      >
        View Live Project
      </a>
    </div>
  );
}

export default Njsh;
