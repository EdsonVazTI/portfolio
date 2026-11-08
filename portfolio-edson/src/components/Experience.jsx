const experiences = [
  {
    id: "ecobank",
    role: "Técnico Estagiário de TI",
    department: "Departamento de Tecnologia",
    company: "Ecobank Cabo Verde — Agência Sede",
    location:
      "Avenida Cidade de Lisboa, Várzea, Praia, Ilha de Santiago, Cabo Verde",
    period: "Agosto 2026 – Atual",
    activities: [
      "Prestação de suporte técnico presencial e remoto aos colaboradores do banco nas ilhas de Santiago, Sal e São Vicente.",
      "Diagnóstico e resolução de falhas de conectividade e problemas de acesso à rede e aos sistemas utilizados pelos colaboradores.",
      "Apoio à configuração de endereçamento IP e de portas de switches de rede, bem como à verificação das ligações dos equipamentos.",
      "Instalação, configuração e manutenção de computadores, sistemas operativos, aplicações e periféricos.",
      "Preparação e configuração de postos de trabalho para utilização pelos colaboradores.",
      "Diagnóstico e resolução de problemas de hardware e software em computadores, impressoras, tablets e outros dispositivos tecnológicos.",
      "Apoio à continuidade operacional do banco, assegurando o funcionamento dos recursos tecnológicos necessários às atividades diárias.",
    ],
  },
  {
    id: "lf-informatica",
    role: "Técnico Informático (Freelancer)",
    company: "LF - Informática, Lda",
    location: "Praia, Cabo Verde",
    period: "Setembro 2023 – Julho 2026",
    activities: [
      "Prestação de serviços de suporte técnico presencial e remoto a empresas clientes.",
      "Instalação, configuração e manutenção de computadores, impressoras, redes e infraestruturas informáticas.",
      "Administração e manutenção de servidores Microsoft Windows Server.",
      "Instalação, configuração e suporte do Primavera ERP.",
      "Diagnóstico e resolução de avarias de hardware e software.",
      "Gestão de utilizadores, permissões e acessos aos sistemas.",
      "Intervenção técnica em empresas de diversos setores, nomeadamente contabilidade, comércio e microfinanças.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-24 bg-gray-100 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="experience-title"
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-cyan-500 dark:text-cyan-400">
            Experiência
          </span>{" "}
          <span className="text-slate-900 dark:text-white">
            Profissional
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-slate-800"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold">
                    {experience.role}
                  </h3>

                  {experience.department && (
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      {experience.department}
                    </p>
                  )}

                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-2">
                    {experience.company}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {experience.location}
                  </p>
                </div>

                <span className="self-start shrink-0 bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3 text-gray-700 dark:text-gray-300 leading-7 list-disc pl-5 marker:text-cyan-500">
                {experience.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;