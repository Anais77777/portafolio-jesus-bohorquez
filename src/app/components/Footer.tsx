const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 text-center bg-[#121418] text-white/70 text-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Grid responsive con cambios según el tamaño de pantalla */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 items-center">
          {/* Full Stack Developer */}
          <div className="flex justify-center md:justify-start order-1">
            <p className="text-base">Full Stack Developer</p>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 order-3 md:order-2">
            <a
              href="/home"
              className="font-medium text-base md:text-lg hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="font-medium text-base md:text-lg hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/projects"
              className="font-medium text-base md:text-lg hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="font-medium text-base md:text-lg hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-end gap-5 order-2 md:order-3">
            <a
              href="https://github.com/bohorquez866"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg md:text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bohorquez866/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg md:text-xl"></i>
            </a>
            <a
              href="mailto:bohorquez866@gmail.com"
              className="text-white/60 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-lg md:text-xl"></i>
            </a>
          </div>
        </div>

        <div className="mt-4 md:mt-3 text-center">
          <p>© {currentYear} Jesús Bohorquez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
