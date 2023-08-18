import Image from 'next/image';
import RamaaCreations from '../assets/ramaacreations.webp';
import MyChat from '../assets/mychatproject.webp';
import AmazonClone from '../assets/amazonproject.webp';
import StackoverflowClone from '../assets/stackoverflowclone.webp';
import { AlibabaCloudIcon, GithubIcon, LinkIcon } from '../components/icons';
import Link from 'next/link';

export const metadata = {
  title: "Chhatresh Khatri | Portfolio | Projects",
  description: "Projects by Chhatresh Khatri. Explore a collection of diverse projects,  discover their unique features and access relevant links for more information.",
  alternates: {
    canonical: "https://www.chhatreshkhatri.com/projects",
  },
};

export default function Projects() {
  return (
    <main className="w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-3 xs:px-6 md:px-12 lg:px-20 py-24">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="flex justify-center items-center w-auto font-semibold tracking-wider bg-gradient-to-r from-darkCk/50 to-lightCk/50 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 text-xl xxs:text-2xl md:text-3xl px-1 md:px-2 py-1">
          My Projects
        </h1>
      </div>
      {/* Ramma creations */}
      <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl bg-contentBg dark:bg-darked mt-6 p-3 xs:p-6">
        {/* <div className="absolute right-[50%] -mt-10 rounded-[50%] bg-dark text-light dark:bg-light dark:text-dark text-center w-12 h-12 text-3xl">1</div> */}
        <div className="flex items-center">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center items-center xs:px-8">
            {/* Centered content in the first column */}
            <h2 className='text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold text-center'>Ramaa Creations</h2>
            <h3 className='text-xl  xl:text-3xl font-semibold mt-4 text-center'>An e-commerce Jewellery website</h3>
            <p className='text-xl mt-4 text-justify'>Built using Alicms tool at Alibaba Cloud Low-Code Development Contest 2022.</p>
            <p className='text-xl mt-4 text-justify'>Achieved second position out of 2043 participants.</p>
            <div className="mt-8 flex space-x-4 text-xl justify-center">
              <Link
                href="https://www.alibabacloud.com/blog/project-showcase-%7C-ramaa-creations_598812"
                target="_blank"
                className="py-1 px-2 rounded flex items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50"
              >
                <AlibabaCloudIcon className="mr-2" />
                Blog
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
                src={RamaaCreations}
                alt="Ramaa Creations project"
                className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      {/* StackOverflow Clone */}
      <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl bg-contentBg dark:bg-darked mt-6 p-3 xs:p-6">
        {/* <div className="absolute right-[50%] -mt-10 rounded-[50%] bg-dark text-light dark:bg-light dark:text-dark text-center w-12 h-12 text-3xl">1</div> */}
        <div className="flex items-center lg:order-2">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center items-center xs:px-8">
            {/* Centered content in the first column */}
            <h2 className='text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold text-center'>StackOverflow Clone</h2>
            <h3 className='text-xl  xl:text-3xl font-semibold mt-4 text-center'>A question-answer website with chatbot feature</h3>
            <p className='text-xl mt-4 text-justify'>A popular online forum for programming-related questions and answers built using MERN Stack, and it features user authentication, a voting system for answers, and keyword-based question search.</p>
            <div className="mt-8 flex space-x-4 text-xl justify-center">
              <Link
                href="https://github.com/Chhatreshkhatri/stack-overflow-clone"
                target="_blank"
                className="py-1 px-2 rounded flex whitespace-nowrap items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50"
              >
                <GithubIcon className="mr-2 flex whitespace-nowrap" />
                GitHub Link
              </Link>
              <Link
                href="https://soclone.chhatreshkhatri.com/"
                target="_blank"
                className="py-1 px-2 rounded flex whitespace-nowrap items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50"
              >
                <LinkIcon className="mr-2 " />
                Live Link
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
                src={StackoverflowClone}
                alt="StackoverflowClone project"
                className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      {/* AmazonClone*/}
      <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl bg-contentBg dark:bg-darked mt-6 p-3 xs:p-6">
        {/* <div className="absolute right-[50%] -mt-10 rounded-[50%] bg-dark text-light dark:bg-light dark:text-dark text-center w-12 h-12 text-3xl">1</div> */}
        <div className="flex items-center">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center items-center xs:px-8">
            {/* Centered content in the first column */}
            <h2 className='text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold'>Amazon Clone</h2>
            <h3 className='text-xl  xl:text-3xl font-semibold mt-4 text-center'>An e-commerce Jewellery website</h3>
            <p className='text-xl mt-4 text-justify'>This project includes a range of features including user authentication, a shopping cart, product details page, payment processing and order history.</p>
            <div className="mt-8 flex space-x-4 text-xl justify-center">
              <Link
                href="https://github.com/Chhatreshkhatri/amazon-clone"
                target="_blank"
                className="py-1 px-2 rounded flex whitespace-nowrap items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50"
              >
                <GithubIcon className="mr-2" />
                GiHub Link
              </Link>
              <Link
                href="https://amazonclone.chhatreshkhatri.com/"
                target="_blank"
                className="py-1 px-2 rounded flex whitespace-nowrap items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50"
              >
                <LinkIcon className="mr-2" />
                Live Link
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
                src={AmazonClone}
                alt="AmazonClone project"
                className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      {/* MyChat Project */}
      <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-2 rounded-xl bg-contentBg dark:bg-darked mt-6 p-3 xs:p-6">
        {/* <div className="absolute right-[50%] -mt-10 rounded-[50%] bg-dark text-light dark:bg-light dark:text-dark text-center w-12 h-12 text-3xl">1</div> */}
        <div className="flex items-center  lg:order-2">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center items-center xs:px-8">
            {/* Centered content in the first column */}
            <h2 className='text-2xl xxs:text-3xl md:text-4xl xl:text-5xl font-semibold'>MyChat</h2>
            <h3 className='text-xl  xl:text-3xl font-semibold mt-4 text-center'>An android chat application</h3>
            <p className='text-xl mt-4 text-justify'>A simple Android chat app allows users to communicate with each other through text messages on their Android devices. The app typically features a user-friendly interface and easy-to-use chat functions.</p>
            <div className="mt-8 flex space-x-4 text-xl justify-center">
              <Link
                href="https://github.com/Chhatreshkhatri/MyChat"
                target="_blank"
                className="py-1 px-2 rounded flex whitespace-nowrap items-center border border-darker dark:border-light bg-gradient-to-r hover:from-darkCk/50 hover:to-lightCk/50"
              >
                <GithubIcon className="mr-2" />
                GitHub Link
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
                src={MyChat}
                alt="MyChat project"
                className="w-full h-full object-cover object-top transition-all duration-4000 ease-in-out rounded-2xl hover:object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
