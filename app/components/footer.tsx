import Link from "next/link";
import { ChhatreshKhatri } from "./icons";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center w-full shadow-top bg-navbarBg dark:bg-darker py-2 px-3 xs:px-6 md:px-12 lg:px-20 mt-auto space-y-0.5">
      <div className="flex justify-center items-center" title="Chhatresh Khatri">
        <ChhatreshKhatri className={`flex`} />
      </div>
      <div className="flex items-center justify-center text-center">&copy; 2023 All Rights Reserved</div>
      <div className="flex items-center justify-center text-center">
        &nbsp; Developed By &nbsp;<strong>Chhatresh Khatri</strong>
      </div>
      <Link href={`/privacy-policy`}>Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
