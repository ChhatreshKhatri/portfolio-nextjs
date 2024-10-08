import Link from "next/link";
import { ChhatreshKhatri } from "./icons";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full shadow-top bg-navbarBg dark:bg-darker py-2 px-3 xs:px-6 md:px-12 lg:px-20 mt-auto space-y-0.50">
        <div className="flex justify-center items-center" title="Chhatresh Khatri">
          <ChhatreshKhatri className={``} alt="Chhatresh Khatri Logo" />
        </div>
        <div className="flex items-center justify-center text-center">
          <p>
            &copy; <strong>Chhatresh Khatri 2023&nbsp;</strong>
          </p>
        </div>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
