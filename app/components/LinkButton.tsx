import Link from "next/link";

const LinkButton = ({ name, link, icon, pos }: { name: string; link: string; icon: React.ReactNode; pos: string }) => {
  return (
    <button
      className={`items-center justify-center p-0.5 rounded bg-gradient-to-r ${pos == "1" ? "from-darkCk to-lightCk" : "from-lightCk to-darkCk"}`}>
      <Link
        href={link}
        target="_blank"
        className="flex justify-center items-center py-1 px-2 gap-x-2 rounded whitespace-nowrap bg-lighter dark:bg-darker">
        {icon} {name}
      </Link>
    </button>
  );
};

export default LinkButton;
