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
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiCanva,
  SiGimp,
  SiFigma,
  SiPostman,
  SiCloudflare,
  SiAlibabacloud,
  SiGooglecloud,
  SiVisualstudiocode,
  SiLinux,
  SiUbuntu,
  SiWindows11,
} from "react-icons/si";

export const metadata = {
  title: "Chhatresh Khatri | Portfolio | About",
  description:
    "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
  alternates: { canonical: "/about" },
};
interface Skill {
  name: string;
  color: string;
  icon: React.ReactNode;
  className?: string;
}
const languages: Skill[] = [
  { name: "C", color: "bg-[#1563b1]", icon: <SiC title="C" size={32} className="h-6 xs:h-12" />, className: "" },
  { name: "C++", color: "bg-[#004488]", icon: <SiCplusplus title="C++" size={32} className="h-6 xs:h-12" /> },
  { name: "Java", color: "bg-[#437291]", icon: <SiOpenjdk title="Java" size={32} className="h-6 xs:h-12" /> },
  { name: "MySQL", color: "bg-[#4479A1]", icon: <SiMysql title="MySQL" size={32} className="h-6 xs:h-12" /> },
  { name: "HTML5", color: "bg-[#e34f26]", icon: <SiHtml5 title="HTML5" size={32} className="h-6 xs:h-12" /> },
  { name: "CSS3", color: "bg-[#1572B6]", icon: <SiCss3 title="CSS3" size={32} className="h-6 xs:h-12" /> },
  { name: "JavaScript", color: "bg-[#F7DF1E]", icon: <SiJavascript title="JavaScript" size={32} className="h-6 xs:h-12" /> },
  { name: "TypeScript", color: "bg-[#3178C6]", icon: <SiTypescript title="TypeScript" size={32} className="h-6 xs:h-12" /> },
];
const frameworks: Skill[] = [
  { name: "React.js", color: "bg-[#61DAFB]", icon: <SiReact title="React.js" size={32} className="h-6 xs:h-12" /> },
  { name: "Next.js", color: "bg-[#000000]", icon: <SiNextdotjs title="Next.js" size={32} className="h-6 xs:h-12" />, className: "text-white" },
  { name: "Express.js", color: "bg-[#000000]", icon: <SiExpress title="Express.js" size={32} className="h-6 xs:h-12" />, className: "text-white" },
  { name: "Node.js", color: "bg-[#339933]", icon: <SiNodedotjs title="Node.js" size={32} className="h-6 xs:h-12" /> },
  { name: "Bootstrap", color: "bg-[#05054B]", icon: <SiBootstrap title="Bootstrap" size={32} className="h-6 xs:h-12" />, className: "text-white" },
  { name: "Tailwind CSS", color: "bg-[#06B6D4]", icon: <SiTailwindcss title="Tailwind CSS" size={32} className="h-6 xs:h-12" /> },
  { name: "Axios", color: "bg-[#5A29E4]", icon: <SiAxios title="Axios" size={32} className="h-6 xs:h-12" /> },
  { name: "Redux", color: "bg-[#764ABC]", icon: <SiRedux title="Redux" size={32} className="h-6 xs:h-12" /> },
  { name: "DotENV", color: "bg-[#ECD53F]", icon: <SiDotenv title="DotENV" size={32} className="h-6 xs:h-12" /> },
];
const tools: Skill[] = [
  { name: "MongoDB", color: "bg-[#47A248]", icon: <SiMongodb title="MongoDB" size={32} className="h-6 xs:h-12" /> },
  { name: "Postman", color: "bg-[#FF6C37]", icon: <SiPostman title="Postman" size={32} className="h-6 xs:h-12" /> },
  { name: "Git", color: "bg-[#F05032]", icon: <SiGit title="" size={32} className="h-6 xs:h-12" /> },
  { name: "GitHub", color: "bg-[#181717]", icon: <SiGithub title="GitHub" size={32} className="h-6 xs:h-12" />, className: "text-white" },
  { name: "Vercel", color: "bg-[#000000]", icon: <SiVercel title="Vercel" size={32} className="h-6 xs:h-12" />, className: "text-white" },
  { name: "Firebase", color: "bg-[#FFCA28]", icon: <SiFirebase title="Firebase" size={32} className="h-6 xs:h-12" /> },
  { name: "Figma", color: "bg-[#F24E1E]", icon: <SiFigma title="Figma" size={32} className="h-6 xs:h-12" /> },
  { name: "Canva", color: "bg-[#00C4CC]", icon: <SiCanva title="Canva" size={32} className="h-6 xs:h-12" /> },
  { name: "Gimp", color: "bg-[#5C5543]", icon: <SiGimp title="Gimp" size={32} className="h-6 xs:h-12" /> },
  { name: "Cloudflare", color: "bg-[#F38020]", icon: <SiCloudflare title="Cloudflare" size={32} className="h-6 xs:h-12" /> },
  { name: "Alibaba Cloud", color: "bg-[#FF6A00]", icon: <SiAlibabacloud title="Alibaba Cloud" size={32} className="h-6 xs:h-12" /> },
  { name: "Google Cloud", color: "bg-[#4285F4]", icon: <SiGooglecloud title="Google Cloud" size={32} className="h-6 xs:h-12" /> },
  { name: "VS Code", color: "bg-[#007ACC]", icon: <SiVisualstudiocode title="VS Code" size={32} className="h-6 xs:h-12" /> },
];
const OS: Skill[] = [
  { name: "Linux", color: "bg-[#FCC624]", icon: <SiLinux title="Linux" size={32} className="h-6 xs:h-12" /> },
  { name: "Ubuntu", color: "bg-[#E95420]", icon: <SiUbuntu title="Ubuntu" size={32} className="h-6 xs:h-12" /> },
  { name: "Windows 11", color: "bg-[#0078D4]", icon: <SiWindows11 title="Windows 11" size={32} className="h-6 xs:h-12" /> },
];

const SkillButton = ({ name, color, icon, className }: { name: string; color: string; icon: React.ReactNode; className: string }) => (
  <button
    title={name}
    className={`relative w-auto h-[35px] xs:h-[45px] ${color} rounded-md p-1 xs:p-2 flex items-center justify-center text-light dark:text-dark`}>
    <div className={`absolute inset-0 bg-gradient-to-b from-[#fff]/10 rounded-md`} />
    <div className={`relative flex items-center justify-center ${className}`}>
      {icon} <p className="relative text-xl md:text-2xl ml-1 xs:ml-2 drop-shadow-text">{name}</p>
    </div>
  </button>
);
const Skills = ({ skillName, arrayName }: { skillName: string; arrayName: Skill[] }) => (
  <>
    <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">{skillName}</h3>
    <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
      {arrayName.map((param, index) => (
        <SkillButton key={index} name={param.name} color={param.color} icon={param.icon} className={`${param.className}`} />
      ))}
    </div>
  </>
);
export default function Page() {
  return (
    <>
      <button className="flex items-center justify-center rounded p-0.5 bg-gradient-to-r from-darkCk to-lightCk">
        <h1 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-contentBg dark:bg-darked rounded">
          About Me
        </h1>
      </button>
      <div className="relative group rounded-lg w-full text-justify p-3 xs:p-6 xs:px-10 py-6">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-darkCk/50 to-lightCk/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <h2 className={`relative text-2xl xxs:text-3xl md:text-4xl text-center`}>Description</h2>
        <p className="relative text-lg xs:text-xl mt-4">
          Hi there! My name is Chhatresh Khatri and I&apos;m a Full Stack developer with a passion for building modern and user-friendly websites and
          applications. I have experience working with a range of Tech Stack to create clean and modular code that follows industry best practices. In
          addition to my technical skills, I also have a keen eye for design and enjoy creating responsive and visually appealing websites. I&apos;m
          learning about the latest trends in the tech industry. I&apos;m a total go-getter and always bring my A-game, plus I&apos;m super easy to
          talk to! I&apos;m driven, self-motivated, and passionate about all things tech. Let&apos;s collaborate and create something extraordinary!
          Thanks for visiting my portfolio website!
        </p>
      </div>
      <button className="rounded flex items-center justify-center bg-gradient-to-r from-darkCk to-lightCk p-0.5">
        <h2 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-contentBg dark:bg-darked rounded">
          Technology Stack
        </h2>
      </button>
      <div className="relative group rounded-lg w-full">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-darkCk/50 to-lightCk/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative flex flex-col w-full p-3 xs:p-6 xs:px-10 py-6 gap-4">
          <Skills skillName="Languages" arrayName={languages} />
          <Skills skillName="Frameworks & Libraries" arrayName={frameworks} />
          <Skills skillName="Tools & IDEs" arrayName={tools} />
          <Skills skillName="OS" arrayName={OS} />
        </div>
      </div>
    </>
  );
}
