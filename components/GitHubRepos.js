"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/SuvarnaAdityan/repos")
      .then((res) => setRepos(res.data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {repos.slice(0, 6).map((repo) => (
        <div key={repo.id} className="glass p-6 rounded-2xl">

          <h3 className="text-xl font-semibold">{repo.name}</h3>

          <p className="text-gray-400 mt-2">
            {repo.description || "No description available"}
          </p>

          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <span>⭐ {repo.stargazers_count}</span>

            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-400"
            >
              View Repo →
            </a>
          </div>

        </div>
      ))}

    </div>
  );
}