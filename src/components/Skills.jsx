import skillsData from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24 text-white"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Skills
      </h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-10">
          <h3 className="mb-4 text-2xl font-semibold capitalize">
            {category}
          </h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="cursor-pointer rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;