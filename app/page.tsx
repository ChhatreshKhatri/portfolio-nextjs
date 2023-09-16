import Image from "next/image";
import pfp from "./assets/chhatresh_banner.webp";
import { ResumeIcon } from "./components/icons";
import { SocialIcon } from "./components/socialicon.js";
import Link from "next/link";
import Typewriter from "./components/Typewriter";
import FaviconVisibilityChange from "./components/FaviconVisibilityChange";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col  font-medium px-3 xs:px-6 md:px-12 lg:px-20 py-20">
      <div className="flex justify-center items-center">
        <button className="rounded mb-4 p-[2px] flex items-center justify-center bg-gradient-to-r from-darkCk/50 to-lightCk/50">
          <span className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-contentBg dark:bg-darked rounded">
            Welcome to my Portfolio
          </span>
        </button>
      </div>
      <div className="relative group grid grid-cols-1 w-full lg:grid-cols-3 mt-4">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-darkCk/50 to-lightCk/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative order-2 lg:order-1 lg:col-span-2 flex justify-end items-center rounded-lg">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center rounded-lg p-2 xs:p-6">
            {/* Centered content in the first column */}
            <h1 className="text-2xl xxs:text-2xl xs:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-center">{`Hi! I'm Chhatresh Khatri`}</h1>
            <h2 className="text-2xl xxs:text-2xl xs:3xl md:text-4xl xl:text-5xl font-semibold mt-4 text-center">
              <Typewriter />
            </h2>
            <p className="text-lg xs:text-xl mt-4 text-justify">
              B.Tech in Computer Science & Engineering with skills in problem solving and web development. An
              enthusiastic, self-motivated professional with strong interpersonal and communication skills, I&apos;m
              passionate about the latest tech trends. A quick learner and team player, I thrive on new opportunities
              and challenges.
            </p>
            <div className="flex justify-center items-center  text-md xxs:text-xl">
              <button className="rounded mt-10 p-[2px] flex items-center justify-center bg-gradient-to-r from-lightCk/50 to-darkCk/50">
                <Link
                  href={`https://drive.google.com/file/d/1i_gAK3PxDoMok4g5XEh0KTaD7Dm-JRR_/view?usp=sharing`}
                  target="_blank"
                  className="flex justify-center items-center py-1 px-2 rounded whitespace-nowrap bg-lighter dark:bg-darker"
                >
                  <ResumeIcon className="mr-2" />
                  Resume
                </Link>
              </button>
              <button className="flex items-center justify-center ml-4 mt-10 p-[2px] rounded bg-gradient-to-r from-darkCk/50 to-lightCk">
                <Link
                  href={`https://social.chhatreshkhatri.com/`}
                  target="_blank"
                  className="flex justify-center items-center py-1 px-2 rounded  whitespace-nowrap bg-lighter dark:bg-darker"
                >
                  <SocialIcon className="mr-2" />
                  Social Links
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-start items-center">
          {/* Content for the second column */}
          <div className="w-full h-full flex justify-center items-center pb-10">
            {/* Centered content in the second column */}
            <Image
              src={pfp}
              priority
              alt="Chhatresh Khatri Banner"
              className="w-[60%] xs:w-[50%] md:w-[35%] lg:w-[100%] xl:w-[80%] drop-shadow-3xl"
            />
          </div>
        </div>
      </div>
      <FaviconVisibilityChange />
    </main>
  );
}
