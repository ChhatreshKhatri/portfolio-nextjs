"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ChhatreshKhatri, GitHubIcon, LinkedInIcon, GmailIcon, SunIcon, MoonIcon, CKIconHidden } from "./icons";
const CustomLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} relative flex items-center justify-center group py-1`}>
      <p>{title}</p>
      <span className={`${path === href ? "w-full" : "w-0"} absolute h-0.5 bg-gradient-to-r from-blue1 to-yellow1 bottom-0.5 group-hover:w-full transition-[width] ease duration-500`}></span>
    </Link>
  );
};
const NavIcon = ({ title, href, icon, className = "" }: { title: string; href: string; icon: React.ReactNode; className?: string }) => (
  <Link title={title} aria-label={title} href={href} target="_blank" rel="noopener noreferrer" className={`flex align-center justify-center transform transition-transform duration-300 hover:scale-110 w-8 ${className}`}>
    {icon}
  </Link>
);
const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Call onScroll once to set the initial state
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const visitsUrl =
    `https://visits.chhatreshkhatri.com/` +
    process.env.NEXT_PUBLIC_visitCounter?.toString() +
    `?LBGC=3048C680&CBGC=30C68A80&LTC=${resolvedTheme === "dark" ? "FFFFFF" : "000000"}&CTC=${resolvedTheme === "dark" ? "FFFFFF" : "000000"}&LBC=3048C680&BC=30C68A80&TC=${resolvedTheme === "dark" ? "FFFFFF" : "000000"}&TTC=${resolvedTheme === "dark" ? "FFFFFF" : "000000"}`;
  return (
    <>
      <nav className={`bg-navbarBg/60 dark:bg-darker/70 backdrop-blur-md shadow-bottom py-1.5 transition-navBar duration-200 ease-in-out w-full flex-col items-center px-3 xs:px-6 md:px-12 lg:px-20 fixed z-10 flex`}>
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between w-full">
          <div className="flex justify-between">
            <Link title="Chhatresh Khatri" aria-label="Chhatresh Khatri" href={"/"} className="flex justify-center items-center">
              <ChhatreshKhatri className={``} />
            </Link>
            <div
              role="button"
              aria-label="Toggle Menu"
              className={`flex-col justify-center items-center flex lg:hidden`}
              onClick={() => {
                setNavOpen(!navOpen);
              }}>
              <span className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${navOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
              <span className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${navOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}></span>
            </div>
          </div>
          <div className={`${navOpen ? "flex" : "hidden"} flex-col lg:flex lg:flex-row items-center justify-center gap-x-8 text-xl font-semibold`}>
            <CustomLink href={"/"} title={"Home"} className="" />
            <CustomLink href={"/about"} title={"About"} className="" />
            <CustomLink href={"/projects"} title={"Projects"} className="" />
          </div>
          <div className={`${navOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:flex items-center justify-center py-1 lg:py-0 gap-x-5 gap-y-1`}>
            <div className="flex items-center justify-center py-1 lg:py-0 gap-x-5">
              <NavIcon title="GitHub" aria-label="Github" href={"https://github.com/Chhatreshkhatri"} icon={<GitHubIcon className="w-8" />} />
              <NavIcon title="LinkedIn" aria-label="LinkedIn" href={"https://www.linkedin.com/in/chhatreshkhatri"} icon={<LinkedInIcon className="w-8" />} />
              <NavIcon title="Mail" aria-label="Mail" href={"mailto:contact@chhatreshkhatri.com"} icon={<GmailIcon className="w-8" />} />
              {mounted && (
                <button
                  title={resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
                  aria-label="Toggle Theme"
                  type="button"
                  className={`${resolvedTheme === "dark" ? " text-light" : " text-dark"} flex align-center justify-center focus:outline-none transition duration-300 ease-in-out hover:scale-110 w-8`}
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                  {resolvedTheme === "dark" ? <SunIcon className={`w-8`} /> : <MoonIcon className={`w-8`} />}
                </button>
              )}
            </div>

            {mounted && <Image title="Total Visits" src={visitsUrl} alt={"visits"} width={118} height={8} className="h-8" />}
          </div>
        </div>
      </nav>
      {/* <nav className="xs:hidden flex flex-col lg:flex-row justify-between items-center bg-navbarBg/60 dark:bg-darker/70 backdrop-blur shadow py-2 px-3 rounded fixed bottom-4 left-1/2 transform -translate-x-1/2 space-y-0.5">
        <div className="flex justify-center space-x-4">
          <Link href={"/"} aria-label="CK Icon">
            <CKIconHidden />
          </Link>
          <CustomLink href={"/"} title={"Home"} className="" />
          <CustomLink href={"/about"} title={"About"} className="" />
          <CustomLink href={"/projects"} title={"Projects"} className="" />
          <button
            aria-label="Toggle Menu"
            className={`flex flex-col justify-center `}
            onClick={() => {
              setNavOpen(!navOpen);
            }}>
            <span className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
            <span className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${navOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}></span>
          </button>
        </div>
      </nav>
      {navOpen && (
        <div className="fixed xs:hidden flex bottom-16 left-1/2 transform -translate-x-1/2 bg-navbarBg/60 dark:bg-darker/70 backdrop-blur shadow py-2 px-3 rounded min-w-72">
          <div className="flex items-center justify-center w-full gap-x-4">
            <NavIcon title="GitHub" aria-label="Github" href={"https://github.com/Chhatreshkhatri"} icon={<GitHubIcon className="w-6" />} />
            <NavIcon title="LinkedIn" aria-label="LinkedIn" href={"https://www.linkedin.com/in/chhatreshkhatri"} icon={<LinkedInIcon className="w-6" />} />
            <NavIcon title="Mail" aria-label="Mail" href={"mailto:contact@chhatreshkhatri.com"} icon={<GmailIcon className="w-6" />} />
            {mounted && (
              <button
                title={resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
                aria-label="Toggle Theme"
                type="button"
                className={`${resolvedTheme === "dark" ? "text-light" : "text-dark"} flex align-center justify-center focus:outline-none transition duration-300 ease-in-out hover:scale-110 w-6`}
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                {resolvedTheme === "dark" ? <SunIcon className={`w-8`} /> : <MoonIcon className={`w-6`} />}
              </button>
            )}

            {mounted && <Image title="Total Visits" src={visitsUrl} alt={"visits"} width={88} height={6} className="" />}
          </div>
        </div>
      )} */}
    </>
  );
};
export default Navbar;
