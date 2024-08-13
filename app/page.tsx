"use client";
import Typewriter from "./components/Typewriter";
import LinkButton from "./components/LinkButton";
import Image from "next/image";
import PageHead from "@/app/components/PageHead";
import { ResumeIcon, SocialIcon } from "./components/icons";
import FaviconVisibility from "./components/FaviconVisibility";
export default function Home() {
  return (
    <>
      <PageHead text="Welcome to my Portfolio" />
      <div className="relative group grid grid-cols-1 w-full lg:grid-cols-3">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative order-2 lg:order-1 lg:col-span-2 flex justify-end items-center rounded-lg">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center rounded-lg p-2 md:gap-4 xs:p-6">
            {/* Centered content in the first column */}
            <h2 className="text-2xl xxs:text-2xl xs:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-center">{`Hi! I'm Chhatresh Khatri`}</h2>
            <span className="text-2xl xxs:text-2xl xs:3xl md:text-4xl xl:text-5xl font-semibold text-center">
              <Typewriter />
            </span>
            <p className="text-lg xs:text-xl text-justify mt-1">
              A Computer Science & Engineering graduate with a passion for problem-solving and web development. An enthusiastic, self-motivated professional with strong interpersonal and communication skills, I&apos;m passionate about the latest tech trends. A quick learner and team player, I thrive
              on new opportunities and challenges.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 xxs:gap-4 mt-4 text-md xxs:text-xl">
              <LinkButton name="Resume" link="https://drive.google.com/file/d/1i_gAK3PxDoMok4g5XEh0KTaD7Dm-JRR_/view?usp=sharing" icon={<ResumeIcon className="w-6 xs:w-8" />} pos="0" />
              <LinkButton name="Social Links" link="https://links.chhatreshkhatri.com/" icon={<SocialIcon className="w-6 xs:w-8" />} pos={"1"} />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-start items-center">
          {/* Content for the second column */}
          <div className="w-full h-full flex justify-center items-center py-5">
            {/* Centered content in the second column */}
            <Image priority src={`https://cdn.chhatreshkhatri.com/images/ChhatreshKhatri.webp`} alt={"Chhatresh Khatri"} height={512} width={512} className="w-[60%] xs:w-[50%] md:w-[35%] lg:w-[100%] xl:w-[80%] drop-shadow-2xl" />
          </div>
        </div>
      </div>
      <FaviconVisibility />
    </>
  );
}
