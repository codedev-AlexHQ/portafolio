"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "NowWatch - Sistema de Gestión",
      description:
        "Proyecto grupal de sistema de gestión desarrollado con Spring Boot. Trabajo colaborativo utilizando Git y GitHub para control de versiones.",
      technologies: ["Java", "Spring Boot", "Git", "GitHub"],
      githubUrl: "https://github.com/codedev-AlexHQ/C24_4_2024-2_G2B_nowwatch",
      category: "Backend",
    },
    {
      title: "Sistema Multi-Limp",
      description:
        "Sistema de gestión empresarial desarrollado durante experiencia laboral. Migración de Angular a arquitectura moderna con Node.js y React.",
      technologies: ["Node.js", "Express", "React", "API REST"],
      category: "Full-Stack",
    },
    {
      title: "Laravel Sistema de Gestión",
      description:
        "Sistema desarrollado con Laravel siguiendo arquitectura MVC. Implementación de autenticación y gestión de datos.",
      technologies: ["PHP", "Laravel", "MySQL"],
      githubUrl: "https://github.com/codedev-AlexHQ/laravel-s2-desnube",
      category: "Backend",
    },
    {
      title: "Django Admin API",
      description:
        "API administrativa desarrollada con Django REST Framework. Sistema de gestión con autenticación y permisos.",
      technologies: ["Python", "Django", "Django REST"],
      githubUrl: "https://github.com/codedev-AlexHQ/django-admin-api",
      category: "Backend",
    },
    {
      title: "Aplicaciones Móviles con Kotlin",
      description:
        "Desarrollo de aplicaciones móviles Android utilizando Kotlin. Implementación de interfaces modernas y funcionalidades nativas.",
      technologies: ["Kotlin", "Android", "Mobile Development"],
      githubUrl: "https://github.com/codedev-AlexHQ/ProgMov",
      category: "Mobile",
    },
    {
      title: "CRUD API con Flutter",
      description:
        "Aplicación móvil con Flutter implementando operaciones CRUD mediante API REST. Gestión de estado y consumo de servicios.",
      technologies: ["Dart", "Flutter", "API Integration"],
      githubUrl: "https://github.com/codedev-AlexHQ/CRUD_API_Lab16",
      category: "Mobile",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card-bg/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mis <span className="text-accent">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo full-stack,
            trabajo colaborativo y dominio de múltiples tecnologías.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-card-bg border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent/5 text-accent border border-accent/20 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    Código
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
