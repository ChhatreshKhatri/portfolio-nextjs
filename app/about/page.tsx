import PageHead from "@/app/components/PageHead";
import SkillButton from "../components/SkillsButton";
import {
  AlibabaCloudIcon,
  AstroIcon,
  BootstrapIcon,
  CIcon,
  CPlusPlusIcon,
  CanvaIcon,
  CloudflareIcon,
  CssIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GimpIcon,
  GitHubIcon,
  GitIcon,
  GoogleCloudIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  LinuxIcon,
  MongoDBIcon,
  MySqlIcon,
  NextjsIcon,
  NodejsIcon,
  PostmanIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  UbuntuIcon,
  VSCodeIcon,
  VercelIcon,
  Windows11Icon,
} from "../components/icons";
import Skills from "../components/SkillsButton";

export const metadata = {
  title: "Chhatresh Khatri | About",
  description:
    "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Chhatresh Khatri | About",
    description:
      "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
    url: "https://www.chhatreshkhatri.com/about",
    siteName: "chhatreshkhatri",
    type: "website",
    images: [{ url: "https://assets.chhatreshkhatri.com/icons/opengraph-image.png" }],
  },
  twitter: {
    title: "Chhatresh Khatri | About",
    url: "https://www.chhatreshkhatri.com/about",
    description:
      "Chhatresh Khatri About. Full Stack developer skilled in diverse tech including C/C++, Java, HTML5, CSS3, JavaScript, React.js, Next.js, and more.",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
    images: [{ url: "https://assets.chhatreshkhatri.com/icons/opengraph-image.png" }],
  },
};
interface Skill {
  name: string;
  color: string;
  icon: React.ReactNode;
  className?: string;
}

const frameworks: Skill[] = [
  { name: "React.js", color: "bg-[#61DAFB]", icon: <ReactIcon title="React.js" className="h-6 xs:h-8" /> },
  { name: "Next.js", color: "bg-[#000000]", icon: <NextjsIcon title="Next.js" className="h-6 xs:h-8" />, className: "text-white" },
  { name: "Astro", color: "bg-[#BC52EE]", icon: <AstroIcon title="Astro" className="h-6 xs:h-8" /> },
  { name: "Express.js", color: "bg-[#000000]", icon: <ExpressIcon title="Express.js" className="h-6 xs:h-8" />, className: "text-white" },
  { name: "Node.js", color: "bg-[#339933]", icon: <NodejsIcon title="Node.js" className="h-6 xs:h-8" /> },
  { name: "Bootstrap", color: "bg-[#05054B]", icon: <BootstrapIcon title="Bootstrap" className="h-6 xs:h-8" />, className: "text-white" },
  { name: "Tailwind CSS", color: "bg-[#06B6D4]", icon: <TailwindCssIcon title="Tailwind CSS" className="h-6 xs:h-8" /> },
];
const tools: Skill[] = [
  { name: "MongoDB", color: "bg-[#47A248]", icon: <MongoDBIcon title="MongoDB" className="h-6 xs:h-8" /> },
  { name: "Postman", color: "bg-[#FF6C37]", icon: <PostmanIcon title="Postman" className="h-6 xs:h-8" /> },
  { name: "Git", color: "bg-[#F05032]", icon: <GitIcon title="" className="h-6 xs:h-8" /> },
  { name: "GitHub", color: "bg-[#181717]", icon: <GitHubIcon title="GitHub" className="h-6 xs:h-8" />, className: "text-white" },
  { name: "Vercel", color: "bg-[#000000]", icon: <VercelIcon title="Vercel" className="h-6 xs:h-8" />, className: "text-white" },
  { name: "Firebase", color: "bg-[#FFCA28]", icon: <FirebaseIcon title="Firebase" className="h-6 xs:h-8" /> },
  { name: "Figma", color: "bg-[#F24E1E]", icon: <FigmaIcon title="Figma" className="h-6 xs:h-8" /> },
  { name: "Canva", color: "bg-[#00C4CC]", icon: <CanvaIcon title="Canva" className="h-6 xs:h-8" /> },
  { name: "Gimp", color: "bg-[#5C5543]", icon: <GimpIcon title="Gimp" className="h-6 xs:h-8" /> },
  { name: "Cloudflare", color: "bg-[#F38020]", icon: <CloudflareIcon title="Cloudflare" className="h-6 xs:h-8" /> },
  { name: "Alibaba Cloud", color: "bg-[#FF6A00]", icon: <AlibabaCloudIcon title="Alibaba Cloud" className="h-6 xs:h-8" /> },
  { name: "Google Cloud", color: "bg-[#4285F4]", icon: <GoogleCloudIcon title="Google Cloud" className="h-6 xs:h-8" /> },
  { name: "VS Code", color: "bg-[#007ACC]", icon: <VSCodeIcon title="VS Code" className="h-6 xs:h-8" /> },
];
const OS: Skill[] = [
  { name: "Linux", color: "bg-[#FCC624]", icon: <LinuxIcon title="Linux" className="h-6 xs:h-8" /> },
  { name: "Ubuntu", color: "bg-[#E95420]", icon: <UbuntuIcon title="Ubuntu" className="h-6 xs:h-8" /> },
  { name: "Windows 11", color: "bg-[#0078D4]", icon: <Windows11Icon title="Windows 11" className="h-6 xs:h-8" /> },
];

export default function Page() {
  return (
    <>
      <PageHead text="About" />
      <div className="relative group rounded-lg w-full text-justify p-3 xs:p-6 xs:px-10 py-6">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
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
      <button className="rounded flex items-center justify-center bg-gradient-to-r from-blue1 to-yellow1 p-0.5">
        <h2 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-buttonBg dark:bg-darked rounded">
          Technology Stack
        </h2>
      </button>
      <div className="relative group rounded-lg w-full">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r from-blue2/50 to-green2/50 opacity-20 transition duration-500 group-hover:opacity-50"></div>
        <div className="relative flex flex-col w-full p-3 xs:p-6 xs:px-10 py-6 gap-4">
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">Languages</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
            <SkillButton name="C" color="1563b1" icon={<CIcon title="C" className="h-6 xs:h-8" />} />
            <SkillButton name="C++" color="004488" icon={<CPlusPlusIcon title="C++" className="h-6 xs:h-8" />} />
            <SkillButton name="Java" color="437291" icon={<JavaIcon title="Java" className="h-6 xs:h-8" />} />
            <SkillButton name="MySQL" color="4479A1" icon={<MySqlIcon title="MySQL" className="h-6 xs:h-8" />} />
            <SkillButton name="HTML5" color="e34f26" icon={<HtmlIcon title="HTML5" className="h-6 xs:h-8" />} />
            <SkillButton name="CSS3" color="1572B6" icon={<CssIcon title="CSS3" className="h-6 xs:h-8" />} />
            <SkillButton name="JavaScript" color="F7DF1E" icon={<JavaScriptIcon title="JavaScript" className="h-6 xs:h-8" />} />
            <SkillButton name="TypeScript" color="3178C6" icon={<TypeScriptIcon title="TypeScript" className="h-6 xs:h-8" />} />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">Framework & Libraries</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
            <SkillButton name="React.js" color="61DAFB" icon={<ReactIcon title="React.js" className="h-6 xs:h-8" />} />
            <SkillButton name="Next.js" color="000000" className="text-white" icon={<NextjsIcon title="Next.js" className="h-6 xs:h-8" />} />
            <SkillButton name="Astro" color="BC52EE" icon={<AstroIcon title="Astro" className="h-6 xs:h-8" />} />
            <SkillButton name="Express.js" color="000000" className="text-white" icon={<ExpressIcon title="Express.js" className="h-6 xs:h-8" />} />
            <SkillButton name="Node.js" color="339933" icon={<NodejsIcon title="Node.js" className="h-6 xs:h-8" />} />
            <SkillButton name="Bootstrap" color="05054B" className="text-white" icon={<BootstrapIcon title="Bootstrap" className="h-6 xs:h-8" />} />
            <SkillButton name="Tailwind CSS" color="06B6D4" icon={<TailwindCssIcon title="Tailwind CSS" className="h-6 xs:h-8" />} />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">Tools</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
            <SkillButton name="MongoDB" color="47A248" icon={<MongoDBIcon title="MongoDB" className="h-6 xs:h-8" />} />
            <SkillButton name="Postman" color="FF6C37" icon={<PostmanIcon title="Postman" className="h-6 xs:h-8" />} />
            <SkillButton name="Git" color="F05032" icon={<GitIcon title="" className="h-6 xs:h-8" />} />
            <SkillButton name="GitHub" color="181717" className="text-white" icon={<GitHubIcon title="GitHub" className="h-6 xs:h-8" />} />
            <SkillButton name="Vercel" color="000000" className="text-white" icon={<VercelIcon title="Vercel" className="h-6 xs:h-8" />} />
            <SkillButton name="Firebase" color="FFCA28" icon={<FirebaseIcon title="Firebase" className="h-6 xs:h-8" />} />
            <SkillButton name="Figma" color="F24E1E" icon={<FigmaIcon title="Figma" className="h-6 xs:h-8" />} />
            <SkillButton name="Canva" color="00C4CC" icon={<CanvaIcon title="Canva" className="h-6 xs:h-8" />} />
            <SkillButton name="Gimp" color="5C5543" icon={<GimpIcon title="Gimp" className="h-6 xs:h-8" />} />
            <SkillButton name="Cloudflare" color="F38020" icon={<CloudflareIcon title="Cloudflare" className="h-6 xs:h-8" />} />
            <SkillButton name="Alibaba Cloud" color="FF6A00" icon={<AlibabaCloudIcon title="Alibaba Cloud" className="h-6 xs:h-8" />} />
            <SkillButton name="Google Cloud" color="4285F4" icon={<GoogleCloudIcon title="Google Cloud" className="h-6 xs:h-8" />} />
            <SkillButton name="VS Code" color="007ACC" icon={<VSCodeIcon title="VS Code" className="h-6 xs:h-8" />} />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">Operating System</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
            <SkillButton name="Linux" color="FCC624" icon={<LinuxIcon title="Linux" className="h-6 xs:h-8" />} />
            <SkillButton name="Ubuntu" color="E95420" icon={<UbuntuIcon title="Ubuntu" className="h-6 xs:h-8" />} />
            <SkillButton name="Windows 11" color="0078D4" icon={<Windows11Icon title="Windows 11" className="h-6 xs:h-8" />} />
          </div>
        </div>
      </div>
    </>
  );
}
