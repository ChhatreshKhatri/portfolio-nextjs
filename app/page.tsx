import Image from "next/image";
import pfp from "./assets/chhatresh_banner.webp";
import { ResumeIcon } from "./components/icons";
import { SocialIcon } from "./components/socialicon.js";
import Link from "next/link";
import Typewriter from "./components/Typewriter";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col  font-medium px-2 xxs:px-3 xs:px-6 md:px-12 lg:px-20 py-25">
      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center font-semibold tracking-wider bg-gradient-to-r from-darkCk/50 to-lightCk/50 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 text-xl xxs:text-2xl md:text-3xl p-1 md:px-2">
          Welcome to my Portfolio
        </button>
      </div>
      <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-3">
        <div className="order-2 lg:order-1 lg:col-span-2 flex justify-end items-center dark:bg-darked rounded-xl bg-contentBg md:bg-transparent md:dark:bg-transparent">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center p-3 xs:p-6 lg:p-0">
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
            <div className="mt-8 flex space-x-4 text-md xxs:text-xl justify-center">
              <button>
                <Link
                  href={`https://drive.google.com/file/d/19RguGg9v2VWPQJa-XL_2sCASpk65u5hd/view`}
                  target="_blank"
                  className="py-1 px-2 rounded flex items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50 whitespace-nowrap"
                >
                  <ResumeIcon className="mr-2" />
                  Resume
                </Link>
              </button>
              <button>
                <Link
                  href={`https://social.chhatreshkhatri.com/`}
                  target="_blank"
                  className="py-1 px-2 rounded flex items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50 whitespace-nowrap"
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
              className="w-[60%] xs:w-[45%] md:w-[35%] lg:w-[80%] drop-shadow-3xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
