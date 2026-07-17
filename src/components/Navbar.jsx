function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          {"<Your Name />"}
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;