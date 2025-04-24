import Image from "next/image";
import Link from "next/link";

export default function About() {
  // Habilidades y tecnologías
  const skills = [
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "React", icon: "fab fa-react" },
    { name: "Next.js", icon: "fas fa-code-branch" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "Express", icon: "fas fa-server" },
    { name: "GraphQL", icon: "fas fa-project-diagram" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "UX", icon: "fas fa-user-circle" },
    { name: "Vue.js", icon: "fab fa-vuejs" },
    { name: "GitHub Action", icon: "fab fa-github" },
    { name: "Cypress", icon: "fas fa-vial" },
    { name: "RESTful APIs", icon: "fas fa-network-wired" },
  ];

  // Experiencia laboral
  const experiences = [
    {
      position: "Fullstack TypeScript Developer",
      company: "Altimetrik Uruguay",
      period: "2024 - Present",
      achievements: [
        "Delivered enterprise web apps, reducing frontend bugs by ~30%. Improved API response time from 450ms to 290ms. Enhanced testing coverage with Jest and React Testing Library.",
      ],
    },
    {
      position: "Fullstack TypeScript Developer",
      company: "ShiftRx",
      period: "2024",
      achievements: [
        "Cut SSR load time from ~5s to ~3s with Next.js optimizations. Reduced cloud costs ~20% using Azure Functions. Improved CI/CD time by 25% using Azure DevOps.",
      ],
    },
    {
      position: "Fullstack  TypeScript Developer (Vue.js)",
      company: "Cidenet",
      period: "2022 - 2023",
      achievements: [
        "● Built ridesharing app using AWS (Lambda, API Gateway, EC2, S3). Reduced DB latency by 50% with DynamoDB optimization.Maintained 99.99% uptime with AWS autoscaling.",
      ],
    },
    {
      position: "Fullstack TypeScript Developer",
      company: "Deloitte",
      period: "2022 - 2023",
      achievements: [
        "Integrated React frontend with Node.js/.NET backend on Azure. Reduced API latency by 40% using Azure Functions. Streamlined CI/CD using Azure DevOps pipelines.",
      ],
    },
    {
      position: "Fullstack  Developer (Vue.js)",
      company: "GlobalPro Fit",
      period: "2021 - 2022",
      achievements: [
        "Boosted user retention by 20% through UI improvements. Reduced bounce rate 30% by enhancing mobile performance.",
      ],
    },
    {
      position: "Fullstack Developer (Vue.js)",
      company: "Capybara Technologies",
      period: "2020 - 2021",
      achievements: [
        "Refactored legacy code, reducing tech debt by 40%. Implemented Vitest and Jest for frontend testing.",
      ],
    },
    {
      position: "Fullstack Developer",
      company: "Festival",
      period: "2020",
      achievements: [
        "Built client sites increasing conversion by 15%. Integrated analytics tools to drive UX decisions.",
      ],
    },
  ];

  return (
    <main className="pt-20 pb-16 bg-[#121418]">
      <div className="container mx-auto max-w-7xl px-10">
        {/* Título de la sección */}
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Contenedor principal con diseño de dos columnas */}
        <div className="flex flex-col lg:flex-row gap-10 mb-20">
          {/* Columna izquierda: Perfil y descripción */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center">
              {/* Imagen de perfil */}
              <div className="w-48 h-48 relative flex-shrink-0 mb-8">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-transparent relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] p-1">
                    <div className="absolute inset-0.5 rounded-full overflow-hidden">
                      <Image
                        src="/Jesus.jpeg"
                        alt="Jesús Bohorquez"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Información personal */}
              <div className="text-gray-300 text-center max-w-lg mx-auto">
                <h2 className="text-white text-2xl font-medium mb-6">
                  Hi! I'm Jesús, a full-stack developer with over five years of
                  experience solving complex technical challenges.
                </h2>
                <p className="mb-6 text-lg">
                  I create applications that not only solve problems but also
                  provide seamless and engaging user experiences.
                </p>

                {/* Botones de redes sociales */}
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href="https://github.com/bohorquez866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-[#7f78ff] text-white hover:bg-[#4facfe] hover:border-[#4facfe] transition-all duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/bohorquez866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-[#7f78ff] text-white hover:bg-[#4facfe] hover:border-[#4facfe] transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:bohorquez866@gmail.com"
                    className="px-6 py-3 rounded-full border border-[#7f78ff] text-white hover:bg-[#4facfe] hover:border-[#4facfe] transition-all duration-300"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Separador vertical */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-[#7f78ff] to-transparent"></div>
          </div>

          {/* Columna derecha: Habilidades */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1a1d23] rounded-lg p-3 flex items-center gap-2 hover:bg-[#242836] transition-all duration-300 border border-[#2a2e3a]"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`${skill.icon} text-[#4facfe]`}></i>
                  </div>
                  <span className="text-gray-200 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de experiencia - Mi Journey */}
        <div className="mt-24 mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent">
            My Journey
          </h2>

          <div className="relative flex flex-col items-center">
            {/* Línea de tiempo vertical */}
            <div className="absolute h-full w-0.5 bg-gradient-to-b from-[#4facfe] via-[#7f78ff] to-[#6a82fb] left-1/2 transform -translate-x-1/2"></div>

            {/* Experiencias alternando lados */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex w-full items-center mb-20 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Circulo indicador en la línea de tiempo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4facfe]"></div>

                {/* Tarjeta de experiencia, alternando lados */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#2a2e3a] hover:border-[#4facfe] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-[#4facfe] font-medium mb-1">
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="space-y-2 mt-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-gray-300 flex"
                        >
                          <span className="text-[#4facfe] mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
