"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import useThemeSwitcher from "./useThemeSwitcher";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, MailIcon } from "./icons";
import { usePathname } from "next/navigation";

const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} relative group inline-flex `}>
      {title}
      <span
        className={`${path === href ? "w-full" : "w-0"
          } h-0.5 flex items-center bg-gradient-to-r from-darkCk to-lightCk absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-500`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  const [theme, toggleTheme] = useThemeSwitcher();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${scrolled || navOpen
        ? "shadow-bottom bg-navbarBg dark:bg-darker py-2 h-12 transition-none"
        : "py-3"
        } w-full font-medium flex align-center justify-between fixed z-50 transition duration-500 ease-in-out `}
    >
      <nav
        className={`w-full flex justify-between align-center px-4 md:px-12 lg:px-20`}
      >
        <div className="flex">
          <Link
            href={"/"}
            className="bg-gradient-to-r from-darkCk to-lightCk bg-clip-text text-transparent text-2xl font-semibold "
          >
            CHHATRESH KHATRI
          </Link>
        </div>
        <button
          aria-label="Toggle Menu"
          className={`flex-col justify-center items-center flex lg:hidden`}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <span
            className={`bg-gradient-to-r from-darkCk to-lightCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${navOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${navOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
          ></span>
        </button>
        <div className="text-xl hidden lg:flex">
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="ml-4" />
        </div>
        <div className={`hidden lg:flex`}>
          <Link
            aria-label="Github"
            href={"https://github.com/chhatreshkhatri"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 w-8"
          >
            <GithubIcon className="" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href={"https://www.linkedin.com/in/chhatreshkhatri/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 w-8"
          >
            <LinkedInIcon
              className={``}
              color={`${theme === "dark" ? "#191919" : "#f5f5f5"}`}
            />
          </Link>
          <Link
            aria-label="Mail"
            href={"mailto:contact@chhatreshkhatri.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 w-8"
          >
            <MailIcon className="" />
          </Link>
          <button
            aria-label="Toggle Theme"
            onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
            className={`${theme === "light" ? " text-dark" : " text-light"} flex align-center justify-center focus:outline-none transition duration-300 ease-in-out hover:scale-110 ml-5 w-8`} >
            {theme === "dark" ? (
              <SunIcon className={`fill-dark`} />
            ) : (
              <MoonIcon className={`fill-dark`} />
            )}
          </button>
        </div>
      </nav>
      {/* mobile */}

      <div
        className={`${navOpen ? " flex lg:hidden bg-slate-300 dark:bg-darker" : "hidden"
          } min-w-full flex-col items-center fixed top-12`}
      >
        <nav className="text-xl flex flex-col items-center justify-center space-y-2">
          <CustomLink href={"/"} title={"Home"} className="" />
          <CustomLink href={"/about"} title={"About"} className="" />
          <CustomLink href={"/projects"} title={"Projects"} className="" />
        </nav>
        <nav className={`flex items-center justify-center flex-wrap my-2`}>

          <Link
            aria-label="Github"
            href={"https://github.com/chhatreshkhatri"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 h-8"
          >
            <GithubIcon className="" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href={"https://www.linkedin.com/in/chhatreshkhatri/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 h-8"
          >
            <LinkedInIcon
              className={``}
              color={`${theme === "dark" ? "#191919" : "#f5f5f5"}`}
            />
          </Link>
          <Link
            aria-label="Mail"
            href={"mailto:contact@chhatreshkhatri.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 h-8"
          >
            <MailIcon className="" />
          </Link>
          <button
            aria-label="Toggle Theme"
            onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
            className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
              } rounded-full flex align-center justify-center focus:outline-none transition duration-300 ease-in-out hover:scale-110 ml-5 w-8`}
          >
            {theme === "dark" ? (
              <SunIcon className={`fill-dark`} />
            ) : (
              <MoonIcon className={`fill-dark`} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
