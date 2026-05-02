import { useEffect, useState } from "react";

import {
  getProjects,
  createProject
} from "../services/api";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects = async () => {

    const data = await getProjects();

    setProjects(data);
  };


  const handleCreateProject = async (e) => {

    e.preventDefault();

    await createProject({
      title,
      description
    });

    setTitle("");
    setDescription("");

    fetchProjects();
  };

  return (

    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Projects
      </h1>


      <form
        onSubmit={handleCreateProject}
        className="bg-white p-5 rounded shadow mb-8"
      >

        <input
          type="text"
          placeholder="Project Title"
          className="border p-2 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="border p-2 w-full mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="bg-black text-white px-5 py-2 rounded"
        >
          Create Project
        </button>

      </form>


      {projects.map((project) => (

        <div
          key={project._id}
          className="bg-white p-5 rounded shadow mb-4"
        >

          <h2 className="text-2xl font-semibold">
            {project.title}
          </h2>

          <p className="mt-2 text-gray-600">
            {project.description}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Projects;