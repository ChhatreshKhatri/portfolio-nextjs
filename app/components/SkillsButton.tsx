export default function Skills({ name, color, className, icon, pos }: { name: string; color?: string; className?: string; icon: React.ReactNode; pos?: string }) {
  return (
    <>
      <div className={`items-center justify-center p-0.5 rounded bg-gradient-to-r ${pos == "1" ? "from-yellow1 to-blue1 dark:from-blue1 dark:to-yellow1" : "from-blue1 to-yellow1 dark:from-yellow1 dark:to-blue1"}`}>
        <div className="flex justify-center items-center py-1 px-2 gap-x-2 rounded whitespace-nowrap bg-buttonBg dark:bg-darker">
          {icon}
          <p className={`${color} `}>{name}</p>
        </div>
      </div>
    </>
  );
}
