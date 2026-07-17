import projectsData from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 text-white"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            {/* Placeholder Image */}
            <div className="mb-5 flex h-48 items-center justify-center rounded-lg bg-slate-800 text-gray-500">
              Project Image
            </div>

            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-600 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="rounded-lg border border-blue-500 px-4 py-2 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;