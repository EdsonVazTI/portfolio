import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";


function Hero() {

  return (

    <section
      id="hero"
      className="
min-h-screen
flex
items-center
pt-24

bg-gray-100
text-slate-900

dark:bg-slate-950
dark:text-white
"
>

      <div className="max-w-5xl mx-auto px-8 flex justify-center">

                    <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center text-center"
            >

              <img
                src="/images/profile.png"
                alt="Edson"
                className="w-56 md:w-72 rounded-full border-4 border-cyan-500 shadow-2xl mb-8"
              />

              <h1 className="text-6xl font-bold">
                Edson Vaz
              </h1>

              <h2 className="text-2xl mt-4 text-cyan-500 dark:text-cyan-400">
                Engenheiro Informático
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-gray-700
                  dark:text-gray-400
                  leading-8
                "
              >
                Desenvolvimento de Software | Suporte Técnico |
                Redes Informáticas | Administração de Sistemas |
                Sistemas ERP
              </p>

              <div className="mt-8 flex gap-4">

                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
                >
                  Ver Projetos
                </button>

                <a
                  href="/cv/CV_Edson_Vaz.pdf"
                  download
                  className="
                    border
                    border-cyan-500
                    px-6
                    py-3
                    rounded-lg
                    hover:bg-cyan-500
                    transition
                  "
                >
                  Baixar CV
                </a>

              </div>

              <div className="flex gap-5 mt-8">

                <a
                  href="https://github.com/EdsonVazTI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-cyan-400 hover:scale-110"
                >
                  <Github size={28} />
                </a>

                <a
                  href="https://www.linkedin.com/in/edson-vaz-87a836412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-cyan-400 hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>

                <a
                  href="mailto:eng.edsonvaz@gmail.com?subject=Contacto%20através%20do%20Portfólio"
                  className="transition duration-300 hover:text-cyan-400 hover:scale-110"
                >
                  <Mail size={28} />
                </a>

              </div>

            </motion.div>

       

      </div>

    </section>

  );

}

export default Hero;