import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const mainLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const moreLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certifications" },
  ];

  const closeMenus = () => {
    setIsOpen(false);
    setMoreOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#18181B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenus}
          className="text-xl font-bold tracking-tight text-slate-100 transition-colors hover:text-blue-400 sm:text-2xl"
        >
          <span className="text-blue-400">&lt;</span>
          Momin Saad
          <span className="text-blue-400"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {mainLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* More Dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
              className="flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
            >
              More
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full mt-3 w-48 rounded-xl border border-slate-700 bg-[#0F172A] p-2 shadow-xl">
                {moreLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a
              href="#contact"
              className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition-colors hover:bg-blue-500 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition-colors hover:border-blue-500 hover:text-blue-400 lg:hidden"
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
        <div className="border-t border-slate-800 bg-[#18181B] lg:hidden">
          <ul className="mx-auto max-w-7xl px-6 py-4">
            {mainLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenus}
                  className="block border-b border-slate-800/60 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Mobile More Links */}
            <li>
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
                className="flex w-full items-center justify-between border-b border-slate-800/60 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
              >
                More
                <FiChevronDown
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div className="border-l border-slate-700 ml-2 pl-4">
                  {moreLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenus}
                      className="block py-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenus}
                className="mt-4 block rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-3 text-center text-sm font-semibold text-blue-400 transition-colors hover:bg-blue-500 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;