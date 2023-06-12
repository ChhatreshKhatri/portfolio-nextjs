"use client";
import TypeWriter from "typewriter-effect";
import React from 'react'

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