"use client";
// import cepherlogo from "../../asset/cepher-logo.jpeg";
import Image from "next/image";

const CepherCaseStudy = () => {
  return (
    <div className="w-full px-6 bg-[#0e0e0e] text-white mx-auto pt-20">
      <div className="flex flex-col sm:flex-row items-center mb-2 gap-5 justify-center">
        {/* Hero Image */}
        <Image
          src="/images/cepher-logo.jpeg"
          alt="Cepher Initiative website preview"
          className="rounded-xl shadow-lg"
          width={200}
          height={200}
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cepher Initiative (NGO)
        </h1>
      </div>
      <p className="text-indigo-400 text-lg font-semibold mb-10 text-center">
        Project: NGO Website & Online Presence
      </p>

      {/* Intro */}
      <div className="space-y-6 leading-relaxed">
        {/* 1. Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>
            Cepher is a community-driven NGO focused on youth empowerment and
            educational outreach. They needed an online presence where visitors
            could learn about their mission, ongoing programs, and ways to get
            involved.
          </p>
        </section>

        {/* 2. The Problem */}
        <section>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              There was no website or digital presence to represent the
              organization.
            </li>
            <li>
              People could not easily find information about their programs or
              reach out.
            </li>
            <li>
              The organization appeared less credible because they had no
              official platform.
            </li>
          </ul>
        </section>

        {/* 3. The Goal */}
        <section>
          <h2 className="text-xl font-semibold mb-2">The Goal</h2>
          <p>
            Create a modern platform that clearly communicates their mission and
            programs, and makes it easy for people to learn more, contact them,
            and participate.
          </p>
        </section>

        {/* 4. The Solution */}
        <section>
          <h2 className="text-xl font-semibold mb-2">The Solution</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border px-3 py-2 text-left">Action</th>
                <th className="border px-3 py-2 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Designed modern website UI</td>
                <td className="border px-3 py-2">
                  Creates strong professional appearance
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">
                  Built responsive pages for programs & activities
                </td>
                <td className="border px-3 py-2">
                  Helps visitors quickly understand what the NGO does
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">
                  Added contact and message submission features
                </td>
                <td className="border px-3 py-2">
                  Makes it easy for people to reach out directly
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 5. Result */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Cepher now has a credible and professional online presence.</li>
            <li>
              Visitors can easily learn about projects and contact the NGO.
            </li>
            <li>
              The organization is now discoverable online and recognized more
              widely.
            </li>
          </ul>
        </section>

        {/* Client Feedback (optional, short) */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Client Feedback</h2>
          <blockquote className="mt-4 italic text-gray-300 border-l-4 border-indigo-500 pl-4">
            “John quickly set up our public site and made it easy for the team
            to update content. Very reliable and thoughtful developer.”
          </blockquote>
        </section>

        {/* 6. Tools */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Tools & Technologies</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        {/* 7. Live Link */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Live Project</h2>
          <a
            href="https://www.cepher.org.ng"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 mb-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
          >
            Visit Cepher Website
          </a>
        </section>
      </div>
    </div>
  );
};

export default CepherCaseStudy;
