import { motion } from "framer-motion";

const skills = [
  {
    title: "Linguagens e Programação",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "C#",
      "PHP",
      "Kotlin",
      "HTML5",
      "CSS3"
    ]
  },

  {
    title: "Desenvolvimento Web e Frameworks",
    items: [
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Django",
      "Django REST",
      "FastAPI",
      "Node.js"
    ]
  },

  {
    title: "Base de Dados",
    items: [
      "MySQL",
      "SQL Server",
      "SQLite"
    ]
  },

  {
    title: "Inteligência Artificial e Visão Computacional",
    items: [
      "OpenCV",
      "PyTorch",
      "Scikit-Learn",
      "YOLO",
      "MediaPipe",
      "Gemini API"
    ]
  },

    {
    title: "IoT e Sistemas Embebidos",
    items: [
      "Arduino",
      "ESP32",
      "MQTT",
      "Node-RED"
    ]
  },
  
  {
    title: "APIs e Integração",
    items: [
      "APIs RESTful",
      "Desenvolvimento e consumo de APIs"
    ]
  },

  {
    title: "Redes e Infraestrutura",
    items: [
      "TCP/IP",
      "Protocolos de comunicação",
      "Roteamento de rede",
      "Configuração de sistemas",
      "Resolução de problemas de conectividade"
    ]
  },
  
{
  title: "Segurança da Informação",
  items: [
    "Controlo de acesso",
    "Segurança de aplicações Web",
    "Proteção de dados pessoais"
  ]
},

{
  title: "Engenharia de Software",
  items: [
    "Análise de requisitos",
    "Modelação de sistemas",
    "Testes de software manuais"
  ]
},

{
  title: "Metodologias de Desenvolvimento",
  items: [
    "Agile",
    "Scrum"
  ]
},


  {
    title: "Business Intelligence e Dados",
    items: [
      "Power BI"
    ]
  },

  {
    title: "Ferramentas, IDEs e Plataformas",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Android Studio",
      "Apache NetBeans",
      "Unity",
      "WampServer",
      "Antigravity IDE",
      "Microsoft Office"
    ]
  },

  {
    title: "Sistemas Empresariais e Suporte Técnico",
    items: [
      "Windows",
      "Windows Server",
      "Linux",
      "Redes Informáticas",
      "PRIMAVERA ERP"
    ]
  },

  {
  title: "Ferramentas de IA e Produtividade",
  items: [
    "ChatGPT",
    "Claude",
    "DeepSeek",
    "Genspark AI",
    "Manus",
    "Lovable"
  ]
},

{
  title: "Design UI/UX e Prototipagem",
  items: [
    "Figma",
    "Adobe XD",
    "Canva"
  ]
}
];

function Skills() {

  return (

    <section
  id="skills"
  className="
    py-24

    bg-gray-100
    text-slate-900

    dark:bg-slate-950
    dark:text-white
  "
>

      <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-16">

  <span className="text-slate-900 dark:text-white">
    Competências
  </span>

  {" "}

  <span className="text-slate-900 dark:text-white">
    e
  </span>

  {" "}

  <span className="text-cyan-400">
    Tecnologias
  </span>

</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (

            <motion.div

              key={skill.title}

              whileHover={{ y: -10 }}

              className="
        bg-white
        text-slate-900

        dark:bg-slate-900
        dark:text-white

        rounded-xl
        p-6
        shadow-lg
        border
        border-gray-200
        dark:border-slate-800
        "

            >

              <h3 className="text-xl font-bold mb-5">

                {skill.title}

              </h3>

             <div className="flex flex-wrap gap-2 mt-5">

              {skill.items.map((item) => (

                  <span
                      key={item}
                      className="
                      px-3
                      py-1

                      bg-gray-200
                      text-cyan-600

                      dark:bg-slate-800
                      dark:text-cyan-400

                      rounded-full
                      text-sm
                      "
                  >
                      {item}
                  </span>

              ))}

          </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Skills;