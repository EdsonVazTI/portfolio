import { Award, ExternalLink } from "lucide-react";

function Certificates() {

    return (

        <section
            id="certificates"
            className="
                py-24
                bg-gray-100
                text-slate-900

                dark:bg-slate-900
                dark:text-white
            "
        >

            <div className="max-w-6xl mx-auto px-6">


                <h2
                    className="
                    text-4xl
                    font-bold
                    mb-10
                    text-cyan-400
                    dark:text-cyan-400
                    "
                >
                    Certificações & Formação
                </h2>



                <div className="grid md:grid-cols-2 gap-8">


                    {/* Informação do Certificado */}

                        <div
                            className="
                            bg-white
                            dark:bg-slate-950
                            p-6
                            rounded-xl
                            shadow-lg
                            border
                            border-gray-200
                            dark:border-slate-700
                            hover:scale-105
                            transition
                            duration-300   
                            "
                        >


                        <div className="flex items-center gap-4 mb-4">


                            <Award
                                size={40}
                                className="
                                text-cyan-500
                                dark:text-cyan-400
                                "
                            />


                            <h3 className="text-2xl font-semibold">
                                NLW Operator Python
                            </h3>


                        </div>



                        <p
                            className="
                            text-gray-700
                            dark:text-gray-300
                            leading-7
                            "
                        >
                            Formação prática em Python aplicada à Inteligência Artificial e
                            Visão Computacional, com desenvolvimento de soluções envolvendo
                            processamento de imagem, análise de dados e inferência em tempo real.
                        </p>



                        <div className="flex flex-wrap gap-2 mt-5">


                            {
                                [
                                    "Python",
                                    "OpenCV",
                                    "MediaPipe",
                                    "PyTorch",
                                    "Scikit-Learn",
                                    "YOLO",
                                    "Gemini API"
                                ].map((tech)=>(

                                    <span
                                        key={tech}
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

                                        {tech}

                                    </span>

                                ))
                            }


                        </div>



                        <a
            href="https://app.rocketseat.com.br/certificates/e9f2db54-46be-4870-bf73-687362a02f48"
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex
                items-center
                gap-2
                mt-5    
                text-cyan-500
                dark:text-cyan-400
                font-semibold
                transition-all
                duration-300
                hover:text-cyan-600
                hover:scale-105
            "
        >
            <span>Ver certificado</span>
            <ExternalLink size={18}/>
        </a>
</div>




                    {/* Imagem do Certificado */}


                    <div className="flex justify-center items-center">


                        <a
                            href="/certificates/nlw-operator-python.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img

                                src="/certificates/nlw-operator-python.png"

                                alt="Certificado NLW Operator Python"

                                className="
                                    rounded-xl

                                    shadow-xl

                                    border

                                    border-gray-200
                                    dark:border-slate-700

                                    hover:scale-105

                                    transition

                                    duration-300
                                "

                            />

                        </a>


                    </div>


                </div>
                        <div className="grid md:grid-cols-2 gap-8 mt-20">


                    {/* Informação do Certificado */}

                        <div
                            className="
                            bg-white
                            dark:bg-slate-950
                            p-6
                            rounded-xl
                            shadow-lg
                            border
                            border-gray-200
                            dark:border-slate-700
                            hover:scale-105
                            transition
                            duration-300   
                            "
                        >


                        <div className="flex items-center gap-4 mb-4">


                            <Award
                                size={40}
                                className="
                                text-cyan-500
                                dark:text-cyan-400
                                "
                            />


                            <h3 className="text-2xl font-semibold">
                                Cabeólica University Challenge
                            </h3>


                        </div>



                        <p
                            className="
                            text-gray-700
                            dark:text-gray-300
                            leading-7
                            "
                        >
                            Participação na 1.ª edição do concurso universitário promovido pela Cabeólica,
                            dedicado à inovação e à transição energética em Cabo Verde.
                            Desenvolvimento de competências em trabalho colaborativo, pensamento
                            crítico e resolução de problemas.
                        </p>



                        <div className="flex flex-wrap gap-2 mt-5">


                            {
                                [
                                    "Sustentabilidade",
                                    "Energia Renovável",
                                    "Inovação",
                                    "Trabalho em Equipa",
                                    "Resolução de Problemas",
                                    "Pensamento Crítico"
                                ].map((tech)=>(

                                    <span
                                        key={tech}
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

                                        {tech}

                                    </span>

                                ))
                            }


                        </div>



                        <a
            href="https://www.facebook.com/share/1DwmnAENL1/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex
                items-center
                gap-2
                mt-5    
                text-cyan-500
                dark:text-cyan-400
                font-semibold
                transition-all
                duration-300
                hover:text-cyan-600
                hover:scale-105
            "
        >
            <span>Ver certificado</span>
            <ExternalLink size={18}/>
        </a>
</div>




                    {/* Imagem do Certificado */}


                    <div className="flex justify-center items-center">


                        <a
                            href="/certificates/caboeolica.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img

                                src="/certificates/caboeolica.png"

                                alt="Certificado Cabeólica University Challenge"

                                className="
                                    rounded-xl

                                    shadow-xl

                                    border

                                    border-gray-200
                                    dark:border-slate-700

                                    hover:scale-105

                                    transition

                                    duration-300
                                "

                            />

                        </a>


                    </div>


                </div>

            </div>


        </section>

    )

}

export default Certificates;