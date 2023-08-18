"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from 'next-themes'
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
    <Link
      href={href}
      className={`${className} relative group inline-flex py-1`}
    >
      {title}
      <span
        className={`${path === href ? "w-full" : "w-0"
          } h-0.5 flex items-center bg-gradient-to-r from-darkCk to-lightCk absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-500`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  const {theme, setTheme} = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const checkTheme=theme;

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
    <header className={`z-10`}>
      <nav
        className={`${scrolled
            ? " py-2 shadow-bottom bg-navbarBg/70 dark:bg-darker/80 backdrop-blur-md"
            : "py-3"
          } hidden  lg:flex w-full font-medium  align-center justify-between fixed px-4 lg:px-20 transition-all duration-200 ease-in-out`}
      >
        <div className="flex">
          <Link
            href={"/"}
            className="bg-gradient-to-r from-darkCk to-lightCk bg-clip-text text-transparent text-2xl font-semibold "
          >
            CHHATRESH KHATRI
          </Link>
        </div>
        <div className="text-xl flex">
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="ml-4" />
        </div>
        <div className={`flex`}>
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
              color={`${checkTheme === "dark" ? "#191919" : "#f5f5f5"}`}
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
            onClick={() => setTheme(checkTheme === "dark" || checkTheme=="" ? "light" : "dark")}
            className={`${checkTheme === "dark" ? " text-light" : " text-dark"
              } flex align-center justify-center focus:outline-none transition duration-300 ease-in-out hover:scale-110 ml-5 w-8`}
          >
            {checkTheme === "dark" ? (
              <SunIcon className={`fill-dark`} />
            ) : (
              <MoonIcon className={`fill-dark`} />
            )}
          </button>
        </div>
      </nav>
      {/* mobile */}

      <nav
        className={`${navOpen || scrolled
            ? "lg:hidden bg-navbarBg/70 dark:bg-darker/80 backdrop-blur-md shadow-bottom py-2 transition-all duration-200 ease-in-out"
            : 'py-3'
          } w-full flex flex-col items-center px-4 md:px-12 lg:px-20 fixed lg:hidden`}
      >
        <div className="flex justify-between w-full">
          <Link
            href={"/"}
            className="bg-gradient-to-r from-darkCk to-lightCk bg-clip-text text-transparent text-2xl font-semibold "
          >
            CHHATRESH KHATRI
          </Link>
          <button
            aria-label="Toggle Menu"
            className={`flex-col justify-center items-center flex lg:hidden`}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <span
              className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${navOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
            ></span>
            <span
              className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${navOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
            ></span>
          </button>
        </div>
        <div
          className={`${navOpen ? "flex" : "hidden"
            } text-xl flex-col items-center justify-center`}
        >
          <CustomLink href={"/"} title={"Home"} className="" />
          <CustomLink href={"/about"} title={"About"} className="" />
          <CustomLink href={"/projects"} title={"Projects"} className="" />
          <div className={`flex items-center justify-center flex-wrap my-2`}>
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
                color={`${checkTheme === "dark" ? "#191919" : "#f5f5f5"}`}
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
              onClick={() => setTheme(checkTheme === "dark" ? "light" : "dark")}
              className={`${checkTheme === "dark" || checkTheme=="" ? " text-light" : "text-dark"
                } rounded-full flex align-center justify-center focus:outline-none transition duration-300 ease-in-out hover:scale-110 ml-5 w-8`}
            >
              {checkTheme === "dark" ? (
                <SunIcon className={`fill-dark`} />
              ) : (
                <MoonIcon className={`fill-dark`} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
