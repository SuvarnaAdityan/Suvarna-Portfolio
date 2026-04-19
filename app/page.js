"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 pt-32">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-center"
      >
        Hi, I’m <span className="text-blue-500">Suvarna Ramu</span>
      </motion.h1>

      <p className="mt-6 text-gray-400 text-center max-w-xl">
        Software Engineer building AI-driven systems and modern web applications.
      </p>

      <div className="mt-10 flex gap-4">
        <a href="/projects" className="bg-blue-500 px-6 py-3 rounded-xl">
          View Work
        </a>

        <a href="/SUVARNA RAMU RESUME.pdf" target="_blank"
          className="glass px-6 py-3 rounded-xl">
          Resume
        </a>
      </div>

    </main>
  );
}