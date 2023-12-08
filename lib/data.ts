import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaFileCode, FaPen, FaReact, FaRegFileCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import stockXImg from "@/public/stockX.png";
import wattwatchImg from "@/public/wattwatch.png";
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
    title: "StockX",
    description:
      "A Web App that provides real-time Stock Market Data and Predictions using Machine Learning powered by News and Historical data.",
    tags: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
    imageUrl: stockXImg,
    url: "https://github.com/shaharsh624/StockX",
  },
  {
    title: "WattWatch",
    description:
      "An innovative app that helps to monitor and manage water & electricity consumption. Developed in Smart India Hackathon.",
    tags: ["Flutter", "Flask", "MongoDB", "Firebase", "Google Maps API"],
    imageUrl: wattwatchImg,
    url: "https://github.com/shaharsh624/WattWatch",
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
