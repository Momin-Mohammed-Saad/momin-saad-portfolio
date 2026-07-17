import experienceData from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 text-white"
    >
      <h2 className="mb-16 text-center text-4xl font-bold">
        Learning Journey
      </h2>

      <div className="space-y-12">
        {experienceData.map((item) => (
          <div key={item.id} className="flex gap-6">

            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
              <div className="mt-2 h-full w-1 bg-slate-700"></div>
            </div>

            {/* Content */}
            <div className="pb-8">
              <p className="text-sm text-blue-400">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;