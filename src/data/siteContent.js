// IMPORT IMAGES
import IMG1 from "../assets/project-1.png";
import IMG1_LG from "../assets/project-1-lg.png";
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
    infoUrl: "/projects/panther-city-leather",
    github: "https://github.com/josiah-brown/panther-city-leather",
    skills: ["Full-Stack Development", "UI/UX"],
    overview: [
      "A custom leather goods ecommerce site built with ReactJS, Commerce.js, and hosted on Netlify. ",
    ],
    process: [
      "This is the first full site I built with ReactJS. The learning curve was steep but by the end of the project, I felt very comfortable using components, managing state/context, and implementing React hooks.",
      "The client wanted the site to look similar to another ecommerce site so there was no heavy lifting involved on the design.",
      "The hardest part of this project was integrating the front-end with the Commerce.js API where all of the products and shipping info are stored. This required a good amount of planning and thought about user flow and API request timing.",
      "The checkout form in particular tested my ability to handle errors. I ended up using Formik to handle most of the validation but there were some custom validation hooks required as well.",
      "On the front-end, I wrote custom scss for all of the components to make the site responsive and cross-browser supported.",
      "Though there is much to improve upon in the structure and testing of the code, I learned more in this project than any other I had previously built and am proud that my code is being used to support a small business.",
    ],
    photo: IMG1,
    photo_lg: IMG1_LG,
  },
  {
    id: 2,
    title: "Movies.me",
    link: "https://www.google.com",
    infoUrl: "/projects/movies-me",
    github: "https://github.com/josiah-brown/panther-city-leather",
    skills: ["API Integration", "Sorting"],
    overview: [
      "A custom leather goods ecommerce site built with ReactJS, Commerce.js, and hosted on Netlify.",
    ],
    process: [
      "This is the first full site I built with ReactJS. The learning curve was steep but by the end of the project, I felt very comfortable using components, managing state, and implementing React hooks.",
    ],
    photo: IMG2,
    photo_lg: IMG1_LG,
  },
  {
    id: 3,
    title: "Portfolio Site",
    link: "https://www.google.com",
    infoUrl: "/projects/portfolio",
    github: "https://github.com/josiah-brown/panther-city-leather",
    skills: ["Full-Stack Development", "UI/UX Design"],
    overview: [
      "A custom leather goods ecommerce site built with ReactJS, Commerce.js, and hosted on Netlify.",
    ],
    process: [
      "This is the first full site I built with ReactJS. The learning curve was steep but by the end of the project, I felt very comfortable using components, managing state, and implementing React hooks.",
    ],
    photo: IMG2,
    photo_lg: IMG1_LG,
  },
  {
    id: 4,
    title: "Certificate Generator",
    link: "https://www.google.com",
    infoUrl: "/projects/certificate-generator",
    github: "https://github.com/josiah-brown/panther-city-leather",
    skills: ["Python", "Desktop Application"],
    overview: [
      "A custom leather goods ecommerce site built with ReactJS, Commerce.js, and hosted on Netlify.",
    ],
    process: [
      "This is the first full site I built with ReactJS. The learning curve was steep but by the end of the project, I felt very comfortable using components, managing state, and implementing React hooks.",
    ],
    photo: "/assets/project-1-img.png",
    photo_lg: IMG1_LG,
  },
  // {
  //   id: 5,
  //   title: "Certificate Generator",
  //   link: "https://www.google.com",
  //   infoUrl: "/projects/panther-city-leather",
  //   skills: ["Python", "Desktop Application"],
  //   photo: "/assets/project-1-img.png",
  // },
  // {
  //   id: 6,
  //   title: "Certificate Generator",
  //   link: "https://www.google.com",
  //   infoUrl: "/projects/panther-city-leather",
  //   skills: ["Python", "Desktop Application"],
  //   photo: "/assets/project-1-img.png",
  // },
];

export const meta = {
  title: "Josiah Brown",
  content:
    "Front End Developer and Designer specializing in ReactJS. Always learning something new.",
};

export const about = {
  text: [
    "Hello. My name is Josiah Brown and I am a front-end web developer.",
    "Only after obtaining a degree in Electrical and Computer Engineering did I realized that software (not hardware) was my passion. Oh well. Ever since, I have been writing code in some form or fashion. Generative art, a chess engine, a mobile cipher app for Burmese refugees, and of course, web development.",
    "I love to learn. When I am not scouring stack overflow for solutions to bugs, you will likely find me playing Spikeball, traveling the world, or watching Fresh Prince of Bel Air. Checkout my resume or reach out to me via the contact page if you would like to connect!",
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
