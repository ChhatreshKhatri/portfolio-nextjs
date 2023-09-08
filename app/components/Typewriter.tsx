"use client";
import TypeWriter from "typewriter-effect";

const Typewriter = () => {
  return (
    <TypeWriter
      options={{
        strings: ["Full Stack Devloper", "Web Developement", "Web Designer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Typewriter;
