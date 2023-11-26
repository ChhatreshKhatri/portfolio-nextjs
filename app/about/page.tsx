import PageHead from "@/app/components/PageHead";
import SkillButton from "../components/SkillsButton";
import { Icons } from "../components/icons";

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
            <SkillButton name="C" color="bg-[#1563b1]" icon={<Icons.CIcon className="h-6 xs:h-8" />} />
            <SkillButton name="C++" color="bg-[#004488]" icon={<Icons.CPlusPlusIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Java" color="bg-[#437291]" icon={<Icons.JavaIcon className="h-6 xs:h-8" />} />
            <SkillButton name="MySQL" color="bg-[#4479A1]" icon={<Icons.MySqlIcon className="h-6 xs:h-8" />} />
            <SkillButton name="HTML5" color="bg-[#e34f26]" icon={<Icons.HtmlIcon className="h-6 xs:h-8" />} />
            <SkillButton name="CSS3" color="bg-[#1572B6]" icon={<Icons.CssIcon className="h-6 xs:h-8" />} />
            <SkillButton name="JavaScript" color="bg-[#F7DF1E]" icon={<Icons.JavaScriptIcon lassName="h-6 xs:h-8" />} />
            <SkillButton name="TypeScript" color="bg-[#3178C6]" icon={<Icons.TypeScriptIcon className="h-6 xs:h-8" />} />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">Framework & Libraries</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
            <SkillButton name="React.js" color="bg-[#61DAFB]" icon={<Icons.ReactIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Next.js" color="bg-[#000000]" className="text-white" icon={<Icons.NextjsIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Astro" color="bg-[#BC52EE]" icon={<Icons.AstroIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Express.js" color="bg-[#000000]" className="text-white" icon={<Icons.ExpressIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Node.js" color="bg-[#339933]" icon={<Icons.NodejsIcon className="h-6 xs:h-8" />} />
            <SkillButton
              name="Bootstrap"
              color="bg-[#05054B]"
              className="text-white"
              icon={<Icons.BootstrapIcon title="Bootstrap" className="h-6 xs:h-8" />}
            />
            <SkillButton name="Tailwind CSS" color="bg-[#06B6D4]" icon={<Icons.TailwindCssIcon className="h-6 xs:h-8" />} />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">Tools</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
            <SkillButton name="MongoDB" color="bg-[#47A248]" icon={<Icons.MongoDBIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Postman" color="bg-[#FF6C37]" icon={<Icons.PostmanIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Git" color="bg-[#F05032]" icon={<Icons.GitIcon title="" className="h-6 xs:h-8" />} />
            <SkillButton name="GitHub" color="bg-[#181717]" className="text-white" icon={<Icons.GitHubIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Vercel" color="bg-[#000000]" className="text-white" icon={<Icons.VercelIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Firebase" color="bg-[#FFCA28]" icon={<Icons.FirebaseIcon title="Firebase" className="h-6 xs:h-8" />} />
            <SkillButton name="Figma" color="bg-[#F24E1E]" icon={<Icons.FigmaIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Canva" color="bg-[#00C4CC]" icon={<Icons.CanvaIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Gimp" color="bg-[#5C5543]" icon={<Icons.GimpIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Cloudflare" color="bg-[#F38020]" icon={<Icons.CloudflareIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Alibaba Cloud" color="bg-[#FF6A00]" icon={<Icons.AlibabaCloudIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Google Cloud" color="bg-[#4285F4]" icon={<Icons.GoogleCloudIcon className="h-6 xs:h-8" />} />
            <SkillButton name="VS Code" color="bg-[#007ACC]" icon={<Icons.VSCodeIcon className="h-6 xs:h-8" />} />
          </div>
          <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">Operating System</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
            <SkillButton name="Linux" color="bg-[#FCC624]" icon={<Icons.LinuxIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Ubuntu" color="bg-[#E95420]" icon={<Icons.UbuntuIcon className="h-6 xs:h-8" />} />
            <SkillButton name="Windows 11" color="bg-[#0078D4]" icon={<Icons.Windows11Icon className="h-6 xs:h-8" />} />
          </div>
        </div>
      </div>
    </>
  );
}
