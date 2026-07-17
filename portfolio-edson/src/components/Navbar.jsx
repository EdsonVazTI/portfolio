import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Mantém o URL sem #about, #projects, etc.
      window.history.replaceState(null, "", window.location.pathname);

      // Fecha o menu no telemóvel
      setMenuOpen(false);
    }
  };

  
  return (
  <nav
  className="
    fixed top-0 left-0 w-full
    backdrop-blur-md
    shadow-lg
    z-50

    bg-white/90
    text-slate-900

    dark:bg-slate-950/90
    dark:text-white
  "
>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">

  Edson
  <span className="text-slate-900 dark:text-white">
    {" "}Vaz
  </span>

</h1>

        <ul className="hidden md:flex gap-8 font-medium">
        <li>
  <button
    onClick={() => scrollToSection("hero")}
    className="hover:text-cyan-400 transition"
  >
    Início
  </button>
</li>

<li>
  <button
    onClick={() => scrollToSection("about")}
    className="hover:text-cyan-400 transition"
  >
    Sobre
  </button>
</li>

<li>
  <button
    onClick={() => scrollToSection("skills")}
    className="hover:text-cyan-400 transition"
  >
    Competências
  </button>
</li>

<li>
  <button
    onClick={() => scrollToSection("projects")}
    className="hover:text-cyan-400 transition"
  >
    Projetos
  </button>
</li>

<li>
  <button
    onClick={() => scrollToSection("experience")}
    className="hover:text-cyan-400 transition"
  >
    Experiência
  </button>
</li>

<li>
  <button
    onClick={() => scrollToSection("contact")}
    className="hover:text-cyan-400 transition"
  >
    Contacto
  </button>
</li>
        </ul>

        <div className="flex items-center gap-4">

        <button
          onClick={toggleTheme}
          className="
            p-2
            rounded-lg
            hover:bg-gray-200
            dark:hover:bg-slate-800
            transition
          "
        >
          {
            theme === "dark"
              ? <Sun size={20}/>
              : <Moon size={20}/>
          }
        </button>

                  <button
        className="
        md:hidden
        text-slate-900
        dark:text-white
        "
        onClick={() => setMenuOpen(!menuOpen)}
        >
            {menuOpen ? <X/> : <Menu/>}
          </button>

        </div>

      </div>

      {menuOpen && (
              <div
      className="
      md:hidden
      px-6
      pb-6

      bg-white
      text-slate-900

      dark:bg-slate-900
      dark:text-white
      "
      >

          <ul className="flex flex-col gap-4">

                  <li>
        <button onClick={() => scrollToSection("hero")}>
          Início
        </button>
      </li>

      <li>
        <button onClick={() => scrollToSection("about")}>
          Sobre
        </button>
      </li>

      <li>
        <button onClick={() => scrollToSection("skills")}>
          Competências e Tecnologias
        </button>
      </li>

      <li>
        <button onClick={() => scrollToSection("projects")}>
          Projetos
        </button>
      </li>

      <li>
        <button onClick={() => scrollToSection("experience")}>
          Experiência Profissional
        </button>
      </li>

      <li>
        <button onClick={() => scrollToSection("contact")}>
          Contacto
        </button>
      </li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;