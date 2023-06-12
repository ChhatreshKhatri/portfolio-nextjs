"use client";
import TypeWriter from "typewriter-effect";

const Typewriter = () => {
    return (
        <TypeWriter
            options={{
                strings: [
                    "Web Developer",
                    "Web Designer",
                    "Software Engineer",
                ],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default Typewriter