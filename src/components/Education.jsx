import educationData from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-6 py-24 text-white"
    >
      {/* Section Heading */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Academic Background
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Education
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
      </div>

      {/* Education Timeline */}
      <div className="relative space-y-8">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 md:p-9"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              {/* Education Details */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  {item.duration}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">
                  {item.degree}
                </h3>

                {item.institution && (
                  <p className="mt-4 text-lg font-medium text-slate-300">
                    {item.institution}
                  </p>
                )}

                {item.university && (
                  <p className="mt-1 text-slate-400">
                    {item.university}
                  </p>
                )}
              </div>

              {/* CGPA */}
              {item.cgpa && (
                <div className="w-fit rounded-xl border border-blue-500/20 bg-blue-500/10 px-5 py-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    CGPA
                  </p>

                  <p className="mt-1 text-xl font-bold text-blue-400">
                    {item.cgpa}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;