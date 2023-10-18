"use client";
import { ResumeIcon, SocialIcon } from "./components/icons";
import Typewriter from "./components/Typewriter";
import { CldImage } from "next-cloudinary";
import LinkButton from "./components/LinkButton";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <button className="flex items-center justify-center rounded p-0.5 bg-gradient-to-r from-darkCk to-lightCk">
          <span className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-contentBg dark:bg-darked rounded">
            Welcome to my Portfolio
          </span>
        </button>
      </div>
      <div className="relative group grid grid-cols-1 w-full lg:grid-cols-3">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-darkCk/50 to-lightCk/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative order-2 lg:order-1 lg:col-span-2 flex justify-end items-center rounded-lg">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center rounded-lg p-2 md:gap-4 xs:p-6">
            {/* Centered content in the first column */}
            <h1 className="text-2xl xxs:text-2xl xs:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-center">{`Hi! I'm Chhatresh Khatri`}</h1>
            <h2 className="text-2xl xxs:text-2xl xs:3xl md:text-4xl xl:text-5xl font-semibold text-center">
              <Typewriter />
            </h2>
            <p className="text-lg xs:text-xl text-justify mt-1">
              A Computer Science & Engineering graduate with a passion for problem-solving and web development. An enthusiastic, self-motivated
              professional with strong interpersonal and communication skills, I&apos;m passionate about the latest tech trends. A quick learner and
              team player, I thrive on new opportunities and challenges.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 xxs:gap-4 mt-4 text-md xxs:text-xl">
              <LinkButton
                name="Resume"
                link="https://drive.google.com/file/d/1i_gAK3PxDoMok4g5XEh0KTaD7Dm-JRR_/view?usp=sharing"
                icon={<ResumeIcon className="" />}
                pos="0"
              />
              <LinkButton name="Social Links" link="https://social.chhatreshkhatri.com/" icon={<SocialIcon className="" />} pos={"1"} />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-start items-center">
          {/* Content for the second column */}
          <div className="w-full h-full flex justify-center items-center py-5">
            {/* Centered content in the second column */}
            <CldImage
              width={480}
              height={480}
              src={`v1695488626/portfolio/chhatresh_khatri_judigr.webp`}
              priority
              alt="Chhatresh Khatri Banner"
              className="w-[60%] xs:w-[50%] md:w-[35%] lg:w-[100%] xl:w-[80%] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
