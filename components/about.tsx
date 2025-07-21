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
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3 text-xl leading-8">
                I'm a <span className="font-semibold">Software Engineer </span>
                f on path of mastering algorithms and making machines learn. y
                passion lies in crafting innovative solutions at the
                intersection of technology and security. My favorite part of
                programming is the problem-solving aspect.
                <br />
            </p>

            <p className="text-xl leading-8">
                <span className="italic">When I'm not coding</span>, I enjoy
                playing chess, reading, and watching movies. I also enjoy
                <span className="font-semibold"> learning new things</span> and
                dedicated to stay up-to-date with the latest industry trends and
                always seek new challenges to expand my skillset.{" "}
                <span className="font-bold">
                    I am currently looking for a full-time position as a
                    software developer.
                </span>
            </p>
        </motion.section>
    );
}
