"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import Loading from "../loading";

interface Link {
  type: string;
  url: string;
  icon: string;
}
interface Project {
  heading: string;
  subHeading: string;
  description: string;
  image: string;
  links: Link[];
  tags: { name: string; url: string }[];
}
interface Projects {
  content: { title: string; description: string };
  projects: Project[];
}
export default function ProjectsData() {
  const [data, setData] = useState<Projects | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/projects");
      const data: Projects = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      {data.projects.map((project, index) => (
        <section key={index} className="group relative">
          <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
          <div className="relative grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl p-3 xs:p-6">
            <article className={`${(index + 1) % 2 ? "" : "lg:order-2"}`}>
              {/* Content for the first column */}
              <div className="w-full h-full flex flex-col justify-center items-center xs:px-8 gap-y-4">
                {/* Centered content in the first column */}
                <h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">{project.heading}</h2>
                <h3 className="text-xl xl:text-3xl font-semibold text-center">{project.subHeading}</h3>
                <p className="text-lg xs:text-xl text-justify">{project.description} </p>
                <div className="flex flex-wrap items-center justify-center gap-2 xxs:gap-4 text-md xs:text-xl">
                  {project.links.map((link, index) => (
                    <LinkButton key={index} name={link.type} link={link.url} url={link.icon} pos={index % 2} />
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 xxs:gap-4 text-md xs:text-xl">
                  {project.tags?.map((tag, index) => (
                    <div key={index} role="button" title={tag.name} className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl py-1 px-2 bg-buttonBg dark:bg-darked rounded border-2 border-dark dark:border-light">
                      <Image title={tag.name} src={tag.url} alt={tag.name + " alt"} width={24} height={24} className="w-6 h-6 xs:w-8 xs:h-8 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <aside className="flex justify-start items-center mt-6 lg:mt-0">
              {/* Content for the second column */}
              <div className="w-full h-full flex justify-center items-center relative">
                {/* Centered content in the second column */}
                <div role="img" aria-label={`${project.heading}'s Image`} className="w-full h-[300px] md:h-[350px] relative overflow-hidden rounded-2xl scroll-div xs:px-8">
                  <Image title={project.heading} priority src={project.image} alt={`${project.heading} Image`} width={480} height={480} className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom" />
                </div>
              </div>
            </aside>
          </div>
        </section>
      ))}
    </>
  );
}
