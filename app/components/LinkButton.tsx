import Link from "next/link";

const LinkButton = ({ name, link, icon }: { name: string; link: string; icon: React.ReactNode }) => {
  return (
    <button className="items-center justify-center p-0.5 rounded bg-gradient-to-r from-darkCk to-lightCk">
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
