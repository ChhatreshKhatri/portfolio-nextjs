import { AlibabaCloudIcon, GithubIcon, LinkIcon } from "../components/icons";
import ProjectHolder from "../components/ProjectHolder";
import FaviconVisibilityChange from "../components/FaviconVisibilityChange";
export const metadata = {
  title: "Chhatresh Khatri | Portfolio | Projects",
  description:
    "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  return (
    <main className="w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-3 xs:px-6 md:px-12 lg:px-20 py-20">
      <button className="rounded mb-4 p-[2px] flex items-center justify-center bg-gradient-to-r from-darkCk to-lightCk">
        <h1 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-contentBg dark:bg-darked rounded">
          My Projects
        </h1>
      </button>
      {/* Ramma creations */}
      <ProjectHolder
        heading="Ramaa Creations"
        subHeading="An e-commerce Jewellery website"
        projectContent="Built using Alicms tool at Alibaba Cloud Low-Code Development Contest 2022. Achieved second position out of 2043 participants."
        projectImage={`v1695546881/portfolio/ramaa-creations_ivgpqa.webp`}
        link1="https://www.alibabacloud.com/blog/598812"
        link1Icon={<AlibabaCloudIcon size={32} className={"mr-2 w-8"} />}
        link1Type="Blog Link"
        link2="https://www.alibabacloud.com/blog/598754"
        link2Type="Winner List"
        link2Icon={<AlibabaCloudIcon size={32} className={"mr-2 w-8"} />}
        order="odd"
      />
      {/* StackOverflow Clone */}
      <ProjectHolder
        heading="StackOverflow Clone"
        subHeading="A question-answer website with chatbot feature"
        projectContent="A popular online forum for programming-related questions and answers built using MERN Stack, and it features user authentication, a voting system for answers, and keyword-based question search."
        projectImage={`v1695546880/portfolio/stackoverflow-clone_rhd5ab.webp`}
        link1="https://github.com/Chhatreshkhatri/stack-overflow-clone"
        link1Type="Github Link"
        link1Icon={<GithubIcon className={"mr-2 w-8"} />}
        link2="https://soclone.chhatreshkhatri.com/"
        link2Type="Live Link"
        link2Icon={<LinkIcon className={"mr-2 w-8"} />}
        order="even"
      />
      {/* Amazon Clone */}
      <ProjectHolder
        heading="Amazon Clone"
        subHeading="An e-commerce Jewellery website"
        projectContent="This project includes a range of features including user authentication, a shopping cart, product details page, payment processing and order history."
        projectImage={`v1695547219/portfolio/amazon-clone_earg9x.webp`}
        link1="https://github.com/Chhatreshkhatri/amazon-clone"
        link1Type="Github Link"
        link1Icon={<GithubIcon size={32} className={"mr-2 w-8"} />}
        link2="https://amazonclone.chhatreshkhatri.com/"
        link2Type="Live Link"
        link2Icon={<LinkIcon size={32} className={"mr-2 w-8"} />}
        order="odd"
      />
      {/* MyChat Project */}
      <ProjectHolder
        heading="MyChat"
        subHeading="An android chat application"
        projectContent="A simple Android chat app allows users to communicate with each other through text messages on their Android devices. The app typically features a user-friendly interface and easy-to-use chat functions."
        projectImage={`v1695547501/portfolio/MyChat_kd6uvo.webp`}
        link1="https://github.com/Chhatreshkhatri/MyChat"
        link1Type="Github Link"
        link1Icon={<GithubIcon className={"mr-2 w-8"} />}
        link2=""
        link2Type=""
        link2Icon={undefined}
        order="even"
      />
      <FaviconVisibilityChange />
    </main>
  );
}
