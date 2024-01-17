"use client";
import TypeWriter from "typewriter-effect";

const Typewriter = () => {
  return (
    <TypeWriter
      options={{
        strings: ["Software Engineer", "Full Stack Developer","Frontend developer","Backend Developer", "Programmer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Typewriter;
