"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../assets/cklogo.svg";
import path from "path";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";
export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="px-12 w-full py-3 font-medium flex items-center justify-between text-2xl">
      <Link
        href={"/"}
        className="bg-gradient-to-r from-darkCk to-lightCk bg-clip-text text-base text-transparent font-bold sm:text-2xl transform transition-transform duration-300 hover:scale-110"
      >
        CHHATRESH KHATRI
      </Link>
      <nav className={``}>
        <Link
          href={"/"}
          className={`${
            pathname == "/" ? "font-bold" : ""
          } mx-4 relative group`}
        >
          Home
          <span
            className={`${
              pathname === "/" ? "w-full" : "w-0"
            } h-[1.5px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-width ease duration-400`}
          ></span>
        </Link>
        <Link
          href={"/about"}
          className={`${
            pathname == "/about" ? "font-bold" : ""
          } mx-4 relative group`}
        >
          About
          <span
            className={`${
              pathname === "/about" ? "w-full" : "w-0"
            } h-[1.5px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-width ease duration-400`}
          ></span>
        </Link>
        <Link
          href={"/projects"}
          className={`${
            pathname == "/projects" ? "font-bold" : ""
          } mx-4 relative group`}
        >
          Projects
          <span
            className={`${
              pathname === "/projects" ? "w-full" : "w-0"
            } h-[1.5px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-width ease-in-out duration-400`}
          ></span>
        </Link>
      </nav>
      <nav className="flex items-center justify-center flex-wrap fx-12">
        <Link
          href={"https://github.com/chhatreshkhatri"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex align-center justify-center transform transition-transform duration-300 hover:scale-110"
        >
          <GithubIcon className="w-{}16px" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/chhatreshkhatri/"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex align-center justify-center px-5 transform transition-transform duration-300 hover:scale-110"
        >
          <LinkedInIcon className="w-8" />
        </Link>
      </nav>
    </header>
  );
}
