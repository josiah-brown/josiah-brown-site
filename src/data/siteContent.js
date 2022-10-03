// IMPORT IMAGES
import IMG1 from "../assets/project-1.png";
import IMG2 from "../assets/project-2.png";

// IMPORT LOGOS
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { SiProcessingfoundation } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";

export const projects = [
  {
    id: 1,
    title: "Panther City Leather",
    link: "https://panthercityleather.com",
    skills: ["Full-Stack Development", "UI/UX"],
    photo: IMG1,
  },
  {
    id: 2,
    title: "Movies.me",
    link: "https://www.google.com",
    skills: ["API Integration", "Sorting"],
    photo: IMG2,
  },
  {
    id: 3,
    title: "Portfolio Site",
    link: "https://www.google.com",
    skills: ["Full-Stack Development", "UI/UX Design"],
    photo: IMG2,
  },
  {
    id: 4,
    title: "Certificate Generator",
    link: "https://www.google.com",
    skills: ["Python", "Desktop Application"],
    photo: "/assets/project-1-img.png",
  },
  {
    id: 5,
    title: "Certificate Generator",
    link: "https://www.google.com",
    skills: ["Python", "Desktop Application"],
    photo: "/assets/project-1-img.png",
  },
  {
    id: 6,
    title: "Certificate Generator",
    link: "https://www.google.com",
    skills: ["Python", "Desktop Application"],
    photo: "/assets/project-1-img.png",
  },
  {
    id: 7,
    title: "Certificate Generator",
    link: "https://www.google.com",
    skills: ["Python", "Desktop Application"],
    photo: "/assets/project-1-img.png",
  },
];

export const meta = {
  title: "Josiah Brown",
  content:
    "Front End Developer and Designer specializing in ReactJS. Always learning something new.",
};

export const about = {
  text: [
    "Hello. My name is Josiah Brown and I like to code.",
    "Only after obtaining a degree in Electrical and Computer Engineering did I realized that software (not hardware) was my passion. Oh well. Ever since, I have been writing code in some form or fashion. Generative art, a chess engine, a mobile cipher app for Burmese refugees, and of course, web development.",
    "I love to learn. When I am not scouring stack overflow for solutions to bugs, you will likely find me playing some Spikeball, traveling the world, or watching Fresh Prince of Bel Air. Checkout my resume or reach out to me via the contact page if you would like to connect!",
  ],
  logos: [
    <FaReact key="FaReact" />,
    <FaNodeJs key="FaNodeJs" />,
    <SiTailwindcss key="SiTailwindcss" />,
    <SiMongodb key="SiMongodb" />,
    <AiOutlineHtml5 key="AiOutlineHtml5" />,
    <SiCss3 key="SiCss3" />,
    <SiJavascript key="SiJavascript" />,
    <FaWordpress key="FaWordpress" />,
    <SiTestinglibrary key="SiTestinglibrary" />,
    <SiProcessingfoundation key="SiProcessingfoundation" />,
    <FaPython key="FaPython" />,
    <BsTerminalFill key="BsTerminalFill" />,
  ],
};
