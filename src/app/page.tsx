"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121418] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl w-full mt-8">
        {/* Nombre con gradiente */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent"
        >
          JESÚS BOHORQUEZ
        </motion.h1>

        {/* Foto de perfil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-[240px] h-[250px] mb-14"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] p-1.5">
            <div className="absolute inset-0.5 rounded-full overflow-hidden">
              <Image
                src="/Jesus.jpeg"
                alt="Jesús Bohorquez"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Título profesional */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-white font-semibold mb-4"
        >
          Full Stack Developer
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-lg mb-14 max-w-2xl mx-auto"
        >
          Specializing in building Modern Web experiences with{" "}
          <span className="bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent font-medium">
            React
          </span>
          ,{" "}
          <span className="bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent font-medium">
            Next.js
          </span>
          , and{" "}
          <span className="bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent font-medium">
            TypeScript
          </span>
          .
        </motion.p>

        {/* Botones de navegación */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full border border-[#7f78ff] text-white font-medium inline-block min-w-[140px] hover:bg-gradient-to-r hover:from-[#4facfe] hover:via-[#7f78ff] hover:to-[#6a82fb] hover:border-[#7f78ff] transition-all duration-300"
            >
              About Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-[#7f78ff] text-white font-medium inline-block min-w-[140px] hover:bg-gradient-to-r hover:from-[#4facfe] hover:via-[#7f78ff] hover:to-[#6a82fb] hover:border-[#7f78ff] transition-all duration-300"
            >
              Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border border-[#7f78ff] text-white font-medium inline-block min-w-[140px] hover:bg-gradient-to-r hover:from-[#4facfe] hover:via-[#7f78ff] hover:to-[#6a82fb] hover:border-[#7f78ff] transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Iconos sociales */}
        <div className="flex justify-center gap-8">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.2 }}
            href="https://github.com/bohorquez866"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4facfe] transition-colors duration-300"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-2xl"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/bohorquez866/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4facfe] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.2 }}
            href="mailto:bohorquez866@gmail.com"
            className="text-white hover:text-[#4facfe] transition-colors duration-300"
            aria-label="Email"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
