"use client";

import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8 text-accent" />,
      title: "Lenguajes",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Kotlin", level: 75 },
        { name: "C#", level: 70 },
      ],
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Frameworks & Librerías",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js/Express", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "Django", level: 75 },
        { name: "Spring Boot", level: 80 },
        { name: "Angular", level: 70 },
        { name: "Vite", level: 75 },
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Desarrollo Móvil",
      skills: [
        { name: "Android (Kotlin)", level: 75 },
        { name: "Flutter/Dart", level: 70 },
        { name: "React Native", level: 65 },
      ],
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Herramientas & Otros",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "API REST", level: 85 },
        { name: "MySQL/PostgreSQL", level: 80 },
        { name: "Scrum/Agile", level: 75 },
        { name: "Docker", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Habilidades <span className="text-accent">Técnicas</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Dominio de múltiples tecnologías y frameworks para desarrollo full-stack,
            con énfasis en trabajo colaborativo y aprendizaje continuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              viewport={{ once: true }}
              className="bg-card-bg border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent/10 p-3 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-accent font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-accent/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-accent to-accent-dark rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Otras Competencias
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Trabajo en Equipo",
              "Proyectos Colaborativos",
              "Control de Versiones",
              "Metodologías Ágiles",
              "Problem Solving",
              "Aprendizaje Continuo",
              "Comunicación Efectiva",
              "Adaptabilidad",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                viewport={{ once: true }}
                className="bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium hover:bg-accent/20 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
