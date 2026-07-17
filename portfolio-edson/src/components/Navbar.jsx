import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          <li><a href="#hero" className="hover:text-cyan-400 transition">Início</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">Sobre</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Competências</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projetos</a></li>
          <li><a href="#experience" className="hover:text-cyan-400 transition">Experiência</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contacto</a></li>
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

            <li><a href="#hero">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Competências e Tecnologias</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#experience">Experiência Profissional</a></li>
            <li><a href="#contact">Contacto</a></li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;