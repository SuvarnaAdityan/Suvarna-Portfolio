"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-b from-[#0b0f19] to-[#020617] text-white">
      
      <div className="text-center max-w-2xl">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-500">Suvarna Ramu</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-400">
          Software Engineer building AI-driven systems and modern web applications.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          
          {/* Projects Button */}
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium shadow-lg"
          >
            View Projects
          </Link>

          {/* Resume Button */}
          <a
            href="/SUVARNA RAMU RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-lg font-medium"
          >
            Resume
          </a>

        </div>

      </div>
    </main>
  );
}