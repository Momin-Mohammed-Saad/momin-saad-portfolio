import projectsData from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const [activeImages, setActiveImages] = useState({});
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 text-white lg:px-8"
    >
      {/* Section Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          My Work
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Featured Projects
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
          A selection of projects focused on Data Science, Machine Learning,
          and intelligent software solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#0F172A]/70 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
          >
      {/* Project Image Carousel */}
      <div className="relative aspect-video overflow-hidden bg-[#0F172A]">
        {(() => {
          const images = project.images || (project.image ? [project.image] : []);
          const activeIndex = activeImages[project.id] || 0;
          
          if (images.length === 0) {
            return (
              <div className="flex h-full items-center justify-center text-sm text-slate-500">
                Project Preview
              </div>
            );
          }
          
          return (
          <>
            <img
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`${project.title} screenshot ${activeIndex + 1}`}
              loading="lazy"
              onError={(e) => {
                console.error("Failed to load image:", e.currentTarget.src);
              }}
              className="h-full w-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                aria-label="Previous image"
                onClick={() =>
                  setActiveImages((prev) => ({
                    ...prev,
                    [project.id]:
                      (activeIndex - 1 + images.length) % images.length,
                    }))
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-blue-600"
                >
                  &#10094;
                </button>
                
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() =>
                    setActiveImages((prev) => ({
                      ...prev,
                      [project.id]: (activeIndex + 1) % images.length,
                    }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-blue-600"
                >
                  &#10095;
                </button>
                
                <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-3 py-1 text-xs text-white">
                  {activeIndex + 1} / {images.length}
                </div>
              </>
            )}
          </>
        );
      })()}
    </div>


            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-blue-400 sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-700 bg-[#18181B] px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-300">
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;