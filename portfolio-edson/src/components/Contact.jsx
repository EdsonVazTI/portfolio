import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";



function Contact() {


const handleSubmit = (e) => {

    e.preventDefault();

    alert(
        "Obrigada pela sua mensagem! Num ambiente de produção, esta mensagem seria enviada para um servidor backend."
    );

    e.target.reset();

};


  return (
    <section
  id="contact"
  className="
    py-24

    bg-gray-100
    text-slate-900

    dark:bg-slate-950
    dark:text-white
  "
>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-center mb-6">
            <span>Entre em </span>
            <span className="text-cyan-400">Contacto</span>
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
            Tem algum projeto, oportunidade profissional ou pretende
            colaborar? Ficarei feliz em conversar consigo.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Informação */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div>

              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contacto
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <MapPin className="text-cyan-400" />
                  <span>Cabo Verde</span>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-cyan-400" />
                  <span>eng.edsonvaz@gmail.com</span>
                </div>

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-6">
                Links Sociais
              </h3>

              <div className="flex gap-5">

                <a
                  href="https://github.com/EdsonVazTI"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="
  p-4
  rounded-lg

  bg-white
  dark:bg-slate-900

  border
  border-gray-200
  dark:border-slate-800

  hover:bg-cyan-500
  transition
  "
                >
                  <Github />
                </a>

                <a
                  href="https://www.linkedin.com/in/edson-vaz-87a836412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
  p-4
  rounded-lg

  bg-white
  dark:bg-slate-900

  border
  border-gray-200
  dark:border-slate-800

  hover:bg-cyan-500
  transition
  "
                >
                  <Linkedin />
                </a>

                <a
                  href="mailto:eng.edsonvaz@gmail.com?subject=Contacto%20através%20do%20Portfólio"
                  className="
  p-4
  rounded-lg

  bg-white
  dark:bg-slate-900

  border
  border-gray-200
  dark:border-slate-800

  hover:bg-cyan-500
  transition
  "
                >
                  <Mail />
                </a>

              </div>

            </div>

          </motion.div>

          {/* Formulário */}

          <motion.form
              onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

<div>

    <label className="block mb-2">
        Nome
    </label>

    <input
        type="text"
        name="name"
        placeholder="O seu nome"
        required
        className="
w-full

bg-white
dark:bg-slate-900

text-slate-900
dark:text-white

border
border-gray-300
dark:border-slate-700

rounded-lg

px-4
py-3

focus:outline-none
focus:border-cyan-400
"
    />

</div>

<div>

    <label className="block mb-2">
        E-mail
    </label>

    <input
        type="email"
        name="email"
        placeholder="seu.email@exemplo.com"
        required
        className="
w-full

bg-white
dark:bg-slate-900

text-slate-900
dark:text-white

border
border-gray-300
dark:border-slate-700

rounded-lg

px-4
py-3

focus:outline-none
focus:border-cyan-400
"
    />

</div>

<div>

    <label className="block mb-2">
        Mensagem
    </label>

    <textarea
        name="message"
        rows="6"
        placeholder="A sua mensagem..."
        required
        className="
w-full

bg-white
dark:bg-slate-900

text-slate-900
dark:text-white

border
border-gray-300
dark:border-slate-700

rounded-lg

px-4
py-3

focus:outline-none
focus:border-cyan-400
"
    />

</div>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              Enviar Mensagem
            </button>

            <p className="text-sm text-gray-500">
        
            </p>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;