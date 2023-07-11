import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center w-full shadow-top bg-slate-300 dark:bg-darker py-2 px-2 xxs:px-4 md:px-12 lg:px-20 mt-auto">
      <div className="bg-gradient-to-r from-darkCk to-lightCk bg-clip-text text-transparent text-2xl font-semibold">
        CHHATRESH KHATRI
      </div>
      <div className="flex items-center justify-center text-center">
        &copy; 2023 All Rights Reserved by Chhatresh Khatri
      </div>
      <Link href={`/privacy-policy`}>Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
