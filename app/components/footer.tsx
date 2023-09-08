import Link from "next/link";
import Image from "next/image";
import chhatresh from "@/app/assets/chhatresh_khatri.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center w-full shadow-top bg-navbarBg dark:bg-darker py-2 px-2 xs:px-4 md:px-12 lg:px-20 mt-auto">
      <div title="Chhatresh Khatri" aria-label="Chhatresh Khatri" className="flex justify-center items-center">
        <Image src={chhatresh} alt="Chhatresh Khatri" />
      </div>
      <div className="flex items-center justify-center text-center">
        &copy; 2023 All Rights Reserved by Chhatresh Khatri
      </div>
      <Link href={`/privacy-policy`}>Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
