import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0b0f19]/90 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-lg font-semibold tracking-wide text-white">
          Suvarna Ramu
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>

          <Link href="/publications" className="hover:text-white">
            Publications
          </Link>

          <Link href="/resume" className="hover:text-white">
            Resume
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}