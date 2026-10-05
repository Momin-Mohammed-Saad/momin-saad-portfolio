import experienceData from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 text-white"
    >
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          My Journey
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Experience & Learning
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[7px] top-2 h-[calc(100%-8px)] w-px bg-slate-700 md:left-[11px]" />

        <div className="space-y-10">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Timeline Dot */}
              <div className="relative z-10 mt-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-[#18181B] md:h-6 md:w-6">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 md:h-2 md:w-2" />
              </div>

              {/* Experience Card */}
              <div className="flex-1 rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 md:p-7">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {item.title}
                  </h3>

                  <span className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                    {item.year}
                  </span>
                </div>

                <p className="mt-4 max-w-4xl leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;