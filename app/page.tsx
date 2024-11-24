"use client";
import Typewriter from "./components/Typewriter";
import LinkButton from "./components/LinkButton";
import Image from "next/image";
import PageHead from "@/app/components/PageHead";
import { ResumeIcon, SocialIcon } from "./components/icons";
import FaviconVisibility from "./components/FaviconVisibility";
import { useState, useEffect } from "react";
import Loading from "./loading";

interface Link {
  type: string;
  url: string;
  icon: string;
}

interface Data {
  content: string;
  pic: string;
  links: Link[];
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL!+'/home');
      const fetchedData: Data = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []); // Empty dependency runs once on mount

  if (!data) {
    return <Loading />; // If no data is present, show loading state
  }

  return (
    <>
      <PageHead text="Welcome to my Portfolio" />
      <section  className="relative group grid grid-cols-1 w-full lg:grid-cols-3">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <article className="relative order-2 lg:order-1 lg:col-span-2 flex justify-end items-center rounded-lg">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center rounded-lg p-2 md:gap-4 xs:p-6">
            <h2 className="text-2xl xxs:text-2xl xs:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-center">{`Hi! I'm Chhatresh Khatri`}</h2>
            <span className="text-2xl xxs:text-2xl xs:3xl md:text-4xl xl:text-5xl font-semibold text-center">
              <Typewriter />
            </span>
            <p className="text-lg xs:text-xl text-justify mt-1">
              {data.content} {/* Display the fetched content */}
            </p>
            {/* Display the fetched links */}
            <div className="flex flex-wrap justify-center items-center gap-2 xxs:gap-4 mt-4 text-md xxs:text-xl">
            {data.links.map((link, index) => (
              <LinkButton key={index} name={link.type} link={link.url} url={link.icon} pos={index%2} />
            ))}
            </div>
          </div>
        </article>
        <aside  className="order-1 lg:order-2 lg:col-span-1 flex justify-start items-center">
          {/* Content for the second column */}
          <div role="img" className="w-full h-full flex justify-center items-center py-5">
            <Image
              priority
              title="Chhatresh Khatri"
              src={data.pic || "/icon.svg"}
              alt={"Chhatresh Khatri"}
              height={480}
              width={480}
              className="w-[60%] xs:w-[50%] md:w-[35%] lg:w-[100%] xl:w-[80%] drop-shadow-2xl"
            />
          </div>
        </aside >
      </section >
      <FaviconVisibility />
    </>
  );
}
