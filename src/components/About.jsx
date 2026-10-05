import aboutData from "../data/about";

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-24 text-white lg:px-8  -translate-y-12"
    >
      {/* Section Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Get to know me
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          {aboutData.title}
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
      </div>

      {/* About Content */}
      <div className="mx-auto mt-12 max-w-4xl">
        <div className="rounded-2xl border border-slate-800 bg-[#0F172A]/60 p-6 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 sm:p-8 lg:p-10">
          
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            {aboutData.introduction}
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            {aboutData.objective}
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {aboutData.highlights.map((item) => (
          <div
            key={item}
            className="group rounded-xl border border-slate-800 bg-[#0F172A]/70 px-4 py-5 text-center text-sm font-medium text-slate-300 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-300 hover:shadow-blue-500/10"
          >
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
