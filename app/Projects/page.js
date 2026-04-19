"use client";

import GitHubRepos from "../../components/GitHubRepos";

export default function Projects() {
  return (
    <main className="container px-6 py-28">

      <h1 className="text-3xl font-semibold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="glass p-6">
          <h2 className="text-xl font-semibold">Fraud Detection System</h2>
          <p className="text-gray-400 mt-2">
            Deep learning model achieving up to 99% accuracy.
          </p>
          <a href="https://ijsrset.com/%20IJSRSET207380"
            className="text-blue-400 mt-3 inline-block">
            View →
          </a>
        </div>

        <div className="glass p-6">
          <h2 className="text-xl font-semibold">Social Network Analysis</h2>
          <p className="text-gray-400 mt-2">
            Visualization of network centrality metrics.
          </p>
        </div>

      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">GitHub Projects</h2>
        <GitHubRepos />
      </div>

    </main>
  );
}