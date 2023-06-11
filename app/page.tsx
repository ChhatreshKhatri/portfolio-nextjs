"use client";
import Image from "next/image";
import pfp from "./assets/banner_pic.webp";
import Typewriter from "typewriter-effect";
import { ResumeIcon } from "./components/icons";
import { SocialIcon } from "./components/socialicon.js";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-4 md:px-12 lg:px-20 py-[100px]">
      <div className="w-full h-full flex justify-center">
        <span className="font-semibold tracking-wider  bg-gradient-to-r from-darkCk/80 to-lightCk/90 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 inline-block text-2xl md:text-3xl px-1 md:px-2 py-1 ">
          Welcome to my Portfolio
        </span>
      </div>
      <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-3">
        <div className="order-2 lg:order-1 lg:col-span-2 flex justify-end items-center">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center space-y-4">
            {/* Centered content in the first column */}
            <h1 className="text-2xl xxs:text-3xl xs:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold pt-6 xs:pt-10 text-center">
              {`Hi! I'm Chhatresh Khatri`}
            </h1>
            <h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold mt-4 text-center">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Web Designer",
                    "Software Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-xl mt-4 text-justify">
              B.Tech in Computer Science & Engineering and I am skilled in
              problem solving and web-development, as well as being an
              enthusiastic and self-motivated professional with great
              interpersonal and communication skills.
            </p>
            <div className="mt-8 flex space-x-4 text-xl justify-center">
              <Link
                href={`https://drive.google.com/file/d/19RguGg9v2VWPQJa-XL_2sCASpk65u5hd/view`}
                className="py-1 px-2 rounded flex items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/80 hover:to-lightCk/80"
              >
                <ResumeIcon className="mr-2" />
                Resume
              </Link>
              <Link
                href={`https://social.chhatreshkhatri.com/`}
                className="py-1 px-2 rounded flex items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/80 hover:to-lightCk/80"
              >
                <SocialIcon className="mr-2" />
                SocialLinks
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-start items-center">
          {/* Content for the second column */}
          <div className="w-full h-full flex justify-center items-center">
            {/* Centered content in the second column */}
            <Image
              src={pfp}
              alt="picture"
              className="w-[60%] xs:w-[50%] md:w-[30%] lg:w-[80%] drop-shadow-3xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
