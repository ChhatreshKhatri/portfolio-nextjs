import Image from "next/image";
import C from "@/app/assets/about/c.svg";
import Cpp from "@/app/assets/about/c++.svg";
import Java from "@/app/assets/about/java.svg";
import MySql from "@/app/assets/about/mysql.svg";
import Html from "@/app/assets/about/HTML5.svg";
import Css from "@/app/assets/about/CSS3.svg";
import JavaScript from "@/app/assets/about/javascript.svg";
import Bootstrap from "@/app/assets/about/bootstrap.svg";
import Tailwind from "@/app/assets/about/TailwindCSS.svg";
import Reactjs from "@/app/assets/about/ReactJS.svg";
import Nextjs from "@/app/assets/about/Next.js.svg";
import Expressjs from "@/app/assets/about/express.svg";
import Nodejs from "@/app/assets/about/Node.svg";
import Axios from "@/app/assets/about/Axios.svg";
import ReactRouter from "@/app/assets/about/ReactRouter.svg";
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
import AndroidStudio from "@/app/assets/about/AndroidStudio.svg";
import VSCode from "@/app/assets/about/VSCode.svg";
import Linux from "@/app/assets/about/Linux.svg";
import Ubuntu from "@/app/assets/about/Ubuntu.svg";
import Windows11 from "@/app/assets/about/Windows11.svg";

export const metadata = {
  title: "Chhatresh Khatri | Portfolio | About",
  description:
    "Chhatresh Khatri is a web developer with expertise in a wide range of technologies including C/C++, Java, HTML5, CSS3, JavaScript, React, Next.js, and more.",
  alternates: {
    canonical: "https://www.chhatreshkhatri.com/about",
  },
};

export default function Page() {
  return (
    <main className="w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-3 xs:px-6 md:px-12 lg:px-20 py-24">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="flex justify-center items-center w-auto font-semibold tracking-wider bg-gradient-to-r from-darkCk/50 to-lightCk/50 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 text-xl xxs:text-2xl md:text-3xl px-1 md:px-2 py-1">
          About Me
        </h1>
      </div>
      <div className="dark:bg-darked rounded-xl bg-contentBg text-justify p-3 xs:p-6 xs:px-10 py-6 mt-6">
        <h2 className={`text-2xl xxs:text-2xl xs:text-3xl md:text-4xl text-center`}>Description</h2>
        <p className="text-lg xs:text-xl mt-4">
          Hi there! My name is Chhatresh Khatri and I&apos;m a web developer with a passion for building modern and user-friendly websites and
          applications. I have experience working with a range of Tech Stack to create clean and modular code that follows industry best practices. In
          addition to my technical skills, I also have a keen eye for design and enjoy creating responsive and visually appealing websites. I&apos;m
          learning about the latest trends in the tech industry. I&apos;m a total go-getter and always bring my A-game, plus I&apos;m super easy to
          talk to! I&apos;m driven, self-motivated, and passionate about all things tech. Let&apos;s work together and make something amazing! Thanks
          for visiting my portfolio website!
        </p>
      </div>
      <div className="w-full h-full flex justify-center">
        <h2 className="font-semibold tracking-wider bg-gradient-to-r from-darkCk/50 to-lightCk/50 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 inline-block text-2xl md:text-3xl px-1 md:px-2 py-1 mt-10">
          Technology Stack
        </h2>
      </div>
      <div className="dark:bg-darked rounded-xl bg-contentBg px-6 xs:px-10 py-6 mt-6 w-full">
        <h3 className={`text-2xl xxs:text-3xl md:text-4xl text-center pt-4`}>Languages</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          <Image src={C} alt={`C`} className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />{" "}
          <Image src={Cpp} alt={`C++`} className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />{" "}
          <Image src={Java} alt={`Java`} className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />{" "}
          <Image src={MySql} alt={`MySQL`} className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />{" "}
          <Image src={Html} alt={`HTML5`} className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />{" "}
          <Image src={Css} alt={`CSS3`} className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />{" "}
          <Image src={JavaScript} alt={`JavaScript`} className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
        </div>
        <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">Framework & Libraries</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          <Image src={Bootstrap} alt="Bootstrap" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Tailwind} alt="TailwindCSS" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Reactjs} alt="ReactJS" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Nextjs} alt="Next.js" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Expressjs} alt="Express" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Nodejs} alt="Node.js" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Axios} alt="Axios" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={ReactRouter} alt="React Router" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Redux} alt="Redux" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={DotEnv} alt="DotENV" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
        </div>
        <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">Tools & IDEs</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          {/* prettier-ignore */}
          <Image src={MongoDB} alt="MongoDB" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Nodemon} alt="Nodemon" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Netlify} alt="Netlify" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Render} alt="Render" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Back4App} alt="Back4App" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Git} alt="Git" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={GitHub} alt="GitHub" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={GitHubActions} alt="GitHub Actions" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={GitHubPages} alt="GitHub Pages" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Vercel} alt="Vercel" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Firebase} alt="Firebase" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Canva} alt="Canva" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Gimp} alt="Gimp" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Postman} alt="Postman" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Cloudflare} alt="Cloudflare" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={AlibabaCloud} alt="Alibaba Cloud" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={GoogleCloud} alt="Google Cloud" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={AndroidStudio} alt="Android Studio" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={VSCode} alt="VS Code" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
        </div>
        <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">OS</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          <Image src={Linux} alt="Linux" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `} />
          <Image src={Ubuntu} alt="Ubuntu" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px] `}/>
          <Image src={Windows11} alt="Windows 11" className={`h-[35px] w-auto m-1 xs:m-3 xs:h-[45px]`} />
        </div>
      </div>
    </main>
  );
}
