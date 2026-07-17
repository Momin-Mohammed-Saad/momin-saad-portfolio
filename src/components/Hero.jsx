import heroData from "../data/hero";
import profile from "../assets/images/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section 
    id="home"
    className="min-h-[90vh] flex items-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Left Section */}
        <div>
          <p className="text-lg text-blue-400">{heroData.greeting}</p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            {heroData.name}
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-300">
            {heroData.role}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            {heroData.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={heroData.resume}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-6">
            
            <a 
                href={heroData.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 transition duration-300 hover:text-blue-400 hover:scale-110"
            >
                <FaGithub />
            </a>

            <a
                href={heroData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 transition duration-300 hover:text-blue-400 hover:scale-110"
            >
                <FaLinkedin />
            </a>

            <a
                href={heroData.social.email}
                className="text-3xl text-gray-400 transition duration-300 hover:text-blue-400 hover:scale-110"
            >
                <MdEmail />
            </a>

            </div>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {heroData.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
            <div className="cursor-pointer rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 p-1 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]">
                <img 
                src={profile}
                alt="Momin Mohammed Saad"
                className="h-64 w-64 rounded-full border-4 border-slate-950 object-cover object-top"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
