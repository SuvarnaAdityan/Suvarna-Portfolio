"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Suvarna Ramu</h1>
        <p className="mt-4 text-lg text-gray-400">
          Software Engineer | Frontend Developer | AI/ML Enthusiast
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300">
          Computer Engineering graduate with experience in frontend development,
          AI/ML, and scalable application design. Passionate about building
          user-focused and efficient systems.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">Fraud Detection System</h3>
            <p className="text-gray-400 mt-2">
              Deep learning model achieving 96–99% accuracy.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">Social Network Analysis</h3>
            <p className="text-gray-400 mt-2">
              Interactive visualization improving engagement by 40%.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">suvarnaadityan@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/suvarnaramu"
          className="text-blue-400"
        >
          LinkedIn Profile
        </a>
      </section>

    </main>
  );
}