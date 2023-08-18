"use client";
import TypeWriter from "typewriter-effect";

const Typewriter = () => {
    return (
        <TypeWriter
            options={{
                strings: [
                    "Software Engineer",
                    "Web Developer",
                    "Web Designer",
                ],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default Typewriter