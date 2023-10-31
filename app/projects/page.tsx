import { SiAlibabacloud, SiGithub } from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import ProjectHolder from "../../components/ProjectHolder";
export const metadata = {
  title: "Chhatresh Khatri | Portfolio | Projects",
  description:
    "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Chhatresh Khatri | Portfolio | Projects",
    description:
      "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
    url: "https://www.chhatreshkhatri.com/projects",
    siteName: "chhatreshkhatri",
    type: "website",
    images: [{ url: "../opengraph-image.png" }],
  },
  twitter: {
    title: "Chhatresh Khatri | Portfolio | Projects",
    url: "https://www.chhatreshkhatri.com/projects",
    description:
      "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
    images: [{ url: "../opengraph-image.png" }],
  },
};
export default function Projects() {
  return (
    <>
      <button className="flex items-center justify-center rounded p-0.5 bg-gradient-to-r from-blue1 to-yellow1">
        <h1 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-buttonBg dark:bg-darked rounded">
          My Projects
        </h1>
      </button>
      {/* Ramma creations */}
      <ProjectHolder
        heading="Ramaa Creations"
        subHeading="An e-commerce Jewellery website"
        projectContent="Built using Alicms tool at Alibaba Cloud Low-Code Development Contest 2022. Achieved second position out of 2043 participants."
        projectImage={`RamaaCreations.webp`}
        link1="https://www.alibabacloud.com/blog/598812"
        link1Icon={<SiAlibabacloud size={32} className={"w-8"} />}
        link1Type="Blog Link"
        link2="https://www.alibabacloud.com/blog/598754"
        link2Type="Winner List"
        link2Icon={<SiAlibabacloud size={32} className={"w-8"} />}
        order="odd"
      />
      {/* StackOverflow Clone */}
      <ProjectHolder
        heading="StackOverflow Clone"
        subHeading="A question-answer website with chatbot feature"
        projectContent="A popular online forum for programming-related questions and answers built using MERN Stack, and it features user authentication, a voting system for answers, and keyword-based question search."
        projectImage={`StackOverflowClone.webp`}
        link1="https://soclone.chhatreshkhatri.com/"
        link1Type="Live Link"
        link1Icon={<AiOutlineLink size={32} className={"w-8"} />}
        link2="https://github.com/Chhatreshkhatri/stack-overflow-clone"
        link2Type="Github Link"
        link2Icon={<SiGithub size={32} className={"w-8"} />}
        order="even"
      />
      {/* Amazon Clone */}
      <ProjectHolder
        heading="Amazon Clone"
        subHeading="An e-commerce Jewellery website"
        projectContent="This project includes a range of features including user authentication, a shopping cart, product details page, payment processing and order history."
        projectImage={`AmazonClone.webp`}
        link1="https://amazonclone.chhatreshkhatri.com/"
        link1Type="Live Link"
        link1Icon={<AiOutlineLink size={32} className={"w-8"} />}
        link2="https://github.com/Chhatreshkhatri/amazon-clone"
        link2Type="Github Link"
        link2Icon={<SiGithub size={32} className={"w-8"} />}
        order="odd"
      />
      {/* MyChat Project */}
      <ProjectHolder
        heading="MyChat"
        subHeading="An android chat application"
        projectContent="A simple Android chat app allows users to communicate with each other through text messages on their Android devices. The app typically features a user-friendly interface and easy-to-use chat functions."
        projectImage={`MyChat.webp`}
        link1="https://github.com/Chhatreshkhatri/MyChat"
        link1Type="Github Link"
        link1Icon={<SiGithub size={32} className={"w-8"} />}
        link2=""
        link2Type=""
        link2Icon={undefined}
        order="even"
      />
    </>
  );
}
