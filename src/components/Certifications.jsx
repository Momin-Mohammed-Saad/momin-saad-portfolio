import certificationsData from "../data/certifications";

import ciscoLogo from "../assets/icons/cisco.png";
import ibmLogo from "../assets/icons/ibm.png";
import relianceLogo from "../assets/icons/reliance.png";

const logos = {
  Cisco: ciscoLogo,
  IBM: ibmLogo,
  "Reliance Foundation": relianceLogo,
};

function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-24 text-white"
    >
      {/* Section Heading */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Professional Development
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Certifications
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {certificationsData.map((certificate) => {
          const logo = logos[certificate.issuer];

          return (
            <div
              key={certificate.id}
              className="group rounded-2xl border border-slate-800 bg-[#0F172A]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start gap-4">
                {/* Issuer Logo */}
                {logo && (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={logo}
                      alt={`${certificate.issuer} logo`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}

                {/* Certificate Details */}
                <div className="min-w-0 flex-1">
                  {certificate.title && (
                    <h3 className="text-xl font-semibold leading-snug text-white">
                      {certificate.title}
                    </h3>
                  )}

                  {certificate.issuer && (
                    <p className="mt-1 text-slate-400">
                      {certificate.issuer}
                    </p>
                  )}

                  {certificate.year && (
                    <p className="mt-1 text-sm font-medium text-blue-400">
                      {certificate.year}
                    </p>
                  )}
                </div>
              </div>

              {/* Certificate Link */}
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  View Certificate
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;