"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h2 className="text-accent text-xl md:text-2xl font-mono mb-2">
              Hola, soy
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Andrés Alexander
              <br />
              <span className="text-accent">Huancahuari Q.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto"
          >
            Desarrollador de Software | Estudiante de TECSUP
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            Apasionado por crear soluciones tecnológicas innovadoras con experiencia en
            desarrollo full-stack, trabajo colaborativo y múltiples frameworks modernos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center mb-12"
          >
            <a
              href="https://github.com/codedev-AlexHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andres-huancahuari/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="text-accent animate-bounce block">
              <ChevronDown size={32} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
