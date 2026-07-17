import aboutData from "../data/about";

function About() {
  return (
    <section 
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 text-white"
    >
      <h2 className="text-center text-4xl font-bold">
        {aboutData.title}
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
        {aboutData.introduction}
      </p>

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-400">
        {aboutData.objective}
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {aboutData.highlights.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-slate-700 bg-slate-900 p-5 text-center transition duration-300 hover:border-blue-500 hover:-translate-y-1"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;