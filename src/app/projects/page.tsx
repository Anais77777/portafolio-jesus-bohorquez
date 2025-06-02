"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryButtons from "../components/CategoryButtons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Datos de proyectos
  const projects = [
    {
      id: 1,
      category: "Web App",
      title: "Idead tweet",
      description:
        "What does the app do? Turn any idea or tweet into a complete Twitter/X thread, instantly. Write effective threads in seconds, even if you're not a writer.",
      technologies: [
        "Next.js & Middleware ",
        "Nest.js",
        "Tailwind",
        "PostgreSQL",
      ],
      link: "https://tweettothread.bohorquez.dev/",
    },
    {
      id: 2,
      category: "Web App",
      title: "Tracker",
      description:
        "Check official and market rates in Venezuela, updated automatically.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Firebase"],
      link: "https://monedacambio.bohorquez.dev/",
    },
    {
      id: 3,
      category: "Dashboard",
      title: "Project 3",
      description:
        "Mobile-first dashboard for tracking fitness goals and nutrition with custom charts and progress visualization.",
      technologies: ["Vue.js", "Express", "Chart.js", "PostgreSQL"],
      link: "#",
    },
    {
      id: 4,
      category: "API Service",
      title: "Project 4",
      description:
        "API service for natural language processing tasks including sentiment analysis and text classification.",
      technologies: ["Python", "Flask", "TensorFlow", "Docker"],
      link: "#",
    },
  ];

  // Categorías para filtrado
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Proyectos filtrados
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <main className="pt-32 pb-16 bg-[#121212]">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Componente de botones de categoría */}
        <CategoryButtons
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Página principal */}
        <motion.h1
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </motion.h1>

        {/* Grid de proyectos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-[#1b1b3a] rounded-xl p-6 hover:bg-[#242450] transition-all duration-300 border border-[#2a2e3a] hover:border-[#4facfe]"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7)",
                }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                layout
              >
                {/* Categoría y botón */}
                <div className="flex justify-between items-center mb-3">
                  <motion.span
                    className="text-[#4facfe] text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.span
                    className="bg-gradient-to-r from-[#4facfe] to-[#7f78ff] text-white text-xs px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Featured
                  </motion.span>
                </div>

                {/* Título */}
                <motion.h2
                  className="text-2xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h2>

                {/* Descripción */}
                <motion.p
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                {/* Tecnologías */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="bg-[#0d0d1f] text-gray-300 text-xs px-3 py-1 rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.3 + index * 0.05 },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Botón Ver proyecto */}
                <motion.a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-[#4facfe] to-[#7f78ff] text-white px-4 py-2 rounded-md hover:opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project <span className="ml-2">→</span>
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
