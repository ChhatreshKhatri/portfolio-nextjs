export const metadata = {
  title: "Chhatresh Khatri | Portfolio | Projects",
  description: "Project page",
};
export default function Projects() {
  return (
    <main className=" w-full h-full flex items-center flex-col justify-center font-medium px-2 xxs:px-4 md:px-12 lg:px-20 py-[100px]">
      <div className="w-full h-full flex justify-center">
        <h1 className="font-semibold tracking-wider bg-gradient-to-r from-darkCk/80 to-lightCk/90 dark:from-darkCk/50 dark:to-lightCk/50 border-black dark:border-light border mb-4 inline-block text-2xl md:text-3xl px-1 md:px-2 py-1 ">
          My Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 w-full gap-1 lg:grid-cols-2  rounded-xl bg-darked">
        <div className="flex justify-end items-center ">
          {/* Content for the first column */}
          <div className="w-full h-full flex flex-col justify-center  items-center ">
            {/* Centered content in the first column */}
            col 1
          </div>
        </div>
        <div className="flex justify-start items-center">
          {/* Content for the second column */}
          <div className="w-full h-full flex justify-center items-center">
            {/* Centered content in the second column */}
            col 2
          </div>
        </div>
      </div>
    </main>
  );
}
