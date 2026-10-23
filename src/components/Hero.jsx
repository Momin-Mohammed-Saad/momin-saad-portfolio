import heroData from "../data/hero";
import profile from "../assets/images/profile.jpeg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden  -translate-y-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-8">

        {/* LEFT SECTION */}
        <div className="text-center md:text-left">

          {/* Greeting */}
          <p className="text-lg font-medium text-blue-400">
            {heroData.greeting}
          </p>

          {/* Name */}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            {heroData.name}
          </h1>

          {/* Role */}
          <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-300 sm:text-3xl">
            {heroData.role}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg md:mx-0">
            {heroData.description}
          </p>

          {/* Fellowship Badge */}
          <div className="mt-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-300">
            Professional Fellowship Candidate
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">

            {/* Resume */}
            <a
              href={heroData.resume}
              download
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B1120]"
            >
              {heroData.buttons.resume}
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {heroData.buttons.projects}
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">

            {/* GitHub */}
            <a
              href={heroData.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href={heroData.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href={heroData.social.email}
              aria-label="Send me an email"
              className="text-2xl text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <MdEmail />
            </a>

          </div>

          {/* TECH STACK */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
            {heroData.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 text-sm text-slate-400 transition duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center -translate-y-12">

          <div className="relative">

            {/* Image Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Image Container */}
            <div className="relative rounded-full border border-blue-500/30 p-2 shadow-2xl shadow-blue-500/10">

              <img
                src={profile}
                alt="Momin Mohammed Saad"
                className="h-64 w-64 rounded-full border-2 border-slate-900 object-cover object-top sm:h-72 sm:w-72 md:h-80 md:w-80"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

