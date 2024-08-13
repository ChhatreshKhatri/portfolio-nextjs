const PageHead = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center rounded p-0.5 bg-gradient-to-r from-blue1 to-yellow1">
      <h1 className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl py-1 px-2 bg-buttonBg dark:bg-darked rounded">{text}</h1>
    </div>
  );
};

export default PageHead;
