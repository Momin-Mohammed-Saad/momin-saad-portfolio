import contactData from "../data/contact";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24 text-white"
    >
      {/* Section Header */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Let's Connect
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {contactData.title}
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
          {contactData.description}
        </p>
      </div>

      {/* Availability */}
      <div className="mx-auto mb-8 max-w-4xl rounded-2xl border border-blue-500/20 bg-[#0F172A]/70 p-6 text-center transition-all duration-300 hover:border-blue-500/40">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10">
            <FaBriefcase className="text-blue-400" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Current Availability
            </p>

            <p className="mt-1 font-semibold text-slate-200">
              {contactData.availability}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Email */}
        {contactData.email && (
          <a
            href={`mailto:${contactData.email}`}
            className="group rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <FaEnvelope className="text-xl text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Email
                </h3>

                <p className="mt-1 break-all text-sm text-slate-400">
                  {contactData.email}
                </p>
              </div>
            </div>
          </a>
        )}

        {/* GitHub */}
        {contactData.github && (
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <FaGithub className="text-xl text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  GitHub
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  View my projects
                </p>
              </div>
            </div>
          </a>
        )}

        {/* LinkedIn */}
        {contactData.linkedin && (
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <FaLinkedin className="text-xl text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  LinkedIn
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Connect with me
                </p>
              </div>
            </div>
          </a>
        )}

        {/* Resume */}
        {contactData.resume && (
          <a
            href={contactData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <FaFilePdf className="text-xl text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Resume
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  View my resume
                </p>
              </div>
            </div>
          </a>
        )}
      </div>

      {/* Additional Information */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Location */}
        {contactData.location && (
          <div className="rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <FaMapMarkerAlt className="text-xl text-blue-400" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </p>

                <p className="mt-1 font-medium text-slate-200">
                  {contactData.location}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Preferred Roles */}
        {contactData.roles?.length > 0 && (
          <div className="rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Interested In
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {contactData.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-slate-700 bg-[#18181B] px-3 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-blue-500/50 hover:text-blue-400"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;