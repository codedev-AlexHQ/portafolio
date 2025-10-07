"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6 text-accent" />,
      title: "Desarrollador de Software",
      company: "Cimark Comunicación Corporativa S.A.C.",
      period: "Feb. 2025 - May. 2025",
      description: [
        "Migración de sistema Angular a Node.js con Express (backend) y React (frontend)",
        "Modernización de arquitectura y mejora de velocidad de respuesta",
        "Actualización de API REST y módulos del sistema",
        "Rediseño de interfaz de usuario con React para mejor UX",
        "Participación en reuniones semanales de colaboración",
      ],
    },
  ];

  const education = [
    {
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      title: "Diseño y Desarrollo de Software",
      institution: "TECSUP",
      period: "2023 - 2025",
      description: "Estudiante de 6to ciclo - Computer Software Technology/Technician",
    },
  ];

  const certifications = [
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Scrum Fundamentals Certified",
      issuer: "Vabro.ai and VMEdu.com",
      date: "Dic. 2024 - Mar. 2025",
      credentialId: "1060136",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre <span className="text-accent">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            En constante aprendizaje en el mundo de la programación, con experiencia en proyectos 
            grupales y colaborativos utilizando herramientas como Git y GitHub. Valoro el trabajo 
            en equipo y reconozco que observar y aprender de los demás me permite integrar esos 
            aprendizajes para potenciar mi propio desarrollo profesional.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Experiencia <span className="text-accent">Laboral</span>
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card-bg border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">{exp.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-accent font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-foreground/60 mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">
            <span className="text-accent">Educación</span>
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card-bg border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">{edu.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-foreground/60 mb-2">{edu.period}</p>
                    <p className="text-foreground/80">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Licencias y <span className="text-accent">Certificaciones</span>
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card-bg border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                    <p className="text-sm text-foreground/60 mb-2">{cert.date}</p>
                    <p className="text-sm text-foreground/70">
                      ID de la credencial: {cert.credentialId}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
