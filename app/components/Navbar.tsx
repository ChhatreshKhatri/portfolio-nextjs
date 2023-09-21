"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedInIcon, MailIcon } from "./icons";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
import chhatresh from "@/app/assets/chhatresh_khatri.svg";

const CustomLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} relative flex items-center justify-center group py-1`}>
      {title}
      <span
        className={`${
          path === href ? "w-full" : "w-0"
        } h-0.5 flex items-center justify-center bg-gradient-to-r from-darkCk to-lightCk absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-500`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
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
    <header className={``}>
      <nav
        className={`${
          scrolled ? " py-2 shadow-bottom bg-navbarBg/70 dark:bg-darker/80 backdrop-blur-md" : "py-3"
        } hidden  lg:flex w-full font-medium  align-center justify-between fixed lg:px-20 transition-navBar duration-200 ease-in-out z-10`}
      >
        <Link
          title="Chhatresh Khatri"
          aria-label="Chhatresh Khatri"
          href={"/"}
          className="flex justify-center items-center"
        >
          <Image src={chhatresh} alt="Chhatresh Khatri" />
        </Link>
        <div className="flex items-center justify-center text-xl font-semibold">
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="ml-4" />
        </div>
        <div className={`flex`}>
          <Link
            title="Github"
            aria-label="Github"
            href={"https://github.com/chhatreshkhatri"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 w-8"
          >
            <GithubIcon width={32} className="" />
          </Link>
          <Link
            title="LinkedIn"
            aria-label="LinkedIn"
            href={"https://www.linkedin.com/in/chhatreshkhatri/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 w-8"
          >
            <LinkedInIcon width={32} className={``} />
          </Link>
          <Link
            title="Mail"
            aria-label="Mail"
            href={"mailto:contact@chhatreshkhatri.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 w-8"
          >
            <MailIcon width={32} className="" />
          </Link>
          <ThemeButton />
        </div>
      </nav>

      {/* mobile */}

      <nav
        className={`${
          navOpen || scrolled
            ? "lg:hidden bg-navbarBg/70 dark:bg-darker/80 backdrop-blur-md shadow-bottom py-2 transition-navBar duration-200 ease-in-out"
            : "py-3"
        } w-full flex flex-col items-center px-2 xxs:px-3 xs:px-6 md:px-12 fixed z-10 lg:hidden`}
      >
        <div className="flex justify-between w-full">
          <Link
            title="Chhatresh Khatri"
            aria-label="Chhatresh Khatri"
            href={"/"}
            className="flex justify-center items-center"
          >
            <Image src={chhatresh} alt="Chhatresh Khatri" />
          </Link>
          <button
            aria-label="Toggle Menu"
            className={`flex-col justify-center items-center flex lg:hidden`}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <span
              className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                navOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                navOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                navOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            ></span>
          </button>
        </div>
        <div className={`${navOpen ? "flex" : "hidden"} flex-col text-xl font-semibold items-center justify-center`}>
          <CustomLink href={"/"} title={"Home"} className={""} />
          <CustomLink href={"/about"} title={"About"} className={""} />
          <CustomLink href={"/projects"} title={"Projects"} className={""} />
          <div className={`flex items-center justify-center flex-wrap my-2`}>
            <Link
              title="Github"
              aria-label="Github"
              href={"https://github.com/chhatreshkhatri"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 h-8"
            >
              <GithubIcon width={32} className={""} />
            </Link>
            <Link
              title="LinkedIn"
              aria-label="LinkedIn"
              href={"https://www.linkedin.com/in/chhatreshkhatri/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 h-8"
            >
              <LinkedInIcon width={32} className={``} />
            </Link>
            <Link
              title="Mail"
              aria-label="Mail"
              href={"mailto:contact@chhatreshkhatri.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110 ml-5 h-8"
            >
              <MailIcon width={32} className={""} />
            </Link>
            <ThemeButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
