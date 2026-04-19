"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full glass z-50">
      <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">

        <h1 className="font-semibold text-lg tracking-wide">
          Suvarna Ramu
        </h1>

        <div className="space-x-6 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}