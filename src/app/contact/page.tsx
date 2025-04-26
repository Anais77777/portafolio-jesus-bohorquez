"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

//Formulario
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    alert("Thank you for your message. I'll get back to you soon!");

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
      info: "Jesús Bohorquez",
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
    <main className="pt-32 pb-16 bg-[#121212]">
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

        <motion.p
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </motion.p>

        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-xl font-bold text-center mb-6 text-blue-400"
            variants={itemVariants}
          >
            Contact Methods
          </motion.h2>

          <div className="grid grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(79, 172, 254, 0.6)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <i className={`${method.icon} text-white text-lg`}></i>
                </motion.div>
                <h3 className="font-bold text-white text-sm mb-1">
                  {method.title}
                </h3>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-xs md:text-sm hover:text-blue-400 transition-colors"
                >
                  {method.info}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-[#1a1d23] rounded-lg p-6 md:p-8 mb-12 border border-[#2a2e3a]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#242836] border border-[#2a2e3a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-1 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#242836] border border-[#2a2e3a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-300 mb-1 text-sm"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#242836] border border-[#2a2e3a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-1 text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-[#242836] border border-[#2a2e3a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="px-8 py-3 rounded-md bg-gradient-to-r from-[#4facfe] to-[#7f78ff] text-white font-medium text-base hover:opacity-90 transition-all duration-300"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -15px rgba(79, 172, 254, 0.7)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
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
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#4facfe] to-[#7f78ff] text-white font-medium text-lg hover:opacity-90 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -15px rgba(79, 172, 254, 0.7)",
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
