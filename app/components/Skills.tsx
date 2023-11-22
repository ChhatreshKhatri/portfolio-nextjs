interface Skill {
  name: string;
  color: string;
  icon: React.ReactNode;
  className?: string;
}

const Skills = ({ skillName, arrayName }: { skillName: string; arrayName: Skill[] }) => (
  <>
    <h3 className="text-2xl xxs:text-3xl md:text-4xl text-center">{skillName}</h3>
    <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-4">
      {arrayName.map((param, index) => (
        <button
          key={index}
          title={param.name}
          className={`relative w-auto h-[35px] xs:h-[45px] ${param.color} rounded-md p-1 xs:p-2 flex items-center justify-center text-light dark:text-dark`}>
          <div className={`absolute inset-0 bg-gradient-to-b from-[#fff]/10 rounded-md`} />
          <div className={`relative flex items-center justify-center ${param.className}`}>
            {param.icon} <p className="relative text-xl md:text-2xl ml-1 xs:ml-2 drop-shadow-text">{param.name}</p>
          </div>
        </button>
      ))}
    </div>
  </>
);

export default Skills;
