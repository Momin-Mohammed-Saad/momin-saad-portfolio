function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-gray-400">
      <p>
        © {new Date().getFullYear()} Momin Mohammed Saad. All rights reserved.
      </p>

      <p className="mt-2 text-sm">
        Built with React, Vite & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;