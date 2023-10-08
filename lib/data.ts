import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaFileCode, FaPen, FaReact, FaRegFileCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Engineering",
    location: "PDEU, India",
    description:
      "I am currently studying exploring different fields in Computer Science. I'm in my 3rd year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Project Intern",
    location: "Remote",
    description:
      "I created and tested website test cases and assisted with API testing using Postman, gaining valuable industry-standard skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Documentation Head",
    location: "ACM, PDEU",
    description:
      "I am responsible for creating documentation for the chapter's apps and websites, as well as crafting content for posters and promotional messages to promote events.",
    icon: React.createElement(FaRegFileCode),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "NodeJs",
  "ExpressJS",
  "ReactJS",
  "NextJs",
  "Python",
  "Java",
  "C++",
  "Flutter",
  "MongoDB",
  "MySQL",
  "Flask",
  "Git",
  "Linux",
  "Bash",
  "Postman",
  "Figma",
] as const;
