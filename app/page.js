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

        <a
          href="/SUVARNA RAMU RESUME.pdf"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        >
          View Resume
        </a>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-300">
          Computer Engineering graduate with expertise in frontend development,
          AI/ML, and scalable systems. Experienced in building applications,
          data-driven models, and user-focused solutions.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">Fraud Detection System</h3>
            <p className="text-gray-400 mt-2">
              Deep learning model achieving 96–99% accuracy using Autoencoders and RBM.
            </p>
            <a
              href="https://ijsrset.com/%20IJSRSET207380"
              target="_blank"
              className="text-blue-400 mt-3 block"
            >
              View Related Publication
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">Social Network Analysis</h3>
            <p className="text-gray-400 mt-2">
              Interactive web application for analyzing network centrality measures.
            </p>
            <a
              href="https://www.linkedin.com/in/suvarnaramu"
              target="_blank"
              className="text-blue-400 mt-3 block"
            >
              View Details
            </a>
          </motion.div>

        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6">Publications</h2>

        <ul className="space-y-4 text-gray-300">

          <li>
            <a
              href="https://computers.journalspub.info/index.php?journal=JSCT&page=article&op=view&path%5B%5D=598"
              target="_blank"
              className="text-blue-400"
            >
              Review of Feature Selection Methods and Semi Supervised Feature Selection Algorithms for Classification
            </a>
          </li>

          <li>
            <a
              href="https://journalspub.com"
              target="_blank"
              className="text-blue-400"
            >
              Context Aware Physical Activity Recognition Using Social Objects
            </a>
          </li>

          <li>
            <a
              href="https://ijsrset.com/%20IJSRSET207380"
              target="_blank"
              className="text-blue-400"
            >
              Credit Card Fraud Detection Using Federated Learning Techniques
            </a>
          </li>

          <li>
            <a
              href="https://ijsrcseit.com/CSEIT1833436"
              target="_blank"
              className="text-blue-400"
            >
              Critical Care Monitoring with Event Priorization Using IoT
            </a>
          </li>

        </ul>
      </section>

      {/* CONTACT */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>

        <p className="text-gray-400">suvarnaadityan@gmail.com</p>

        <a
          href="https://www.linkedin.com/in/suvarnaramu"
          target="_blank"
          className="text-blue-400 block mt-2"
        >
          LinkedIn Profile
        </a>
      </section>

    </main>
  );
}