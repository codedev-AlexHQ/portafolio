"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "andres-huancahuari",
      link: "https://www.linkedin.com/in/andres-huancahuari/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "codedev-AlexHQ",
      link: "https://github.com/codedev-AlexHQ",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: "Lima, Perú",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card-bg/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto <span className="text-accent">&</span> Redes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
            Siempre estoy abierto a nuevas oportunidades y desafíos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card-bg border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all hover:transform hover:scale-105 h-full"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent/10 p-4 rounded-full mb-4 text-accent">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-accent">{info.value}</p>
                  </div>
                </a>
              ) : (
                <div className="bg-card-bg border border-accent/20 rounded-lg p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent/10 p-4 rounded-full mb-4 text-accent">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground/70">{info.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 rounded-lg p-8">
            <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-foreground/80 mb-6">
              Estoy disponible para nuevos proyectos y oportunidades laborales.
            </p>
            <a
              href="https://www.linkedin.com/in/andres-huancahuari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-dark text-black px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Conectemos en LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-accent/20 text-center"
        >
          <p className="text-foreground/60">
            © 2025 Andrés Alexander Huancahuari Q. - Desarrollado con{" "}
            <span className="text-accent">Next.js</span> y{" "}
            <span className="text-accent">TypeScript</span>
          </p>
          <p className="text-foreground/50 text-sm mt-2">
            Estudiante de TECSUP | En constante aprendizaje
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
