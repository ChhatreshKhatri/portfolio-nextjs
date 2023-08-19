"use client";
// use this to add external images -> https://nextjs.org/docs/messages/next-image-unconfigured-host
import Image from "next/image";
import Link from "next/link";
import { LinkIcon, GithubIcon, AlibabaCloudIcon } from "@/app/components/icons";
interface CustomProps {
  heading: string;
  subHeading: string;
  projectContent: string;
  projectImage: string;
  link1: string;
  link2: string;
  link1Type: string;
  link2Type: string;
}
const ProjectHolder: React.FC<CustomProps> = ({ heading, subHeading, projectContent, projectImage, link1, link2, link1Type, link2Type }) => {
  return (
    <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl bg-contentBg dark:bg-darked mt-6 p-3 xs:p-6">
      {/* <div className="absolute right-[50%] -mt-10 rounded-[50%] bg-dark text-light dark:bg-light dark:text-dark text-center w-12 -12 text-3xl">1</div> */}
      <div className="flex items-center">
        {/* Content for the first column */}
        <div className="w-full h-full flex flex-col justify-center items-center xs:px-8">
          {/* Centered content in the first column */}
          <h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">{heading}</h2>
          <h3 className="text-xl  xl:text-3xl font-semibold mt-4 text-center">{subHeading}</h3>
          <p className="text-xl mt-4 text-justify">{projectContent}</p>
          <div className="mt-8 flex space-x-4 text-xl justify-center">
            {link2 == "" ? (
              ""
            ) : (
              <Link href={link1} target="_blank" className="py-1 px-2 rounded flex items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50">
                <GithubIcon className="mr-2" />
                {link1Type}
              </Link>
            )}
            <Link href={link1} target="_blank" className="py-1 px-2 rounded flex items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50">
              {link1Type.indexOf("Alibaba") >= 0 ? <AlibabaCloudIcon className="mr-2" /> : <LinkIcon className="mr-2" />}
              {link1Type}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center mt-6 lg:mt-0">
        {/* Content for the second column */}
        <div className="w-full h-full flex justify-center items-center relative">
          {/* Centered content in the second column */}
          <div className="w-full h-[300px] md:h-[350px] relative overflow-hidden rounded-2xl scroll-div xs:px-8">
            <Image
              priority
              src={projectImage}
              alt="Ramaa Creations project"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHolder;