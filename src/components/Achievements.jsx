
import achievementsData from "../data/achievements";
import {
  FaCode,
  FaChartBar,
  FaBrain,
  FaExternalLinkAlt,
} from "react-icons/fa";

const iconMap = {
  code: FaCode,
  chart: FaChartBar,
  brain: FaBrain,
};

function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-7xl px-6 py-24 text-white lg:px-8"
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Milestones & Growth
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Achievements & Highlights
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
          A showcase of my technical projects, practical learning, and
          continuous growth in Data Science and AI.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievementsData.map((item) => {
          const Icon = iconMap[item.icon] || FaCode;

          return (
            <article
              key={item.id}
              className="group rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <Icon size={22} />
                </div>

                <span className="rounded-full border border-slate-700 bg-[#18181B] px-3 py-1 text-xs font-medium text-slate-300">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-100 transition-colors group-hover:text-blue-400">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-cyan-300"
                >
                  {item.linkLabel || "View Details"}
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;