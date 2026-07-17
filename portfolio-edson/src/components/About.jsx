import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="
py-24

bg-white
text-slate-900

dark:bg-slate-900
dark:text-white
"
>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-cyan-400 mb-10">
            Sobre Mim
          </h2>

         <p className="
  text-lg
  leading-9
  text-gray-700
  dark:text-gray-300
  text-justify
">
          Atualmente baseado na cidade da Praia, ilha de Santiago, Cabo Verde,
          sou licenciado em Engenharia Informática e de Computadores pela
          Universidade de Cabo Verde (UNICV), com especialização em Programação.
          Possuo experiência em suporte técnico, administração de sistemas,
          manutenção informática, redes de computadores, desenvolvimento de
          software e implementação de soluções tecnológicas.
         </p>

          <p className="
  text-lg
  leading-9
  text-gray-700
  dark:text-gray-300
  text-justify
">
            Ao longo do meu percurso académico e profissional desenvolvi
            competências em desenvolvimento Web, desenvolvimento de APIs,
            bases de dados, Power BI, Inteligência Artificial, visão
            computacional e integração de sistemas, utilizando tecnologias
            modernas para criar soluções eficientes, escaláveis e orientadas
            às necessidades dos utilizadores.
          </p>

          <p className="
  text-lg
  leading-9
  text-gray-700
  dark:text-gray-300
  text-justify
">
            O meu Projeto Final de Curso, intitulado <strong>"Sistema Inteligente de
            Monitorização e Segurança com Reconhecimento Facial Integrado do
            RS²Lab"</strong>, foi classificado com <strong>18 valores</strong>, permitindo-me
            aprofundar conhecimentos em Inteligência Artificial, reconhecimento
            facial, visão computacional, Internet das Coisas (IoT) e
            desenvolvimento Full Stack.
          </p>

          <p className="text-lg
  leading-9
  text-gray-700
  dark:text-gray-300
  text-justify
">
            Procuro integrar uma empresa através de um estágio profissional
            ou contrato de trabalho, onde possa desenvolver a minha carreira
            na área das Tecnologias de Informação, aplicar os conhecimentos
            adquiridos, enfrentar novos desafios e contribuir para o
            desenvolvimento de soluções inovadoras, continuando a evoluir
            profissional e tecnicamente.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;