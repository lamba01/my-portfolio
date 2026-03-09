"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Github, Linkedin, Twitter, Clock, Zap } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "moyinooluwafemi2004@gmail.com",
    href: "mailto:moyinooluwafemi2004@gmail.com",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+234 816 600 9368",
    href: "https://wa.me/2348166009368",
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/lamba01",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johnmoyinoluwa/",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/lambacodes",
  },
];

const perks = [
  { icon: Zap, text: "Fast turnaround — most projects kick off within 48hrs" },
  { icon: Clock, text: "Response guaranteed within 24 hours" },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xoveyvay");
  const [captchaToken, setCaptchaToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      router.push("/thank-you");
    }
  }, [state.succeeded, router]);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-100 h-100 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-500">
              great together
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Have a project in mind? Fill out the form and I&apos;ll get back to
            you within 24 hours.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[#111] border border-white/5 hover:border-indigo-500/40 rounded-2xl px-5 py-4 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 flex items-center justify-center transition-colors shrink-0">
                    <Icon size={18} className="text-indigo-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Perks */}
            <div className="flex flex-col gap-3">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-indigo-400" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
                Find me online
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-[#111] border border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/10 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon size={16} className="text-gray-400 hover:text-indigo-400 transition-colors" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 sm:p-10"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!captchaToken) {
                  alert("Please complete the CAPTCHA");
                  return;
                }
                handleSubmit(e);
              }}
              className="flex flex-col gap-5"
            >
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#2a2a2a] text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition text-sm"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1.5">
                  What do you need?
                </label>
                <select
                  name="service"
                  id="service"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#2a2a2a] text-white focus:outline-none focus:border-indigo-500 transition text-sm"
                >
                  <option value="">Select a service...</option>
                  <option value="eCommerce Website">eCommerce Website</option>
                  <option value="Booking Website">Booking / Appointment Website</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Site Redesign">Redesign My Current Site</option>
                  <option value="SEO">SEO & Visibility</option>
                  <option value="Other">Other / Not sure yet</option>
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Estimated Budget
                </label>
                <select
                  name="budget"
                  id="budget"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#2a2a2a] text-white focus:outline-none focus:border-indigo-500 transition text-sm"
                >
                  <option value="">Choose one...</option>
                  <option value="under $100">Less than $100</option>
                  <option value="$100-$250">$100 – $250</option>
                  <option value="$300-$500">$300 – $500</option>
                  <option value="$500+">$500+</option>
                </select>
                <ValidationError prefix="Budget" field="budget" errors={state.errors} />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="A brief description of what you're looking to build..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#2a2a2a] text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition text-sm resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-start">
                <ReCAPTCHA
                  sitekey="6Lfw25QrAAAAAJT-nI6glHQy-bLX_n3XPcWLjgAz"
                  onChange={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm bg-linear-to-r from-indigo-500 to-blue-600 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {state.submitting ? "Sending..." : "Send Message →"}
              </button>

              {/* WhatsApp fallback */}
              <p className="text-center text-sm text-gray-500">
                Prefer to chat?{" "}
                <a
                  href="https://wa.me/2348166009368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 underline underline-offset-4 transition-colors"
                >
                  Message me on WhatsApp
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
