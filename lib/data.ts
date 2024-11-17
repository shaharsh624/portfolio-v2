import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaFileCode, FaPen, FaReact, FaRegFileCode } from "react-icons/fa";
import { LiaCubeSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import shareclipImg from "@/public/shareclip.png";
import agrEvolveImg from "@/public/agrevolve.png";
import answerLLMImg from "@/public/answerLLM.png";
import stockXImg from "@/public/stockX.png";
import wattwatchImg from "@/public/wattwatch.png";
import chatappImg from "@/public/chatapp.png";
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
        title: "Summer Developer Intern",
        location: "Iolite Softwares",
        description:
            "Looking forward to learn, apply and test my knowledge to gain valuable experience.",
        icon: React.createElement(CgWorkAlt),
        date: "May - July 2024",
    },
    {
        title: "Project Intern",
        location: "Jio, RIL",
        description:
            "Created and tested website test cases and assisted with API testing using Postman, gaining valuable industry-standard skills.",
        icon: React.createElement(CgWorkAlt),
        date: "May - July 2023 ",
    },
    {
        title: "Documentation Lead",
        location: "Association of Computer Machinery, PDEU",
        description:
            "Responsible for creating documentation for the chapter's apps and websites, as well as crafting content for posters and promotional messages to promote events.",
        icon: React.createElement(FaRegFileCode),
        date: "Jan 2023 - Present",
    },
    {
        title: "Event Planner",
        location: "IEEE CIS PDEU Branch",
        description:
            "Colaborating across teams, coordinating logistics for successful event delivery.",
        icon: React.createElement(FaRegFileCode),
        date: "Jan 2023 - Present",
    },
    {
        title: "Documentation Head",
        location: "Cube-i-Cult, PDEU",
        description:
            "Responsible for creating documentation for the club's events, as well as crafting content for posters and promotional messages to promote events.",
        icon: React.createElement(LiaCubeSolid),
        date: "Nov 2022 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "ShareClip",
        description:
            "A tool for securely sharing files and text over the internet, ensuring privacy with temporary storage and automatic deletion after a set validity period.",
        tags: ["ReactJS", "ChakraUI", "Appwrite", "Vercel", "JavaScript"],
        imageUrl: shareclipImg,
        url: "https://shareclip.harshshah.me",
    },
    {
        title: "AgrEvolve",
        description:
            "A Dashboard to provide one stop solution for all agriculture related information for farmers and integrating an API",
        tags: ["NextJS", "NodeJS", "ShadcnUI", "REST API", "Postman"],
        imageUrl: agrEvolveImg,
        url: "https://github.com/shaharsh624/agrevolve",
    },
    {
        title: "AnswerLLM",
        description:
            "A Question and Answer System that can answer queries based on already learnt Question-Answers.",
        tags: ["Google Gemini", "Langchain", "FAISS", "MongoDB", "Streamlit"],
        imageUrl: answerLLMImg,
        url: "https://github.com/shaharsh624/AnswerLLM",
    },
    {
        title: "WattWatch",
        description:
            "An innovative app that helps to monitor and manage water & electricity consumption. Developed in Smart India Hackathon.",
        tags: ["Flutter", "Flask", "MongoDB", "Firebase", "Google Maps API"],
        imageUrl: wattwatchImg,
        url: "https://github.com/shaharsh624/WattWatch",
    },
    {
        title: "StockX",
        description:
            "A Web App that provides real-time Stock Market Data and Predictions using Machine Learning powered by News and Historical data.",
        tags: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
        imageUrl: stockXImg,
        url: "https://github.com/shaharsh624/StockX",
    },
    {
        title: "ChatApp",
        description:
            "A real-time messaging app with end-to-end encryption and intrusion detection for secure, private communication.",
        tags: [
            "ReactJS",
            "Firebase",
            "Privacy",
            "Secure",
            "Intrusion Detection",
        ],
        imageUrl: chatappImg,
        url: "https://chatapp.harshshah.me",
    },
] as const;

export const skillsData = [
    "Python",
    "JavaScript",
    "C++",
    "Langchain",
    "TensorFlow",
    "Streamlit",
    "Flask",
    "Node.js",
    "ExpressJS",
    "Next.js",
    "React.js",
    "Tailwind",
    "NumPy",
    "Pandas",
    "AWS",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Google Cloud Platform",
    "Docker",
    "Git",
    "GitHub",
    "Google Colab",
    "GNU/Linux",
    "Data Science",
] as const;
