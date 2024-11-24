import Link from "next/link";
import { ChhatreshKhatri } from "./icons";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full shadow-top bg-navbarBg dark:bg-darker py-2 px-3 xs:px-6 md:px-12 lg:px-20 mt-auto space-y-0.50">
        <section className="flex justify-center items-center" title="Chhatresh Khatri">
          <ChhatreshKhatri className={``} alt="Chhatresh Khatri Logo" />
        </section>
        <section className="flex items-center justify-center text-center">
          <p>
            &copy; <strong>Chhatresh Khatri 2023&nbsp;</strong>
          </p>
        </section>
        <section className="flex justify-center items-center">
          <Link href="/privacy-policy" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
