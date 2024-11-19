"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import Loading from "../loading";
interface Link {
  Type: string;
  Url: string;
  Icon: string;
  Pos: string;
}
interface Project {
  Heading: string;
  SubHeading: string;
  Description: string;
  Image: string;
  Links: Link[];
  Order: string;
}
interface Projects {
  Content: { Title: string; Description: string };
  Projects: Project[];
}
export default function ProjectsData() {
  const [data, setData] = useState<Projects | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/projects");
      const data: Projects = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      {data.Projects.map((project, index) => (
        <div key={index} className="group relative">
          <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
          <div className="relative grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl p-3 xs:p-6">
            <div className={`${project.Order == "odd" ? "" : "lg:order-2"}`}>
              {/* Content for the first column */}
              <div className="w-full h-full flex flex-col justify-center items-center xs:px-8 gap-y-4">
                {/* Centered content in the first column */}
                <h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">{project.Heading}</h2>
                <h3 className="text-xl xl:text-3xl font-semibold text-center">{project.SubHeading}</h3>
                <p className="text-lg xs:text-xl text-justify">{project.Description} </p>
                <div className="flex flex-wrap items-center justify-center  gap-2 xxs:gap-4 text-md xs:text-xl">
                  {project.Links.map((link, index) => (
                    <LinkButton key={index} name={link.Type} link={link.Url} url={link.Icon} pos={link.Pos} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center mt-6 lg:mt-0">
              {/* Content for the second column */}
              <div className="w-full h-full flex justify-center items-center relative">
                {/* Centered content in the second column */}
                <div className="w-full h-[300px] md:h-[350px] relative overflow-hidden rounded-2xl scroll-div xs:px-8">
                  <Image title={project.Heading} priority src={project.Image} alt={`${project.Heading} Image`} width={480} height={480} className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
