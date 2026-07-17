import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectSlider({ images = [], featured }) {

    const [current, setCurrent] = useState(0);

        const prevImage = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrent((prev) =>
            (prev + 1) % images.length
        );
    };

    useEffect(() => {

        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);

    }, [images]);

    if (!images.length) return null;

    return (

    <div className="relative">

          <img
              src={images[current]}
              alt=""
              className={`w-full ${
                  featured ? "h-[700px]" : "h-[400px]"
              } object-cover object-top transition-all duration-700`}
          />

            {/* botões */}
            {images.length > 1 && (
                <>

                    {/* seta esquerda */}
                    <button
                        onClick={prevImage}
                       className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2

                                bg-black/50
                                hover:bg-black/70

                                text-white

                                p-3
                                rounded-full

                                backdrop-blur-md
                                transition
                                duration-300
                                shadow-lg
                                "
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* seta direita */}
                    <button
                        onClick={nextImage}
                        className="
absolute
right-4
top-1/2
-translate-y-1/2

bg-black/50
hover:bg-black/70

text-white

p-3
rounded-full

backdrop-blur-md
transition
duration-300
shadow-lg
"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* bolinhas (dot indicators) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2
      flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${current === idx
                                        ? "bg-white scale-125"
                                        : "bg-white/50 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>

                </>
            )}

        </div>

);
}


const projects = [
  {
    title: "SI-MS RS²Lab",
    category: "Projeto Final de Curso",
    year: "May 2025 – Dec 2025",
    grade: "18 Valores",
    description:
      "Sistema Inteligente de Monitorização e Segurança com Reconhecimento Facial Integrado desenvolvido para o RS²Lab da Universidade de Cabo Verde.",
    images: [
  "/images/simsrs2lab1.png",
  "/images/simsrs2lab2.png",
  "/images/simsrs2lab3.png",
  "/images/simsrs2lab4.png",
  "/images/simsrs2lab5.png",
  "/images/simsrs2lab6.png",
  "/images/simsrs2lab7.png",
  "/images/simsrs2lab8.png",
  "/images/simsrs2lab9.png",
  "/images/simsrs2lab10.png",
  "/images/simsrs2lab11.png",
  "/images/simsrs2lab12.png",
  "/images/simsrs2lab13.png",
  "/images/simsrs2lab14.png"
],
    technologies: [
      "Python",
      "React",
      "Django REST",
      "Face-api.js",
      "ESP32",
      "MQTT",
      "Node-RED",
      "MySQL"
    ],
    github: "https://github.com/EdsonVazTI",
    featured: true
  },

  {
    title: "ICUB",
    category: "Projeto Académico",
    year: "Apr 2024 – Jun 2024",
    description:
      "Sistema de Gestão da Incubadora de Inovação da Universidade de Cabo Verde.",
    images: [
    "/images/icub1.png",
    "/images/icub2.png",
    "/images/icub3.png",
    "/images/icub4.png",
    "/images/icub5.png",
    "/images/icub6.png",
    "/images/icub7.png"
],
    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL"
    ],
    github: "https://github.com/EdsonVazTI"
  },

  {
    title: "Guia Turismo Responsável",
    category: "Projeto Académico",
    year: "Nov 2023 – Jan 2024",
    description:
      "Aplicação Android para promoção do turismo responsável.",
    images: [
        "/images/gtr.png"
    ],
    technologies: [
      "Kotlin",
      "Java",
      "SQLite",
      "Android Studio"
    ],
    github: "https://github.com/EdsonVazTI"
  },

  {
    title: "Sistema de Gestão de Biblioteca",
    category: "Projeto Académico",
    year: "Apr 2023 – Jun 2023",
    description:
      "Sistema desktop para gestão de bibliotecas.",
    images: [
        "/images/sgdb1.png",
        "/images/sgdb2.png"
    ],
    technologies: [
      "Java",
      "SQL Server",
      "SceneBuilder",
      "NetBeans"
    ],
    github: "https://github.com/EdsonVazTI"
  },

  {
    title: "Attack on Titan 2D",
    category: "Projeto Académico",
    year: "Nov 2024 – Jan 2025",
    description:
      "Jogo 2D de ação e sobrevivência desenvolvido em Unity.",
    images: [
        "/images/aot1.png",
        "/images/aot2.png"
    ],
    technologies: [
      "Unity",
      "C#"
    ],
    github: "https://github.com/EdsonVazTI"
  }
];

function Projects(){

    return(

      <section
      id="projects"
      className="
      py-24

      bg-gray-100
      text-slate-900

      dark:bg-slate-900
      dark:text-white
      "
      >

    <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-6">

        <span className="text-slate-900 dark:text-white">
            Meus
        </span>

        {" "}

        <span className="text-cyan-400">
            Projetos
        </span>

    </h2>

              <p
      className="
      text-center
      text-gray-600
      dark:text-gray-400
      max-w-3xl
      mx-auto
      mb-16
      "
      >

            Uma seleção de projetos académicos, profissionais e pessoais que demonstram
            competências em desenvolvimento Full Stack, Inteligência Artificial, IoT, aplicações Web,
            Mobile e Desktop, utilizando tecnologias modernas para resolver problemas reais.

        </p>

        <div className="grid md:grid-cols-2 gap-10">

           {projects.map((project, index) => (

                <motion.div

                    key={project.title}

                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                        className={`
    rounded-xl
    overflow-hidden
    shadow-lg

    bg-white
    border
    border-gray-200

    dark:bg-slate-950
    dark:border-none

    ${project.featured ? "md:col-span-2" : ""}
    `}

                >

    <div>

<ProjectSlider
    images={project.images}
    featured={project.featured}
/>

        <div className="p-6">

  <h3
  className="
  text-2xl
  font-bold
  text-left

  text-slate-900
  dark:text-white
  "
  >

  {project.title}

</h3>

<div className="flex flex-wrap items-center gap-3 mt-2">

    <p className="text-cyan-400 text-sm font-medium">
        {project.category} • {project.year}
    </p>

    {project.grade && (
        <span className="bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            ⭐ {project.grade}
        </span>
    )}

</div>
                        
                        <p
className="
mt-4
text-justify
leading-7

text-gray-700
dark:text-gray-300
"
>

    {project.description}

</p>


                        <div className="flex flex-wrap gap-3 mt-6">

                            {project.technologies.map((tech) => (

                                <span
                        key={tech}
                        className="
                                  px-3
                                  py-1
                                  rounded-full
                                  text-sm

                                  bg-gray-200
                                  text-cyan-600

                                  dark:bg-slate-800
                                  dark:text-cyan-400

                                  border
                                  border-cyan-400/20

                                  transition
                                  hover:border-cyan-400
                                  hover:bg-gray-300
                                  dark:hover:bg-slate-700
                                  "
                    >
                        {tech}
                    </span>

                            ))}

                        </div>

                     <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
        inline-flex
        items-center
        gap-2
        mt-8
        text-cyan-400
        font-semibold
        transition-all
        duration-300
        hover:text-cyan-300
        hover:scale-110
    "
>
    Ver no GitHub

    <FaGithub className="text-xl" />
</a>

                    </div>
                </div>

                </motion.div>

            ))}

        </div>

    </div>

</section>

    )

}

export default Projects;