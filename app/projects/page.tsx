import ProjectHolder from "../components/ProjectHolder";
import PageHead from "@/app/components/PageHead";
import { AlibabaCloudIcon, LiveLink, GitHubIcon } from "../components/icons";
export const metadata = {
  title: "Chhatresh Khatri | Projects",
  description:
    "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Chhatresh Khatri | Projects",
    description:
      "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
    url: "https://www.chhatreshkhatri.com/projects",
    siteName: "chhatreshkhatri",
    type: "website",
    images: [{ url: "https://cdn.chhatreshkhatri.com/icons/opengraph-image.png" }],
  },
  twitter: {
    title: "Chhatresh Khatri | Projects",
    url: "https://www.chhatreshkhatri.com/projects",
    description:
      "Chhatresh Khatri Projects. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
    images: [{ url: "https://cdn.chhatreshkhatri.com/icons/opengraph-image.png" }],
  },
};
export default function Projects() {
  return (
    <>
      <PageHead text="Projects" />
      <div className="relative group rounded-lg w-full text-justify p-3 xs:p-6 xs:px-10 py-6">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <p className="relative text-lg xs:text-xl mt-4">
Discover a diverse collection of projects by Chhatresh Khatri, each uniquely crafted with innovative features. Explore further through relevant links to learn more. As a tech enthusiast, I&apos;m  self-driven, motivated, and eager to collaborate on creating extraordinary solutions.
        </p>
      </div>
      {/* Ramma creations */}
      <ProjectHolder
        heading="Ramaa Creations"
        subHeading="An e-commerce Jewellery website"
        projectContent="Built using Alicms tool at Alibaba Cloud Low-Code Development Contest 2022. Achieved second position out of 2043 participants."
        projectImage={`RamaaCreations.webp`}
        link1="https://www.alibabacloud.com/blog/598812"
        link1Icon={<AlibabaCloudIcon size={32} className={"w-6 xs:w-8"} />}
        link1Type="Blog Link"
        link2="https://www.alibabacloud.com/blog/598754"
        link2Type="Winner List"
        link2Icon={<AlibabaCloudIcon size={32} className={"w-6 xs:w-8"} />}
        order="odd"
      />
      {/* Visits Counter */}
      <ProjectHolder
        heading="Visits Counter"
        subHeading="Web Visits Counter with Dynamic UI"
        projectContent="The Visits Counter project is a real-time web application that features a dynamic and responsive user interface, built with MongoDB, Express, React, and Tailwind CSS. The application displays website visits through an SVG badge."
        projectImage={`VisitsCounter.webp`}
        link1="https://visits.chhatreshkhatri.com/"
        link1Icon={<LiveLink size={32} className={"w-6 xs:w-8"} />}
        link1Type="Live Link"
        link2="https://github.com/Chhatreshkhatri/visits-counter"
        link2Type="Github Link"
        link2Icon={<GitHubIcon size={32} className={"w-6 xs:w-8"} />}
        order="even"
      />
      {/* StackOverflow Clone */}
      <ProjectHolder
        heading="StackOverflow Clone"
        subHeading="A question-answer website with chatbot feature"
        projectContent="A popular online forum for programming-related questions and answers built using MERN Stack, and it features user authentication, a voting system for answers, and keyword-based question search."
        projectImage={`StackOverflowClone.webp`}
        link1="https://soclone.chhatreshkhatri.com/"
        link1Type="Live Link"
        link1Icon={<LiveLink size={32} className={"w-6 xs:w-8"} />}
        link2="https://github.com/Chhatreshkhatri/stack-overflow-clone"
        link2Type="Github Link"
        link2Icon={<GitHubIcon size={32} className={"w-6 xs:w-8"} />}
        order="odd"
      />
      {/* Amazon Clone */}
      <ProjectHolder
        heading="Amazon Clone"
        subHeading="An e-commerce Jewellery website"
        projectContent="This project includes a range of features including user authentication, a shopping cart, product details page, payment processing and order history."
        projectImage={`AmazonClone.webp`}
        link1="https://amazonclone.chhatreshkhatri.com/"
        link1Type="Live Link"
        link1Icon={<LiveLink size={32} className={"w-6 xs:w-8"} />}
        link2="https://github.com/Chhatreshkhatri/amazon-clone"
        link2Type="Github Link"
        link2Icon={<GitHubIcon size={32} className={"w-6 xs:w-8"} />}
        order="even"
      />
      {/* MyChat Project */}
      <ProjectHolder
        heading="MyChat"
        subHeading="An android chat application"
        projectContent="A simple Android chat app allows users to communicate with each other through text messages on their Android devices. The app typically features a user-friendly interface and easy-to-use chat functions."
        projectImage={`MyChat.webp`}
        link1="https://github.com/Chhatreshkhatri/MyChat"
        link1Type="Github Link"
        link1Icon={<GitHubIcon size={32} className={"w-6 xs:w-8"} />}
        link2=""
        link2Type=""
        link2Icon={undefined}
        order="odd"
      />
    </>
  );
}
