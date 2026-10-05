import skillsData from "../data/skills";

function Skills() {
  const categoryTitles = {
    programming: "Programming & Web",
    machineLearning: "Machine Learning",
    dataAnalysis: "Data Analysis",
    tools: "Tools & Technologies",
  };

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24 text-white lg:px-8"
    >
      {/* Section Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Technical Expertise
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Skills
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
      </div>

      {/* Skills Grid */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="group rounded-2xl border border-slate-800 bg-[#0F172A]/60 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-blue-400">
              {categoryTitles[category] || category}
            </h3>

            {/* Category Line */}
            <div className="mt-3 h-px w-full bg-slate-800 transition-colors duration-300 group-hover:bg-blue-500/30" />

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-lg border border-slate-700 bg-[#18181B] px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;