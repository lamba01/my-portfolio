"use client";
import Image from "next/image";

function MckenBooking() {
  return (
    <div className="w-full px-6 bg-[#0e0e0e] text-white mx-auto pt-20">
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row items-center mb-2 gap-5 justify-center">
        <Image
          src="/images/mcken.png"
          alt="McKen Booking System Preview"
          className="rounded-xl shadow-lg"
          width={200}
          height={200}
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center sm:text-left">
          McKen Beauty Lounge – Case Study
        </h1>
      </div>

      <p className="text-indigo-400 text-lg font-semibold mb-10 text-center">
        Online Booking System + Calendar Scheduling & Admin Dashboard
      </p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-200 leading-relaxed">
          McKen Beauty Lounge offers professional beauty and grooming services.
          Before the project, bookings were managed manually through phone calls
          and messages. This led to scheduling conflicts, overwhelming call
          volume, and missed opportunities whenever the owner couldn’t pick up
          the phone.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">The Problem</h2>
        <ul className="text-gray-200 leading-relaxed list-disc pl-5 space-y-2">
          <li>
            Clients had to call to book, which caused overload and stress.
          </li>
          <li>Booking times clashed frequently due to lack of organization.</li>
          <li>Bookings were lost when calls weren&apos;t answered.</li>
          <li>Customer experience was inconsistent and inefficient.</li>
        </ul>
      </section>

      {/* Goal */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">The Goal</h2>
        <p className="text-gray-200 leading-relaxed">
          Create an automated and reliable booking system that allows clients to
          book anytime, reduces scheduling conflicts, and allows the business
          owner to manage bookings with ease.
        </p>
      </section>

      {/* Solution Table */}
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
                  Created online booking website with calendar scheduling
                </td>
                <td className="border-b p-3">
                  Clients can book anytime without calling.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">
                  Implemented booking conflict prevention logic
                </td>
                <td className="border-b p-3">
                  Ensures no overlapping appointment times.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">
                  Built an admin dashboard to track and manage bookings
                </td>
                <td className="border-b p-3">
                  Owner can update statuses and view schedules clearly.
                </td>
              </tr>
              <tr>
                <td className="border-b p-3">
                  Automated booking confirmations
                </td>
                <td className="border-b p-3">Reduces manual communication.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Results */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <ul className="text-gray-200 list-disc pl-5 space-y-2">
          <li>Clients now book easily without calling.</li>
          <li>No more double-booking or calendar confusion.</li>
          <li>Owner can review and manage appointments stress-free.</li>
          <li>Increased confirmed bookings and customer satisfaction.</li>
        </ul>
        <blockquote className="mt-4 italic text-gray-300 border-l-4 border-indigo-500 pl-4">
          “It helped me get more bookings without constantly answering calls. I
          just check my dashboard and everything is organized.”
        </blockquote>
      </section>

      {/* Tools */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "Express.js", "Mongoose", "Tailwind CSS"].map(
            (tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </section>

      {/* Live Link */}
      <a
        href="https://www.lashesbrowsbeautyy.com.ng/"
        target="_blank"
        className="inline-block mt-4 mb-10 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
      >
        View Live Project
      </a>
    </div>
  );
}

export default MckenBooking;
