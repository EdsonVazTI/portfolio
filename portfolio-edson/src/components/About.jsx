import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-24 bg-white text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            id="about-title"
            className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-10"
          >
            Sobre Mim
          </h2>

          <div className="space-y-6 text-lg leading-9 text-gray-700 dark:text-gray-300">
            <p>
              Sou licenciado em Engenharia Informática e de Computadores
              pela Universidade de Cabo Verde (UNICV), com especialização
              em Programação, e resido na cidade da Praia, ilha de Santiago,
              Cabo Verde. O meu percurso combina experiência em suporte
              técnico, manutenção informática, administração de sistemas,
              redes de computadores e desenvolvimento de software.
            </p>

            <p>
              Desde agosto de 2026, desempenho funções como{" "}
              <strong>Técnico Estagiário de TI no Ecobank Cabo Verde</strong>,
              no Departamento de Tecnologia da Agência Sede, na Praia.
              Presto suporte presencial e remoto aos colaboradores nas ilhas
              de Santiago, Sal e São Vicente, contribuindo para o funcionamento
              dos recursos tecnológicos necessários às atividades diárias
              do banco.
            </p>

            <p>
              As minhas atividades incluem o diagnóstico e a resolução de
              problemas de conectividade, o apoio à configuração de
              endereçamento IP e de portas de switches, a preparação de
              postos de trabalho e a instalação e manutenção de computadores,
              aplicações e periféricos. Anteriormente, trabalhei como{" "}
              <strong>Técnico Informático freelancer na LF – Informática</strong>,
              prestando assistência técnica a empresas de diferentes setores.
            </p>

            <p>
              Ao longo do meu percurso académico e profissional, desenvolvi
              também competências em desenvolvimento Web e de APIs, bases
              de dados, Power BI, Inteligência Artificial, visão computacional
              e integração de sistemas.
            </p>

            <p>
              O meu Projeto Final de Curso, intitulado{" "}
              <strong>
                “Sistema Inteligente de Monitorização e Segurança com
                Reconhecimento Facial Integrado do RS²Lab”
              </strong>
              , foi classificado com <strong>18 valores</strong>. Este projeto
              permitiu-me aprofundar conhecimentos em reconhecimento facial,
              Internet das Coisas (IoT) e desenvolvimento Full Stack.
            </p>

            <p>
              Pretendo continuar a desenvolver a minha carreira nas
              Tecnologias de Informação, aprofundando competências em
              infraestrutura de redes, telecomunicações e redes Core.
              Tenho interesse em oportunidades que me permitam aplicar os
              conhecimentos adquiridos, aprender novas tecnologias e
              contribuir para a resolução de desafios técnicos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;