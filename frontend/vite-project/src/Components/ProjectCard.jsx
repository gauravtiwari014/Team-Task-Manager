function ProjectCard({ project }) {

  return (

    <div className="bg-white p-5 rounded shadow mb-4">

      <h2 className="text-2xl font-semibold">
        {project.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {project.description}
      </p>

      <div className="mt-4">

        <p className="text-sm text-gray-500">

          Team Members:
          {" "}
          {project.members.length}

        </p>

      </div>

    </div>
  );
}

export default ProjectCard;