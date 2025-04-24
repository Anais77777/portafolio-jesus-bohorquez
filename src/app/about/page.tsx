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
    { name: "GitHub Actions", icon: "fab fa-github" },
    { name: "Cypress", icon: "fas fa-vial" },
    { name: "RESTful APIs", icon: "fas fa-network-wired" },
    { name: "Wordpress", icon: "fab fa-wordpress" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Azure", icon: "fab fa-accusoft" },
    { name: "Nuxt", icon: "fa-brands fa-think-peaks" },
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
        "Built ridesharing app using AWS (Lambda, API Gateway, EC2, S3). Reduced DB latency by 50% with DynamoDB optimization. Maintained 99.99% uptime with AWS autoscaling.",
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
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Título de la sección */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Contenedor principal con diseño de dos columnas */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-16 lg:mb-20">
          {/* Columna izquierda: Perfil y descripción */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center">
              {/* Imagen de perfil */}
              <div className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 relative flex-shrink-0 mb-6 lg:mb-8">
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
                <h2 className="text-white text-xl md:text-2xl font-medium mb-4 lg:mb-6">
                  Hi! I&apos;m Jesús, a full-stack developer with over five
                  years of experience solving complex technical challenges.
                </h2>
                <p className="mb-4 lg:mb-6 text-base md:text-lg">
                  I create applications that not only solve problems but also
                  provide seamless and engaging user experiences.
                </p>

                {/* Botones de redes sociales */}
                <div className="flex justify-center gap-2 md:gap-4 mt-4 md:mt-6">
                  <a
                    href="https://github.com/bohorquez866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-[#7f78ff] text-white hover:bg-[#4facfe] hover:border-[#4facfe] transition-all duration-300 text-sm md:text-base"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/bohorquez866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-[#7f78ff] text-white hover:bg-[#4facfe] hover:border-[#4facfe] transition-all duration-300 text-sm md:text-base"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:bohorquez866@gmail.com"
                    className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-[#7f78ff] text-white hover:bg-[#4facfe] hover:border-[#4facfe] transition-all duration-300 text-sm md:text-base"
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 max-w-2xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1a1d23] rounded-lg p-2 md:p-3 flex items-center gap-1 md:gap-2 hover:bg-[#242836] transition-all duration-300 border border-[#2a2e3a]"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <i className={`${skill.icon} text-[#4facfe]`}></i>
                  </div>
                  <span className="text-gray-200 text-xs md:text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de experiencia - Mi Journey */}
        <div className="mt-16 md:mt-24 mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center bg-gradient-to-r from-[#4facfe] via-[#7f78ff] to-[#6a82fb] bg-clip-text text-transparent">
            My Journey
          </h2>

          <div className="relative flex flex-col items-center">
            {/* Línea de tiempo vertical */}
            <div className="absolute h-full w-0.5 bg-gradient-to-b from-[#4facfe] via-[#7f78ff] to-[#6a82fb] left-1/2 transform -translate-x-1/2"></div>

            {/* Experiencias alternando lados */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex w-full items-center mb-12 md:mb-20 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Circulo indicador en la línea de tiempo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#4facfe]"></div>

                {/* Tarjeta de experiencia, alternando lados */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div className="bg-[#1a1d23] rounded-lg p-4 md:p-6 border border-[#2a2e3a] hover:border-[#4facfe] transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-[#4facfe] text-sm md:text-base font-medium mb-1">
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2 mt-2 md:mt-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-gray-300 text-sm md:text-base flex items-start"
                        >
                          <span className="text-[#4facfe] mr-2 flex-shrink-0">
                            •
                          </span>
                          <span
                            style={{
                              overflowWrap: "break-word",
                              wordWrap: "break-word",
                            }}
                          >
                            {achievement}
                          </span>
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
