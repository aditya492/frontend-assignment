import React, { useEffect, useState } from "react";
import ProjectsTable from "./ProjectTable";
import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load projects. Please try again.");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <ProjectsTable projects={projects} />;
};

export default App;
