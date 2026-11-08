import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const showCVButton = true;

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 pb-12 bg-gray-100 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src="/images/profile-new.jpeg"
            alt="Fotografia de Edson Vaz"
            width={256}
            height={256}
            className="
              w-44 h-44
              sm:w-52 sm:h-52
              md:w-64 md:h-64
              shrink-0
              rounded-full
              object-cover
              object-[center_25%]
              border-4 border-cyan-500
              shadow-xl
              mb-6
            "
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Edson Vaz
          </h1>

          <h2 className="text-xl sm:text-2xl mt-3 text-cyan-600 dark:text-cyan-400">
            Engenheiro Informático
          </h2>

          <p className="mt-5 max-w-2xl text-sm sm:text-base leading-7 text-gray-700 dark:text-gray-400">
            <span className="block">
              Desenvolvimento de Software | Suporte Técnico | Redes Informáticas
            </span>

            <span className="block">
              Administração de Sistemas | Sistemas ERP
            </span>
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Ver Projetos
            </button>

            {showCVButton && (
              <a
                href="/cv/CV_Edson_Vaz.pdf"
                download
                className="border border-cyan-500 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-slate-950 transition-colors"
              >
                Baixar CV
              </a>
            )}
          </div>

          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/EdsonVazTI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar o GitHub de Edson Vaz"
              className="transition duration-300 hover:text-cyan-500 hover:scale-110"
            >
              <Github size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/edson-vaz-87a836412"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar o LinkedIn de Edson Vaz"
              className="transition duration-300 hover:text-cyan-500 hover:scale-110"
            >
              <Linkedin size={26} />
            </a>

            <a
              href="mailto:eng.edsonvaz@gmail.com?subject=Contacto%20através%20do%20Portfólio"
              aria-label="Enviar email para Edson Vaz"
              className="transition duration-300 hover:text-cyan-500 hover:scale-110"
            >
              <Mail size={26} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;