import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/images/Hero.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-ink text-white">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Keeps the text readable on any photo. Adjust the opacities to taste. */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-32 sm:pb-20">
        <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-tight">
          Websites that
          <span className="block text-white/65">bring in clients.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
          I build fast, search-friendly websites and web apps for businesses,
          from online stores to booking systems. Clear results, no technical
          jargon.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-center font-medium text-ink text-black transition-colors hover:bg-accent"
          >
            View my work
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-white/50 px-6 py-3 text-center font-medium transition-colors hover:border-white hover:bg-white/10"
          >
            Get a free project estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
