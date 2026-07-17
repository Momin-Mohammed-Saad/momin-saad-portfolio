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
      <h2 className="mb-12 text-center text-4xl font-bold">
        Certifications
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {certificationsData.map((certificate) => (
            <div 
            key={certificate.id}
            className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
            <div className="mb-4 flex items-center gap-4">
                <img
                    src={logos[certificate.issuer]}
                    alt={certificate.issuer}
                    className="h-12 w-12 rounded-lg bg-white p-2 object-contain transition-transform duration-300 group-hover:scale-110"
                />

                <div>
                    <h3 className="text-xl font-semibold">
                        {certificate.title}
                    </h3>

                    <p className="text-gray-400">
                        {certificate.issuer}
                    </p>

                    <p className="text-blue-400">
                        {certificate.year}
                    </p>

                </div>
            </div>

            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-700"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;