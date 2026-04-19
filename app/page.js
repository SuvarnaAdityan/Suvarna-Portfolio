"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-24">

      <div className="text-center max-w-2xl">

        <h1 className="text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-500">Suvarna Ramu</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Software Engineer building AI-driven systems and modern web applications.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <a href="/projects" className="btn-primary">
            View Projects
          </a>

          <a href="/SUVARNA RAMU RESUME.pdf" target="_blank" className="btn-outline">
            Resume
          </a>

        </div>

      </div>

    </main>
  );
}