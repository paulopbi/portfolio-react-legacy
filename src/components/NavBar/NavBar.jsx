import { useState } from "react";

const NavBar = () => {
  const [menuHandler, setMenuHandler] = useState(false);

  return (
    <header
      className={`fixed left-0 top-0 z-20 min-h-[70px] p-4 ${menuHandler ? "h-full drop-shadow-lg backdrop-blur-2xl" : "backdrop-blur-xl"} flex w-full items-center overflow-hidden bg-transparent px-4`}
    >
      <nav
        className={`container relative mx-auto flex h-full w-full ${menuHandler ? "flex-col items-center justify-evenly overflow-hidden" : "flex-row items-start justify-between"} gap-6 lg:flex-row`}
      >
        <div className={`${menuHandler ? "absolute left-0 top-0" : ""} p-2`}>
          <img
            loading="lazy"
            src="src/assets/my_logo.svg"
            alt="Paulo Victor Logo"
          />
        </div>
        <ul
          className={`${menuHandler ? "my-4 flex flex-col items-center gap-4" : "hidden"} font-medium sm:text-base lg:flex lg:items-center lg:justify-between lg:gap-6`}
        >
          <li>
            <a
              href="#sobre"
              className="link text-lg drop-shadow-lg"
              onClick={() => setMenuHandler(false)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#habilidades"
              className="link text-lg drop-shadow-lg"
              onClick={() => setMenuHandler(false)}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              className="link text-lg drop-shadow-lg"
              onClick={() => setMenuHandler(false)}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#estudos"
              className="link text-lg drop-shadow-lg"
              onClick={() => setMenuHandler(false)}
            >
              Estudos
            </a>
          </li>
        </ul>
        <ul
          className={`${menuHandler ? "flex flex-row items-center gap-12" : "hidden"} drop-shadow-lg lg:flex lg:items-center lg:justify-between lg:gap-6`}
        >
          <li>
            <a
              href="https://github.com/paulopbi"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuHandler(false)}
            >
              <img
                loading="lazy"
                src="src/assets/github_icon.svg"
                alt="Github icon"
                width={25}
                height={25}
                className={`${menuHandler ? "scale-150" : ""}`}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/paulopbi/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuHandler(false)}
            >
              <img
                loading="lazy"
                src="src/assets/linkedin_icon.svg"
                alt="Linkedin icon"
                width={25}
                height={25}
                className={`${menuHandler ? "scale-150" : ""}`}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/paulopbi"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuHandler(false)}
            >
              <img
                src="src/assets/behance_icon.svg"
                alt="Behance Icon"
                width={25}
                height={25}
                className={`${menuHandler ? "scale-150" : ""}`}
              />
            </a>
          </li>
        </ul>
        <div
          className={` ${menuHandler ? "absolute right-0 top-0" : "block"} cursor-pointer lg:hidden`}
        >
          <img
            src={`
              ${
                menuHandler
                  ? "src/assets/mobile_menu_close_icon.svg"
                  : "src/assets/mobile_menu_open_icon.svg"
              }
            `}
            alt="Mobile Menu"
            width={30}
            height={30}
            onClick={() => setMenuHandler((prev) => !prev)}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
