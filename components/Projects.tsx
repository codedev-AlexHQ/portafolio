"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  liveUrl?: string;
  category: string;
  featured?: boolean;
  badge?: string;
  highlights?: string[];
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "ULenguage - Aplicación de Traducción y Guía Cultural Quechua",
      description:
        "Proyecto de tesis: Aplicación móvil multiplataforma para facilitar la comunicación entre turistas y comunidades quechuas en Cusco. Implementa traducción trilingüe (Español-Inglés-Quechua cusqueño) mediante OCR, diccionario interactivo con pronunciación de audio, guía cultural contextual y modo offline. Arquitectura de microservicios con backend en Node.js/Express desplegado en Vercel y frontend móvil en Flutter.",
      technologies: ["Flutter", "Dart", "Node.js", "Express", "JavaScript", "PostgreSQL", "OCR", "Vercel"],
      githubUrls: [
        { label: "Backend", url: "https://github.com/Tomas-coder-dev/ULenguage-Backend" },
        { label: "Frontend", url: "https://github.com/Tomas-coder-dev/ULenguage-Frontend" },
        { label: "Admin Panel", url: "https://github.com/codedev-AlexHQ/ULenguage-Admin" },
      ],
      liveUrl: "https://u-lenguage-backend.vercel.app",
      category: "Full-Stack",
      featured: true,
      badge: "Proyecto de Tesis",
      highlights: [
        "Arquitectura de microservicios con 3 repositorios independientes",
        "Implementación de OCR para captura y traducción de texto en tiempo real",
        "Base de datos optimizada para estructura trilingüe",
        "Sistema de autenticación y roles para panel administrativo",
        "Modo offline con almacenamiento local para zonas sin conectividad",
        "Integración de audio para pronunciación correcta del quechua",
        "Deploy automatizado en Vercel con CI/CD",
      ],
    },
    {
      title: "App Farmacia - Sistema de Gestión con Autenticación JWT",
      description:
        "Sistema full-stack de gestión farmacéutica con arquitectura de monorepo. Implementa autenticación robusta con JWT, sistema de roles granular (Admin/Moderador/Usuario), y ORM Sequelize con soporte dual para MySQL (desarrollo) y PostgreSQL (producción). Backend con Node.js/Express siguiendo arquitectura MVC, frontend en React con manejo de estado y rutas.",
      technologies: ["Node.js", "Express", "Sequelize", "React", "JWT", "bcrypt", "PostgreSQL", "MySQL"],
      githubUrl: "https://github.com/codedev-AlexHQ/app-farmacia",
      category: "Full-Stack",
      featured: true,
      highlights: [
        "Arquitectura monorepo con backend y frontend separados",
        "Sistema de autenticación JWT con refresh tokens",
        "ORM Sequelize con migraciones automáticas",
        "Middleware personalizado para autorización por roles",
        "Configuración dual de base de datos (MySQL local / PostgreSQL producción)",
        "Scripts de inicialización automática de base de datos",
        "Documentación exhaustiva de deployment y troubleshooting",
        "Variables de entorno para múltiples ambientes",
        "CORS configurado para producción",
      ],
    },
    {
      title: "Multi-Limp - Sistema de Gestión Empresarial",
      description:
        "Sistema de gestión empresarial desarrollado durante experiencia laboral en Cimark Comunicación Corporativa S.A.C. Responsable de la migración tecnológica completa de Angular a arquitectura moderna con Node.js (backend) y React (frontend). Implementación de API REST optimizada, modernización de módulos del sistema, mejora significativa en velocidad de respuesta, y rediseño completo de la interfaz de usuario para mejor UX.",
      technologies: ["TypeScript", "React", "PHP", "Node.js", "Express", "API REST"],
      githubUrls: [
        { label: "Backend", url: "https://github.com/harold18m/multilimp-backend" },
        { label: "Frontend", url: "https://github.com/harold18m/multilimp-frontend" },
      ],
      liveUrl: "https://multilimpsac.vercel.app",
      category: "Full-Stack",
      featured: true,
      badge: "Experiencia Laboral",
      highlights: [
        "Migración exitosa de stack tecnológico (Angular → React)",
        "Modernización de arquitectura backend",
        "Optimización de API REST con mejor performance",
        "Mejoras de UX/UI con React",
        "Deploy en producción en Vercel",
        "Experiencia real en entorno empresarial",
      ],
    },
    {
      title: "TecUtopiaImport - Sistema de Importación y Gestión",
      description:
        "Sistema completo de gestión e importación desarrollado con Laravel 11, implementando arquitectura MVC robusta, integración con Cloudinary para gestión optimizada de imágenes en la nube, y sistema de autenticación y autorización. Utiliza Eloquent ORM para operaciones de base de datos, Vite para build del frontend, y sigue las mejores prácticas de Laravel para desarrollo de aplicaciones enterprise.",
      technologies: ["PHP", "Laravel 11", "Cloudinary", "Vite", "MySQL", "Blade"],
      githubUrl: "https://github.com/codedev-AlexHQ/TecUtopiaImport",
      category: "Full-Stack",
      featured: true,
      highlights: [
        "Laravel 11 con PHP 8.2+",
        "Integración con Cloudinary para CDN y optimización de imágenes",
        "Eloquent ORM con relaciones complejas",
        "Sistema de autenticación Laravel UI",
        "Vite para hot module replacement",
        "Arquitectura MVC escalable",
        "Migraciones y seeders para base de datos",
        "Panel administrativo completo",
      ],
    },
    {
      title: "NowWatch - Plataforma de Streaming IPTV",
      description:
        "Aplicación de streaming IPTV desarrollada en equipo siguiendo metodología ágil. Backend robusto con Spring Boot implementando arquitectura de microservicios, autenticación segura de usuarios, y consumo eficiente de API externa (iptv-org/iptv) con miles de canales globales. Frontend con React para experiencia moderna y fluida. Organización de contenido por categorías (países, géneros, idiomas), búsqueda personalizada, sistema de favoritos, y soporte para listas M3U.",
      technologies: ["Java", "Spring Boot", "React", "API REST", "PostgreSQL", "Git"],
      githubUrl: "https://github.com/codedev-AlexHQ/C24_4_2024-2_G2B_nowwatch",
      category: "Full-Stack",
      badge: "Trabajo en Equipo",
      highlights: [
        "Spring Boot con arquitectura de microservicios",
        "Integración con API externa de IPTV",
        "Gestión de grandes volúmenes de datos en tiempo real",
        "Sistema de autenticación y gestión de usuarios",
        "Soporte multiplataforma (web y móvil)",
        "Trabajo colaborativo con Git (branching strategy, PRs, code reviews)",
        "Optimización de streaming y ancho de banda",
      ],
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-card-bg border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all hover:transform hover:scale-[1.02] flex flex-col"
            >
              {/* Badges Header */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                    ⭐ Featured
                  </span>
                )}
                {project.badge && (
                  <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent/5 text-accent border border-accent/20 px-2 py-1 rounded hover:bg-accent/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights Section */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-4">
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors mb-2"
                  >
                    {expandedProject === index ? (
                      <>
                        <ChevronUp size={16} />
                        Ocultar highlights técnicos
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        Ver highlights técnicos ({project.highlights.length})
                      </>
                    )}
                  </button>
                  {expandedProject === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-foreground/60 space-y-1 pl-4 border-l-2 border-accent/20"
                    >
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="leading-relaxed">
                          • {highlight}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-accent/10">
                {/* Multiple GitHub Links */}
                {project.githubUrls && project.githubUrls.length > 0 && (
                  <>
                    {project.githubUrls.map((github, i) => (
                      <a
                        key={i}
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-1 text-sm"
                      >
                        <Github size={16} />
                        {github.label}
                      </a>
                    ))}
                  </>
                )}
                
                {/* Single GitHub Link */}
                {project.githubUrl && !project.githubUrls && (
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

                {/* Live Demo Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 hover:border-accent/50 px-3 py-1.5 rounded transition-all flex items-center gap-1 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo en Vivo
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
