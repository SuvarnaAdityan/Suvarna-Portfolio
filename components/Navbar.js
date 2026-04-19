import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0b0f19]/90 backdrop-blur border-b border-gray-800">
      <div className="container flex justify-between items-center px-6 py-4">

        <h1 className="text-lg font-semibold tracking-wide">
          Suvarna Ramu
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">

          <Link href="/">
            <a className="hover:text-white">Home</a>
          </Link>

          <Link href="/projects">
            <a className="hover:text-white">Projects</a>
          </Link>

          <Link href="/publications">
            <a className="hover:text-white">Publications</a>
          </Link>

          <Link href="/resume">
            <a className="hover:text-white">Resume</a>
          </Link>

          <Link href="/contact">
            <a className="hover:text-white">Contact</a>
          </Link>

        </div>
      </div>
    </nav>
  );
}