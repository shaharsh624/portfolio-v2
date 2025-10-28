"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[47rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3 text-xl leading-8">
                I'm a{" "}
                <span className="font-semibold">
                    Full-Stack Software Engineer{" "}
                </span>
                with a strong foundation in designing{" "}
                <span className="font-semibold">scalable & adaptable </span>
                software solutions. Experienced in developing{" "}
                <span className="font-semibold">end-to-end applications</span>,
                from designing databases & API endpoints to implementing UI
                components. Love to solve challenging problems,{" "}
                <span className="font-semibold">writing clean code</span>, and
                exploring new technologies.
                <br />
            </p>

            <p className="text-xl leading-8">
                <span className="italic">When I'm not coding</span>, I enjoy
                playing chess, reading, and watching movies. I also enjoy
                <span className="font-semibold"> learning new things</span> and
                dedicated to stay up-to-date with the latest industry trends and
                always seek new challenges to expand my skillset.
            </p>
            <p className="text-xl leading-8 mt-2">
                <span className="font-bold">
                    I am currently looking for a full-time position as a
                    software developer.
                </span>
            </p>
        </motion.section>
    );
}
