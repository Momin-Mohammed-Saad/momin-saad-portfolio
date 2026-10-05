function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#18181B] px-6 py-8 text-center">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-slate-300">
          Momin Mohammed Saad
        </span>
        . All rights reserved.
      </p>

      <p className="mt-2 text-xs text-slate-500">
        Built with React, Vite & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;