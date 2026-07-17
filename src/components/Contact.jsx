import contactData from "../data/contact";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-24 text-white"
    >
      <h2 className="mb-6 text-center text-4xl font-bold">
        {contactData.title}
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
        {contactData.description}
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <a
          href={`mailto:${contactData.email}`}
          className="group rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-3">
                <FaEnvelope className="text-2xl text-blue-400" />
                <h3 className="text-2xl text-blue-400 transition-transform duration-300 group-hover:scale-110">Email</h3>
            </div>
          
          <p className="mt-2 text-gray-400">
            {contactData.email}
          </p>
        </a>

        <a
          href={contactData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-3">
                <FaGithub className="text-2xl text-blue-400" />
                <h3 className="text-2xl text-blue-400 transition-transform duration-300 group-hover:scale-110">GitHub</h3>
            </div>
        </a>

        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-3">
                <FaLinkedin className="text-2xl text-blue-400" />
                <h3 className="text-2xl text-blue-400 transition-transform duration-300 group-hover:scale-110">LinkedIn</h3>
            </div>
        </a>

        <a
          href={contactData.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-3">
                <FaFilePdf className="text-2xl text-blue-400" />
                <h3 className="text-2xl text-blue-400 transition-transform duration-300 group-hover:scale-110">Resume</h3>
            </div>
        
        </a>

      </div>
    </section>
  );
}

export default Contact;