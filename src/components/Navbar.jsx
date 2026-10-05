import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0B1120]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-tight text-slate-100 transition-colors duration-300 hover:text-blue-400 sm:text-2xl"
        >
          <span className="text-blue-400">&lt;</span>
          Momin Saad
          <span className="text-blue-400"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition duration-300 hover:border-blue-500 hover:text-blue-400 lg:hidden"
        >
          {isOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-[#0B1120] lg:hidden">
          <ul className="mx-auto max-w-7xl px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-slate-800/60 py-3 text-sm font-medium text-slate-400 transition-colors duration-300 last:border-b-0 hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;