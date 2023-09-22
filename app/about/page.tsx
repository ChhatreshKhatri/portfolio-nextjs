import {
  SiC,
  SiCplusplus,
  SiOpenjdk,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiAxios,
  SiRedux,
  SiDotenv,
  SiMongodb,
  SiNodemon,
  SiNetlify,
  SiRender,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubpages,
  SiVercel,
  SiFirebase,
  SiCanva,
  SiGimp,
  SiPostman,
  SiCloudflare,
  SiAlibabacloud,
  SiGooglecloud,
  SiVisualstudiocode,
  SiLinux,
  SiUbuntu,
  SiWindows11,
} from "@icons-pack/react-simple-icons";

import FaviconVisibilityChange from "@/app/components/FaviconVisibilityChange";

export const metadata = {
  title: "Chhatresh Khatri | Portfolio | About",
  description:
    "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
  alternates: {
    canonical: "/about",
  },
};
function SkillButton({
  name,
  color,
  icon,
  className,
}: {
  name: string;
  color: string;
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <button
      title={name}
      className={`relative w-auto h-[35px] xs:h-[45px] m-1 xs:m-2 ${color} rounded-md p-1 xs:p-2 flex items-center justify-center text-light dark:text-dark`}
    >
      <div className={`absolute inset-0 bg-gradient-to-b from-[#fff]/10 rounded-md`} />
      <div className={`relative flex items-center justify-center ${className}`}>
        {icon}
        <p className="relative text-xl md:text-2xl ml-1 xs:ml-2 drop-shadow-text">{name}</p>
      </div>
    </button>
  );
}

export default function Page() {
  return (
    <main className="w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-3 xs:px-6 md:px-12 lg:px-20 py-20">
      <button className="rounded mb-4 p-[2px] flex items-center justify-center bg-gradient-to-r from-darkCk to-lightCk">
        <h1 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-contentBg dark:bg-darked rounded">
          About Me
        </h1>
      </button>
      <div className="relative group rounded-lg text-justify p-3 xs:p-6 xs:px-10 py-6 mt-4">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-darkCk/50 to-lightCk/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <h2 className={`relative text-2xl xxs:text-2xl xs:text-3xl md:text-4xl text-center`}>Description</h2>
        <p className="relative text-lg xs:text-xl mt-4">
          Hi there! My name is Chhatresh Khatri and I&apos;m a Full Stack developer with a passion for building modern and
          user-friendly websites and applications. I have experience working with a range of Tech Stack to create clean and
          modular code that follows industry best practices. In addition to my technical skills, I also have a keen eye for
          design and enjoy creating responsive and visually appealing websites. I&apos;m learning about the latest trends in
          the tech industry. I&apos;m a total go-getter and always bring my A-game, plus I&apos;m super easy to talk to!
          I&apos;m driven, self-motivated, and passionate about all things tech. Let&apos;s collaborate and create something
          extraordinary! Thanks for visiting my portfolio website!
        </p>
      </div>
      <button className="rounded mb-4 flex items-center justify-center bg-gradient-to-r from-darkCk to-lightCk mt-10 p-[2px]">
        <h2 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-contentBg dark:bg-darked rounded">
          Technology Stack
        </h2>
      </button>
      <div className="relative group rounded-lg mt-4">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-darkCk/50 to-lightCk/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative w-full p-3 xs:p-6 xs:px-10 py-6">
          <h3 className={`text-2xl xxs:text-3xl md:text-4xl text-center mt-4`}>Languages</h3>
          <div className="flex flex-wrap items-center justify-center mt-4">
            <SkillButton name="C" color="bg-[#1563b1]" icon={<SiC size={32} className="h-6 xs:h-12" />} className={""} />
            <SkillButton
              name="C++"
              color="bg-[#004488]"
              icon={<SiCplusplus size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Java"
              color="bg-[#437291]"
              icon={<SiOpenjdk size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="MySQL"
              color="bg-[#4479A1]"
              icon={<SiMysql size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="HTML5"
              color="bg-[#e34f26]"
              icon={<SiHtml5 size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="CSS3"
              color="bg-[#1572B6]"
              icon={<SiCss3 size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="JavaScript"
              color="bg-[#F7DF1E]"
              icon={<SiJavascript size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="TypeScript"
              color="bg-[#3178C6]"
              icon={<SiTypescript size={32} className="h-6 xs:h-12" />}
              className={""}
            />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">Framework & Libraries</h3>
          <div className="flex flex-wrap items-center justify-center mt-4">
            <SkillButton
              name="React.js"
              color="bg-[#61DAFB]"
              icon={<SiReact size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Next.js"
              color="bg-[#000000]"
              icon={<SiNextdotjs size={32} className="h-6 xs:h-12" />}
              className={"text-white"}
            />
            <SkillButton
              name="Express.js"
              color="bg-[#000000]"
              icon={<SiExpress size={32} className="h-6 xs:h-12" />}
              className={"text-white"}
            />
            <SkillButton
              name="Node.js"
              color="bg-[#339933]"
              icon={<SiNodedotjs size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Bootstrap"
              color="bg-[#05054B]"
              icon={<SiBootstrap size={32} className="h-6 xs:h-12" />}
              className={"text-white"}
            />
            <SkillButton
              name="TailwindCSS"
              color="bg-[#06B6D4]"
              icon={<SiTailwindcss size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Axios"
              color="bg-[#5A29E4]"
              icon={<SiAxios size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Redux"
              color="bg-[#764ABC]"
              icon={<SiRedux size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="DotENV"
              color="bg-[#ECD53F]"
              icon={<SiDotenv size={32} className="h-6 xs:h-12" />}
              className={""}
            />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">Tools & IDEs</h3>
          <div className="flex flex-wrap items-center justify-center mt-4">
            <SkillButton
              name="MongoDB"
              color="bg-[#47A248]"
              icon={<SiMongodb size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Nodemon"
              color="bg-[#76D04B]"
              icon={<SiNodemon size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Netlify"
              color="bg-[#00C7B7]"
              icon={<SiNetlify size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Render"
              color="bg-[#46E3B7]"
              icon={<SiRender size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton name="Git" color="bg-[#F05032]" icon={<SiGit size={32} className="h-6 xs:h-12" />} className={""} />
            <SkillButton
              name="GitHub"
              color="bg-[#181717]"
              icon={<SiGithub size={32} className="h-6 xs:h-12" />}
              className={"text-white"}
            />
            <SkillButton
              name="GitHub Actions"
              color="bg-[#2088FF]"
              icon={<SiGithubactions size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="GitHub Pages"
              color="bg-[#222222]"
              icon={<SiGithubpages size={32} className="h-6 xs:h-12" />}
              className={"text-white"}
            />
            <SkillButton
              name="Vercel"
              color="bg-[#000000]"
              icon={<SiVercel size={32} className="h-6 xs:h-12" />}
              className={"text-white"}
            />
            <SkillButton
              name="Firebase"
              color="bg-[#FFCA28]"
              icon={<SiFirebase size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Canva"
              color="bg-[#00C4CC]"
              icon={<SiCanva size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Gimp"
              color="bg-[#5C5543]"
              icon={<SiGimp size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Postman"
              color="bg-[#FF6C37]"
              icon={<SiPostman size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Cloudflare"
              color="bg-[#F38020]"
              icon={<SiCloudflare size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Alibaba Cloud"
              color="bg-[#FF6A00]"
              icon={<SiAlibabacloud size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Google Cloud"
              color="bg-[#4285F4]"
              icon={<SiGooglecloud size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="VS Code"
              color="bg-[#007ACC]"
              icon={<SiVisualstudiocode size={32} className="h-6 xs:h-12" />}
              className={""}
            />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center pt-4">OS</h3>
          <div className="flex flex-wrap items-center justify-center mt-4">
            <SkillButton
              name="Linux"
              color="bg-[#FCC624]"
              icon={<SiLinux size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Ubuntu"
              color="bg-[#E95420]"
              icon={<SiUbuntu size={32} className="h-6 xs:h-12" />}
              className={""}
            />
            <SkillButton
              name="Windows 11"
              color="bg-[#0078D4]"
              icon={<SiWindows11 size={32} className="h-6 xs:h-12" />}
              className={""}
            />
          </div>
        </div>
      </div>
      <FaviconVisibilityChange />
    </main>
  );
}
