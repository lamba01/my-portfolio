import Link from "next/link";
import Image from "next/image";


export default function navBar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 sm:px-10 z-20 fixed backdrop-blur-2xl bg-[#0f172a]/70 border-b border-white/10 h-15 text-white shadow-md">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="rounded-xl border-2 border-white shadow-md"
            width={40} height={40}
            src="/images/logo.png"
            alt="company logo"
          />
          <h5 className="font-bold text-white/80 hover:text-white">John</h5>
        </Link>
      </div>
      <div className="flex gap-5 md:gap-10 capitalize">
        <a
          className="text-sm md:text-lg text-white/80 hover:text-white"
          href="/about"
        >
          about
        </a>
        <a
          className="text-sm md:text-lg text-white/80 hover:text-white"
          href="/case-studies"
        >
          projects
        </a>
        <Link
          className="text-sm md:text-lg text-white/80 hover:text-white hidden sm:block"
          href="/#contact"
          rel="noopener noreferrer"
        >
          contact
        </Link>
        {/* <a
          className="text-sm md:text-lg text-white/80 hover:text-white"
          href="/blog"
          rel="noopener noreferrer"
        >
          blog
        </a> */}
      </div>
    </nav>
  );
}





