const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 text-center bg-[#121418] text-white/70 text-sm border-t border-white/10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-3 items-center">
          <div className="flex justify-center">
            <p className="text-base">Full Stack Developer</p>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="/home"
              className="font-medium text-xl hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="font-medium text-xl hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/projects"
              className="font-medium text-xl hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="font-medium text-xl hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/bohorquez866"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bohorquez866/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:bohorquez866@gmail.com"
              className="text-white/60 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p>© {currentYear} Jesús Bohorquez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
