export default function Skills({ name, color, className, icon }: { name: string; color: string; className?: string; icon: React.ReactNode }) {
  return (
    <>
      <button
        title={name}
        className={`relative w-auto h-[35px] xs:h-[45px] rounded-md p-1 xs:p-2 flex items-center justify-center text-light dark:text-dark ${color}`}>
        <div className={`absolute inset-0 bg-gradient-to-b from-[#fff]/10 rounded-md`} />
        <div className={`relative flex items-center justify-center ${className}`}>
          {icon}
          <p className="relative text-xl md:text-2xl ml-1 xs:ml-2 drop-shadow-text">{name}</p>
        </div>
      </button>
    </>
  );
}
