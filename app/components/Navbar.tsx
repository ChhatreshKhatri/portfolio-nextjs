"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChhatreshKhatri } from "./icons";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
const CustomLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} relative flex items-center justify-center group py-1`}>
      {title}
      <span
        className={`${
          path === href ? "w-full" : "w-0"
        } absolute h-0.5 bg-gradient-to-r from-darkCk to-lightCk bottom-0.5 group-hover:w-full transition-[width] ease duration-500`}></span>
    </Link>
  );
};
const NavIcon = ({ title, href, icon, className = "" }: { title: string; href: string; icon: React.ReactNode; className?: string }) => (
  <Link
    title={title}
    aria-label={title}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex align-center justify-center transform transition-transform duration-300 hover:scale-110 w-8 ${className}`}>
    {icon}
  </Link>
);
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
    <nav
      className={`${
        navOpen || scrolled
          ? " bg-navbarBg/60 dark:bg-darker/70 backdrop-blur-md shadow-bottom py-2 transition-navBar duration-200 ease-in-out"
          : "py-2.5"
      } w-full flex flex-col items-center px-3 xs:px-6 md:px-12 lg:px-20 fixed z-10 top-0`}>
      <div className="flex justify-between w-full">
        <Link title="Chhatresh Khatri" aria-label="Chhatresh Khatri" href={"/"} className="flex justify-center items-center">
          <ChhatreshKhatri className={``} />
        </Link>
        <div className="hidden lg:flex items-center justify-center gap-x-8 text-xl font-semibold">
          <CustomLink href={"/"} title={"Home"} className="" /> <CustomLink href={"/about"} title={"About"} className="" />
          <CustomLink href={"/projects"} title={"Projects"} className="" />
        </div>
        <div className={`hidden lg:flex items-center justify-center gap-x-5`}>
          <NavIcon title="GitHub" aria-label="Github" href={"https://github.com/Chhatreshkhatri"} icon={<SiGithub size={32} className="" />} />
          <NavIcon
            title="LinkedIn"
            aria-label="LinkedIn"
            href={"https://www.linkedin.com/in/chhatreshkhatri"}
            icon={<SiLinkedin size={32} className="" />}
          />
          <NavIcon title="Mail" aria-label="Mail" href={"mailto:contact@chhatreshkhatri.com"} icon={<SiGmail size={32} className="" />} />
          <ThemeButton />
        </div>
        <button
          aria-label="Toggle Menu"
          className={`flex-col justify-center items-center flex lg:hidden`}
          onClick={() => {
            setNavOpen(!navOpen);
          }}>
          <span
            className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
              navOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}></span>
          <span
            className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              navOpen ? "opacity-0" : "opacity-100"
            }`}></span>
          <span
            className={`bg-gradient-to-r from-lightCk to-darkCk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              navOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}></span>
        </button>
      </div>
      {/* Mobile  Nav items */}
      <div className={`${navOpen ? "flex flex-col" : "hidden"} lg:hidden font-semibold items-center justify-center text-xl`}>
        <CustomLink href={"/"} title={"Home"} className={""} /> <CustomLink href={"/about"} title={"About"} className={""} />
        <CustomLink href={"/projects"} title={"Projects"} className={""} />
        <div className={`flex items-center justify-center whitespace-nowrap gap-5 my-2`}>
          <NavIcon title="GitHub" aria-label="Github" href={"https://github.com/Chhatreshkhatri"} icon={<SiGithub size={32} className="" />} />
          <NavIcon
            title="LinkedIn"
            aria-label="LinkedIn"
            href={"https://www.linkedin.com/in/chhatreshkhatri"}
            icon={<SiLinkedin size={32} className="" />}
          />
          <NavIcon title="Mail" aria-label="Mail" href={"mailto:contact@chhatreshkhatri.com"} icon={<SiGmail size={32} className="" />} />
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
