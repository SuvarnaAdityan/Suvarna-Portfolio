"use client";

import ThemeToggle from "../components/ThemeToggle";
import SkillsChart from "../components/SkillsChart";
import GitHubProjects from "../components/GitHubProjects";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>

      <h1>Suvarna Ramu</h1>
      <p>Software Engineer | AI/ML Enthusiast</p>

      <ThemeToggle />

      <h2>Skills</h2>
      <SkillsChart />

      <h2>GitHub Projects</h2>
      <GitHubProjects />

    </main>
  );
}