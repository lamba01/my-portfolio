import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-line bg-paper/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-6"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            className="rounded-xl border border-line"
            width={36}
            height={36}
            src="/images/logo.png"
            alt="John Oluwafemi"
          />
        </Link>

        <ul className="flex items-center gap-4 text-sm sm:gap-8 sm:text-base">
          <li>
            <Link
              href="/about"
              className="text-white transition-colors hover:text-ink"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              className="text-white transition-colors hover:text-ink"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded-full text-white bg-ink px-4 py-2 text-paper transition-colors hover:bg-accent"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
