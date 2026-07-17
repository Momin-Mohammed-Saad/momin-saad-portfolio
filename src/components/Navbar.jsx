function Navbar() {
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
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a 
        href="#home"
        className="text-2xl font-bold text-blue-400 transition-colors duration-300 hover:text-white"
        >
          {"<Momin Saad />"}
        </a>
        
        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 transition duration-300 hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;