"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/SuvarnaAdityan/repos")
      .then((res) => setRepos(res.data));
  }, []);

  return (
    <div>
      {repos.slice(0, 4).map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <a href={repo.html_url}>View</a>
        </div>
      ))}
    </div>
  );
}