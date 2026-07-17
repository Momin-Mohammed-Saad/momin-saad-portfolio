import educationData from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-6 py-24 text-white"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Education
      </h2>

      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
        <p className="text-blue-400">
          {educationData.duration}
        </p>

        <h3 className="mt-2 text-3xl font-semibold">
          {educationData.degree}
        </h3>

        <p className="mt-2 text-gray-400">
          {educationData.institution}
        </p>

        <p className="text-gray-400">
          {educationData.university}
        </p>

        <p className="mt-2 text-gray-400">
          {educationData.cgpa}
        </p>
      </div>
    </section>
  );
}

export default Education;