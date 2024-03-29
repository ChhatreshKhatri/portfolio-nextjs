// use this to add external images -> https://nextjs.org/docs/messages/next-image-unconfigured-host
import Image from "next/image";
import LinkButton from "./LinkButton";
const ProjectHolder = ({
  heading,
  subHeading,
  projectContent,
  projectImage,
  link1,
  link1Type,
  link1Icon,
  link2,
  link2Type,
  link2Icon,
  order,
}: {
  heading: string;
  subHeading: string;
  projectContent: string;
  projectImage: string;
  link1: string;
  link1Type: string;
  link1Icon: React.ReactNode;
  link2: string;
  link2Type: string;
  link2Icon: React.ReactNode;
  order: string;
}) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
      <div className="relative grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl p-3 xs:p-6">
        <div className={`${order == "odd" ? "" : "lg:order-2"}`}>
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center items-center xs:px-8 gap-y-4">
            {/* Centered content in the first column */}
            <h2 className="text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">{heading}</h2>
            <h3 className="text-xl xl:text-3xl font-semibold text-center">{subHeading}</h3>
            <p className="text-lg xs:text-xl text-justify">{projectContent} </p>
            <div className="flex flex-wrap items-center justify-center  gap-2 xxs:gap-4 text-md xs:text-xl">
              {link1 ? <LinkButton name={link1Type} link={link1} icon={link1Icon} pos={`0`} /> : ""}
              {link2 ? <LinkButton name={link2Type} link={link2} icon={link2Icon} pos={"1"} /> : ""}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center mt-6 lg:mt-0">
          {/* Content for the second column */}
          <div className="w-full h-full flex justify-center items-center relative">
            {/* Centered content in the second column */}
            <div className="w-full h-[300px] md:h-[350px] relative overflow-hidden rounded-2xl scroll-div xs:px-8">
              <Image
                title={heading}
                priority
                src={`https://cdn.chhatreshkhatri.com/images/${projectImage}`}
                alt={`${heading} Image`}
                width={480}
                height={480}
                className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectHolder;
