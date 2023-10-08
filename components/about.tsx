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
      <p className="mb-3">
      A passionate Frontend developer from India studying Computer Engineering at PDEU.{" "}
        I am a driven and motivated developer with a passion for solving complex problems & creating elegant and efficient solutions.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect.
        <br/>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        chess, reading, and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span> and dedicated to stay up-to-date with the latest industry trends and always seek new challenges to expand my skillset.
        <br />
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
