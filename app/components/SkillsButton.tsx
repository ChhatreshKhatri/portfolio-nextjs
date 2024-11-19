import Image from "next/image";
export default function Skills({ name, color, className, icon }: { name: string; color?: string; className?: string; icon: string;  }) {
  return (
    <>
      <div className={`items-center justify-center p-0.5 rounded bg-gradient-to-r "from-yellow1 to-blue1 dark:from-blue1 dark:to-yellow1" `}>
        <div className="flex justify-center items-center py-1 px-2 gap-x-2 rounded whitespace-nowrap bg-buttonBg dark:bg-darker">
          <Image src={icon} alt={name} height={32} width={32} className="w-6 h-6 xs:w-8 xs:h-8"/>
          <p className={`text-[${color}] `}>{name}</p>
        </div>
      </div>
    </>
  );
}
