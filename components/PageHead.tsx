import React from "react";

const PageHead = ({text}:{text:string}) => {
  return (
    <button className="flex items-center justify-center rounded p-0.5 bg-gradient-to-r from-blue1 to-yellow1">
      <span className="flex justify-center items-center font-semibold tracking-wider text-xl xxs:text-2xl md:text-3xl p-1 md:px-2 bg-buttonBg dark:bg-darked rounded">
        {text}
      </span>
    </button>
  );
};

export default PageHead;