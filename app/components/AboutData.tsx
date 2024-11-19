"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../loading";
interface Skill {
  name: string;
  color: string;
  icon: string;
}

interface Data {
  Content: { title: string; text: string };
  Sections: {
    title: string;
    skills: Skill[];
  }[];
}

export default function About() {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/about");
      const fetchedData: Data = await response.json();
      setData(fetchedData);
    };
    fetchData();
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div className="relative group rounded-lg w-full text-justify p-3 xs:p-6 xs:px-10 py-6">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <h2 className={`relative text-2xl xxs:text-3xl md:text-4xl text-center`}>{data.Content.title}</h2>
        <p className="relative text-lg xs:text-xl mt-4">{data.Content.text}</p>
      </div>
      <button className="rounded flex items-center justify-center bg-gradient-to-r from-blue1 to-yellow1 p-0.5">
        <h2 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-buttonBg dark:bg-darked rounded">Technology Stack</h2>
      </button>
      <div className="relative group rounded-lg w-full">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative flex flex-col w-full p-3 xs:p-6 xs:px-10 py-6 gap-4">
          {data.Sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">{section.title}</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
                {section.skills.map((data, index) => (
                  <div key={index} className={`items-center justify-center p-0.5 rounded bg-gradient-to-r from-yellow1 to-blue1 dark:from-blue1 dark:to-yellow1`}>
                    <div className={`flex justify-center items-center py-1 px-2 gap-x-2 rounded whitespace-nowrap bg-buttonBg dark:bg-darker `}>
                      <Image src={data.icon} alt={data.name} height={32} width={32} className="w-6 h-6 xs:w-8 xs:h-8" />
                      <p>{data.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
