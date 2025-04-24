"use client";

import { motion } from "framer-motion";

export default function Contact() {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Iconos con efectos de animación personalizados
  const contactMethods = [
    {
      title: "Email",
      icon: "fas fa-envelope",
      info: "bohorquez866@gmail.com",
      link: "mailto:bohorquez866@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: "fab fa-linkedin-in",
      info: "Connect Professionally",
      link: "https://www.linkedin.com/in/bohorquez866/",
    },
    {
      title: "GitHub",
      icon: "fab fa-github",
      info: "View My Projects",
      link: "https://github.com/bohorquez866",
    },
  ];

  // Servicios
  const services = [
    { name: "Web Development", color: "bg-[#1f52a4]" },
    { name: "Frontend Design", color: "bg-[#6f42c1]" },
    { name: "API Integration", color: "bg-[#1f52a4]" },
    { name: "Performance Tuning", color: "bg-[#0e7ac4]" },
  ];

  return (
    <main className="pt-20 pb-16 bg-[#121212]">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Encabezado principal */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>

        {/* Texto introductorio */}
        <motion.p
          className="text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </motion.p>

        {/* Métodos de contacto */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl font-bold text-center mb-10 text-blue-400"
            variants={itemVariants}
          >
            Contact Methods
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(79, 172, 254, 0.6)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <i className={`${method.icon} text-white text-2xl`}></i>
                </motion.div>
                <h3 className="font-bold text-white mb-2">{method.title}</h3>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {method.info}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sección "Let's Build Something Amazing Together" */}
        <motion.div
          className="bg-[#1b1b4a]/50 backdrop-blur-sm rounded-lg p-8 md:p-10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Let's Build Something Amazing Together
          </motion.h2>

          <motion.p
            className="text-gray-300 text-center mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Whether you need a web application, performance optimization, or
            technical consultation, I'm here to help turn your ideas into
            reality.
          </motion.p>

          {/* Servicios */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {services.map((service, index) => (
              <motion.span
                key={index}
                className={`px-4 py-2 rounded-full text-white ${service.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                {service.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Botón de contacto */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.a
              href="mailto:bohorquez866@gmail.com"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#4facfe] to-[#7f78ff] text-white font-medium hover:opacity-90 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -15px rgba(79, 172, 254, 0.7)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
