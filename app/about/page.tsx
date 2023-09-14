import Image from "next/image";
import C from "@/app/assets/about/c.svg";
import Cpp from "@/app/assets/about/c++.svg";
import Java from "@/app/assets/about/Java.svg";
import MySql from "@/app/assets/about/MySql.svg";
import Html from "@/app/assets/about/HTML5.svg";
import Css from "@/app/assets/about/CSS3.svg";
import JavaScript from "@/app/assets/about/JavaScript.svg";
import TypeScript from "@/app/assets/about/TypeScript.svg";
import Bootstrap from "@/app/assets/about/bootstrap.svg";
import Tailwind from "@/app/assets/about/TailwindCSS.svg";
import Reactjs from "@/app/assets/about/ReactJS.svg";
import Nextjs from "@/app/assets/about/Next.js.svg";
import Expressjs from "@/app/assets/about/express.svg";
import Nodejs from "@/app/assets/about/Node.svg";
import Axios from "@/app/assets/about/Axios.svg";
import Redux from "@/app/assets/about/Redux.svg";
import DotEnv from "@/app/assets/about/DotENV.svg";
import MongoDB from "@/app/assets/about/MongoDB.svg";
import Nodemon from "@/app/assets/about/Nodemon.svg";
import Netlify from "@/app/assets/about/Netlify.svg";
import Render from "@/app/assets/about/Render.svg";
import Back4App from "@/app/assets/about/Back4App.svg";
import Git from "@/app/assets/about/Git.svg";
import GitHub from "@/app/assets/about/GitHub.svg";
import GitHubActions from "@/app/assets/about/GitHubActions.svg";
import GitHubPages from "@/app/assets/about/GitHubPages.svg";
import Vercel from "@/app/assets/about/Vercel.svg";
import Firebase from "@/app/assets/about/Firebase.svg";
import Canva from "@/app/assets/about/Canva.svg";
import Gimp from "@/app/assets/about/Gimp.svg";
import Postman from "@/app/assets/about/Postman.svg";
import Cloudflare from "@/app/assets/about/Cloudflare.svg";
import AlibabaCloud from "@/app/assets/about/AlibabaCloud.svg";
import GoogleCloud from "@/app/assets/about/GoogleCloud.svg";
import VSCode from "@/app/assets/about/VSCode.svg";
import Linux from "@/app/assets/about/Linux.svg";
import Ubuntu from "@/app/assets/about/Ubuntu.svg";
import Windows11 from "@/app/assets/about/Windows11.svg";
import FaviconVisibilityChange from "../components/FaviconVisibilityChange";

export const metadata = {
  title: "Chhatresh Khatri | Portfolio | About",
  description:
    "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
  alternates: {
    canonical: "/about",
  },
};
const CustomImage = ({ SRC, title }: { SRC: string; title: string }) => {
  return <Image title={title} priority src={SRC} alt={title} className={`w-auto h-[35px] xs:h-[45px] m-1 xs:m-2 `} />;
}

export default function Page() {
  return (
    <main className="w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-3 xs:px-6 md:px-12 lg:px-20 py-25">
      <button>
        <h1 className="flex justify-center items-center font-semibold tracking-wider bg-gradient-to-r from-darkCk/50 to-lightCk/50 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 text-xl xxs:text-2xl md:text-3xl p-1 md:px-2">
          About Me
        </h1>
      </button>
      <div className="rounded-lg mt-10 bg-gradient-to-r p-1 from-darkCk/50 to-lightCk/50">
      <div className="dark:bg-darker rounded-xl bg-contentBg text-justify p-3 xs:p-6 xs:px-10 py-6">
        <h2 className={`text-2xl xxs:text-2xl xs:text-3xl md:text-4xl text-center`}>Description</h2>
        <p className="text-lg xs:text-xl mt-4">
          Hi there! My name is Chhatresh Khatri and I&apos;m a Full Stack developer with a passion for building modern
          and user-friendly websites and applications. I have experience working with a range of Tech Stack to create
          clean and modular code that follows industry best practices. In addition to my technical skills, I also have a
          keen eye for design and enjoy creating responsive and visually appealing websites. I&apos;m learning about the
          latest trends in the tech industry. I&apos;m a total go-getter and always bring my A-game, plus I&apos;m super
          easy to talk to! I&apos;m driven, self-motivated, and passionate about all things tech. Let&apos;s collaborate
          and create something extraordinary! Thanks for visiting my portfolio website!
        </p>
      </div>
      </div>
      <button>
        <h2 className="flex justify-center items-center font-semibold tracking-wider bg-gradient-to-r from-darkCk/50 to-lightCk/50 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 mt-10 text-xl xxs:text-2xl md:text-3xl p-1 md:px-2">
          Technology Stack
        </h2>
      </button>
      <div className="rounded-lg mt-10 bg-gradient-to-r p-1 from-darkCk/50 to-lightCk/50">
      <div className="w-full dark:bg-darker rounded-xl bg-contentBg p-3 xs:p-6 xs:px-10 py-6">
        <h3 className={`text-2xl xxs:text-3xl md:text-4xl text-center mt-4`}>Languages</h3>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <CustomImage SRC={C} title={`C`} />
          <CustomImage SRC={Cpp} title={`C++`} />
          <CustomImage SRC={Java} title={`Java`} />
          <CustomImage SRC={MySql} title={`MySQL`} />
          <CustomImage SRC={Html} title={`HTML5`} />
          <CustomImage SRC={Css} title={`CSS3`} />
          <CustomImage SRC={JavaScript} title={`JavaScript`} />
          <CustomImage SRC={TypeScript} title={`TypeScript`} />
        </div>
        <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">Framework & Libraries</h3>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <CustomImage SRC={Reactjs} title={`React.js`} />
          <CustomImage SRC={Nextjs} title={`Next.js`} />
          <CustomImage SRC={Expressjs} title={`Express.js`} />
          <CustomImage SRC={Nodejs} title={`Node.js`} />
          <CustomImage SRC={Bootstrap} title={`Bootstrap`} />
          <CustomImage SRC={Tailwind} title={`TailwindCSS`} />
          <CustomImage SRC={Axios} title={`Axios`} />
          <CustomImage SRC={Redux} title={`Redux`} />
          <CustomImage SRC={DotEnv} title={`DotENV`} />
        </div>
        <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">Tools & IDEs</h3>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <CustomImage SRC={MongoDB} title={`MongoDB`} />
          <CustomImage SRC={Nodemon} title={`Nodemon`} />
          <CustomImage SRC={Netlify} title={`Netlify`} />
          <CustomImage SRC={Render} title={`Render`} />
          <CustomImage SRC={Back4App} title={`Back4App`} />
          <CustomImage SRC={Git} title={`Git`} />
          <CustomImage SRC={GitHub} title={`GitHub`} />
          <CustomImage SRC={GitHubActions} title={`GitHub Actions`} />
          <CustomImage SRC={GitHubPages} title={`GitHub Pages`} />
          <CustomImage SRC={Vercel} title={`Vercel`} />
          <CustomImage SRC={Firebase} title={`Firebase`} />
          <CustomImage SRC={Canva} title={`Canva`} />
          <CustomImage SRC={Gimp} title={`Gimp`} />
          <CustomImage SRC={Postman} title={`Postman`} />
          <CustomImage SRC={Cloudflare} title={`Cloudflare`} />
          <CustomImage SRC={AlibabaCloud} title={`Alibaba Cloud`} />
          <CustomImage SRC={GoogleCloud} title={`Google Cloud`} />
          <CustomImage SRC={VSCode} title={`VS Code`} />
        </div>
        <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">OS</h3>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <CustomImage SRC={Linux} title={`Linux`} />
          <CustomImage SRC={Ubuntu} title={`Ubuntu`} />
          <CustomImage SRC={Windows11} title={`Windows 11`} />
        </div>
      </div>
      </div>
      <FaviconVisibilityChange />
    </main>
  );
}
