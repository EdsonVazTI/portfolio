function Experience() {
  return (
    <section
      id="experience"
      className="
        py-24
        bg-gray-100
        text-slate-900
        dark:bg-slate-950
        dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-cyan-400 dark:text-cyan-400">
            Experiência
          </span>{" "}
          <span className="text-slate-900 dark:text-white">
            Profissional
          </span>
        </h2>


        <div
          className="
          bg-white
          dark:bg-slate-900
          rounded-xl
          p-8
          shadow-lg
          border
          border-gray-200
          dark:border-slate-800
          "
        >


          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>

              <h3 className="text-2xl font-bold">
                Técnico Informático (Freelancer)
              </h3>


              <p className="text-cyan-500 dark:text-cyan-400 mt-1">
                LF - Informática, Lda
              </p>


              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Praia, Cabo Verde
              </p>

            </div>


            <span
              className="
              mt-4
              md:mt-0
              bg-cyan-500/20
              text-cyan-600
              dark:text-cyan-400
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              "
            >
              Setembro 2023 – Atual
            </span>

          </div>


          <ul
            className="
            mt-8
            space-y-4
            text-gray-700
            dark:text-gray-300
            leading-7
            list-disc
            list-inside
            "
          >

            <li>
              Prestação de suporte técnico presencial e remoto a empresas e utilizadores.
            </li>


            <li>
              Instalação, configuração e manutenção de computadores, servidores, impressoras, redes e infraestruturas informáticas.
            </li>


            <li>
              Administração e manutenção de servidores Microsoft Windows Server.
            </li>


            <li>
              Instalação, configuração e suporte do Primavera ERP.
            </li>


            <li>
              Diagnóstico e resolução de avarias de hardware e software.
            </li>


            <li>
              Gestão de utilizadores, permissões e acessos aos sistemas.
            </li>


            <li>
              Suporte técnico, formação e acompanhamento de utilizadores.
            </li>

            <li>
              Intervenção técnica em empresas de diversos setores, nomeadamente contabilidade, comércio e microfinanças.
            </li>


          </ul>


        </div>

      </div>
    </section>
  );
}

export default Experience;