import Badge from "../components/Badge";

export const metadata = {
  title: "Chhatresh Khatri | Portfolio | About",
  description: "Chhatresh Khatri is a web developer with expertise in a wide range of technologies including C/C++, Java, HTML5, CSS3, JavaScript, React, Next.js, and more.",
  alternates: {
    canonical: "https://www.chhatreshkhatri.com/about",
  },
};

export default function Page() {
  return (
    <main className=" w-full h-full flex items-center flex-col justify-center font-medium px-4 md:px-12 lg:px-20 py-[100px]">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="flex justify-center font-semibold tracking-wider bg-gradient-to-r from-darkCk/80 to-lightCk/90 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 text-xl xs:2xl md:text-3xl px-1 md:px-2 py-1 ">
          About Me
        </h1>
      </div>
      <div className="dark:bg-darked rounded-xl bg-slate-200 text-justify px-6 xs:px-10 py-6 mt-6">
        <h2 className={`text-2xl xxs:text-3xl md:text-4xl text-center`}>Description</h2>
        <p className="text-xl mt-4">
          Hi there! My name is Chhatresh Khatri and I&apos;m a web developer
          with a passion for building modern and user-friendly websites and
          applications. I have experience working with a range of Tech Stack to
          create clean and modular code that follows industry best practices. In
          addition to my technical skills, I also have a keen eye for design and
          enjoy creating responsive and visually appealing websites. I&apos;m
          learning about the latest trends in the tech industry. I&apos;m a
          total go-getter and always bring my A-game, plus I&apos;m super easy
          to talk to! I&apos;m driven, self-motivated, and passionate about all
          things tech. Let&apos;s work together and make something amazing!
          Thanks for visiting my portfolio website!
        </p>
      </div>
      <div className="w-full h-full flex justify-center">
        <h2 className="font-semibold tracking-wider bg-gradient-to-r from-darkCk/80 to-lightCk/90 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 inline-block text-2xl md:text-3xl px-1 md:px-2 py-1 mt-10">
          Technology Stack
        </h2>
      </div>
      <div className="dark:bg-darked rounded-xl bg-slate-200 px-10 py-6 mt-6 w-full">
        <h3 className={`text-2xl xxs:text-3xl md:text-4xl text-center`}>Languages</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          <Badge
            src={"badge/c-1563b1.svg?logo=c&logoColor=white"}
            alt={`C`}
            className={`m-3`}
          />
          <Badge
            src="badge/c++-004488.svg?logo=c%2B%2B&logoColor=white"
            className={`m-3`}
            alt="C++"
          />
          <Badge
            src="badge/Java-3a75b0?logo=openjdk&logoColor=white"
            alt="java"
            className={`m-3`}
          />
          <Badge
            src="badge/MySql-f29111.svg?logo=mysql"
            alt="MySql"
            className={`m-3`}
          />
          <Badge
            src="badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white"
            className={`m-3`}
            alt="HTML5"
          />
          <Badge
            src="badge/CSS3-%231572B6.svg?logo=css3&logoColor=white"
            className={`m-3 `}
            alt="CSS3"
          />
          <Badge
            src="badge/JavaScript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E"
            className={`m-3`}
            alt="JavaScript"
          />
        </div>
        <h3 className="text-4xl text-center ">Framework & Libraries</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          <Badge
            src="badge/bootstrap-702cf5.svg?logo=bootstrap&logoColor=white"
            className={`m-3`}
            alt="Bootstrap"
          />
          <Badge
            src="badge/Tailwind%20CSS-06B6D4.svg?logo=Tailwind-CSS&logoColor=white"
            className={`m-3`}
            alt="Tailwind CSS"
          />
          <Badge
            src="badge/ReactJS-282c34.svg?logo=react&logoColor=61dafb"
            className={`m-3`}
            alt="ReactJS"
          />
          <Badge
            src="badge/Next.js-000000.svg?logo=nextdotjs&logoColor=white"
            className={`m-3`}
            alt="NextJS"
          />
          <Badge
            src="badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB"
            className={`m-3`}
            alt="ExpressJS"
          />
          <Badge
            src="badge/Node.js-233056.svg?logo=nodedotjs"
            className={`m-3`}
            alt="Node"
          />
          <Badge
            src="badge/Axios-5A29E4.svg?logo=Axios&logoColor=white"
            className={`m-3`}
            alt="Axios"
          />
          <Badge
            src="badge/React%20Router-CA4245.svg?logo=React-Router&logoColor=white"
            className={`m-3`}
            alt="React-router"
          />
          <Badge
            src="badge/Redux-764ABC.svg?logo=Redux&logoColor=white"
            className={`m-3`}
            alt="React-redux"
          />
          <Badge
            src="badge/.ENV-ECD53F.svg?logo=dotenv&logoColor=black"
            className={`m-3`}
            alt=".env"
          />
        </div>
        <h3 className="text-4xl text-center ">Tools & IDEs</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          <Badge
            src="badge/MongoDB-001e2b.svg?logo=mongodb"
            className={`m-3`}
            alt="MongoDB"
          />
          <Badge
            src="badge/nodemon-4f4d3f.svg?logo=nodemon"
            className={`m-3`}
            alt="nodemon"
          />
          <Badge
            src="badge/netlify-%23000000.svg?logo=netlify"
            className={`m-3`}
            alt="netlify"
          />
          <Badge
            src="badge/render-1f1f1f.svg?logo=render"
            className={`m-3`}
            alt="Render"
          />
          <Badge
            src="badge/-Back4App-10203a?logo=back4app"
            className={`m-3`}
            alt="Back4App"
          />
          <Badge
            src="badge/-Git-f0efe7?logo=git"
            className={`m-3`}
            alt="Git"
          />
          <Badge
            src="badge/-GitHub-161b22?logo=github"
            className={`m-3`}
            alt="GitHub"
          />
          <Badge
            src="badge/GitHub%20Actions-0d1117.svg?logo=GitHub-Actions"
            className={`m-3`}
            alt="GitHub Actions"
          />
          <Badge
            src="badge/GitHub%20Pages-222222.svg?logo=GitHub-Pages&logoColor=white"
            className={`m-3`}
            alt="GitHub Pages"
          />
          <Badge
            src="badge/Vercel-000000.svg?logo=Vercel&logoColor=white"
            className={`m-3`}
            alt="Vercel"
          />
          <Badge
            src="badge/firebase-%23039BE5.svg?logo=firebase"
            className={`m-3`}
            alt="Firebase"
          />
          <Badge
            src="badge/Canva-%2300C4CC.svg?logo=Canva&logoColor=white"
            className={`m-3`}
            alt="Canva"
          />
          <Badge
            src="badge/Gimp-0e2426.svg?logo=gimp&logoColor=white"
            className={`m-3`}
            alt="Gimp"
          />
          <Badge
            src="badge/Postman-FF6C37?logo=postman&logoColor=white"
            className={`m-3`}
            alt="Postman"
          />
          <Badge
            src="badge/Cloudflare-1d1d1d?logo=cloudflare&logoColor=orange"
            className={`m-3`}
            alt="Cloudflare"
          />
          <Badge
            src="badge/AlibabaCloud-2c3134?logo=alibabacloud"
            className={`m-3`}
            alt="Alibaba Cloud"
          />
          <Badge
            src="badge/GoogleCloud-5f6368?logo=googlecloud"
            className={`m-3`}
            alt="Google Cloud"
          />
          <Badge
            src="badge/Android%20Studio-3DDC84.svg?logo=Android-Studio&logoColor=white"
            className={`m-3`}
            alt="Android Studio"
          />
          <Badge
            src="badge/VSCode-1f1f1f?logo=visualstudiocode&logoColor=026ec1"
            className={`m-3`}
            alt="VS Code"
          />
        </div>
        <h3 className="text-4xl text-center ">OS</h3>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-3 ">
          <Badge
            src="badge/Linux-FCC624.svg?&logo=Linux&logoColor=black"
            className={`m-3 h-10`}
            alt="Linux"
          />
          <Badge
            src="badge/Ubuntu-E95420.svg?&logo=Ubuntu&logoColor=white"
            className={`m-3 h-10`}
            alt="Ubuntu"
          />
          <Badge
            src="badge/Windows%2011-0078D4.svg?&logo=Windows-11&logoColor=white"
            className={`m-3 h-10`}
            alt="Windows 11"
          />
        </div>
      </div>
    </main>
  );
}
