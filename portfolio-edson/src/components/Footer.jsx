import { Github, Linkedin, Mail } from "lucide-react";

function Footer(){

    return(

        <footer
            className="
            py-10

            bg-white
            text-slate-900

            dark:bg-slate-900
            dark:text-white

            border-t
            border-gray-200
            dark:border-slate-800
            "
        >

            <div className="max-w-7xl mx-auto px-6 text-center">


                <p className="text-xl font-semibold">
                    Obrigado pela visita!
                </p>


                <p
                    className="
                    mt-3

                    text-gray-600
                    dark:text-gray-400
                    "
                >
                    Estou disponível para novos projetos,
                    oportunidades profissionais e colaborações.
                </p>



                <div className="flex justify-center gap-6 mt-6">


                    <a
                        href="https://github.com/EdsonVazTI"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="
                        transition
                        duration-300

                        hover:text-cyan-500
                        dark:hover:text-cyan-400

                        hover:scale-110
                        "
                    >
                        <Github size={20} />
                    </a>



                    <a
                        href="https://www.linkedin.com/in/edson-vaz-87a836412"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="
                        transition
                        duration-300

                        hover:text-cyan-500
                        dark:hover:text-cyan-400

                        hover:scale-110
                        "
                    >
                        <Linkedin size={20} />
                    </a>



                    <a
                        href="mailto:eng.edsonvaz@gmail.com?subject=Contacto%20através%20do%20Portfólio"

                        className="
                        transition
                        duration-300

                        hover:text-cyan-500
                        dark:hover:text-cyan-400

                        hover:scale-110
                        "
                    >
                        <Mail size={20} />
                    </a>


                </div>



                <p
                    className="
                    mt-8

                    text-gray-500
                    dark:text-gray-500
                    "
                >

                    © {new Date().getFullYear()} Edson Vaz.
                    Todos os direitos reservados.

                </p>


            </div>

        </footer>

    )

}

export default Footer;