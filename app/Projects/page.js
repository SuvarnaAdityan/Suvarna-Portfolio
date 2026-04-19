"use client";

import GitHubRepos from "../../components/GitHubRepos";

export default function Projects() {
  return (
    <main className="px-6 py-24 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      {/* Featured Projects */}
      <div className="space-y-8">

        <div className="glass p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Fraud Detection System</h2>
          <p className="text-gray-400 mt-2">
            Deep learning model achieving up to 99% accuracy.
          </p>
          <a href="https://ijsrset.com/%20IJSRSET207380"
            className="text-blue-400 mt-2 block">
            View Publication →
          </a>
        </div>

        <div className="glass p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Social Network Analysis</h2>
          <p className="text-gray-400 mt-2">
            Visualization of network centrality measures.
          </p>
        </div>

      </div>

      {/* GitHub Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">GitHub Projects</h2>
        <GitHubRepos />
      </section>

    </main>
  );
}