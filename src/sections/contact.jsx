"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoveyvay");
  const [captchaToken, setCaptchaToken] = useState(null);
  const router = useRouter(); // ✅ next/navigation instead of react-router-dom

  useEffect(() => {
    if (state.succeeded) {
      router.push("/thank-you"); // ✅ next/navigation push
    }
  }, [state.succeeded, router]);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-25 px-5 sm:px-10 bg-[#0a0a0a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* ✅ SEO: keyword-rich heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Request Your Website Consultation
        </h2>
        <p className="mb-10 text-white/60">
          Whether you run an online store, a salon, or a coaching business,
          I&apos;m here to help you build a website that works for you.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!captchaToken) {
              alert("Please complete the CAPTCHA");
              return;
            }
            handleSubmit(e);
          }}
          className="flex flex-col gap-6 text-left"
        >
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-md bg-[#111] border border-[#2a2a2a] text-white focus:outline-none focus:border-blue-500 transition"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          {/* Service */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <label htmlFor="service" className="block mb-1 font-medium">
              Service needed?
            </label>
            <select
              name="service"
              id="service"
              required
              className="w-full px-4 py-3 rounded-md bg-[#111] border border-[#2a2a2a] text-white focus:outline-none focus:border-blue-500 transition"
            >
              <option value="">Select a service...</option>
              <option value="eCommerce Website">eCommerce Website</option>
              <option value="Booking Website">Booking / Appointment Website</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Site Redesign">Redesign My Current Site</option>
            </select>
            <ValidationError prefix="Service" field="service" errors={state.errors} />
          </motion.div>

          {/* Budget */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <label htmlFor="budget" className="block mb-1 font-medium">
              What&apos;s your estimated budget?
            </label>
            <select
              name="budget"
              id="budget"
              required
              className="w-full px-4 py-3 rounded-md bg-[#111] border border-[#2a2a2a] text-white focus:outline-none focus:border-blue-500 transition"
            >
              <option value="">Choose one...</option>
              <option value="under $100">Less than $100</option>
              <option value="100$-$250">$100 – $250</option>
              <option value="$300-$500">$300–$500</option>
              <option value="$500+">$500+</option>
            </select>
            <ValidationError prefix="Budget" field="budget" errors={state.errors} />
          </motion.div>

          {/* reCAPTCHA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-start"
          >
            <ReCAPTCHA
              sitekey="6Lfw25QrAAAAAJT-nI6glHQy-bLX_n3XPcWLjgAz"
              onChange={handleCaptchaChange}
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={state.submitting}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white px-6 py-3 rounded-md transition cursor-pointer font-semibold w-full sm:w-auto mx-auto hover:scale-105"
            style={{
              backgroundImage: "linear-gradient(to right, #2563eb, #1e3a8a)",
              backgroundColor: "#2563eb",
            }}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            viewport={{ once: true, amount: 0.3 }}
            href="https://wa.me/2348166009368"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-green-400 underline hover:text-green-300"
          >
            Or message me directly on WhatsApp
          </motion.a>
        </form>
      </motion.div>
    </section>
  );
}
