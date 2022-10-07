// IMPORT IMAGES
import IMG1 from "../assets/project-1.png";
import IMG1_LG from "../assets/project-1-lg.png";
import IMG2 from "../assets/project-2.png";
import IMG2_LG from "../assets/project-2-lg.png";
import IMG3 from "../assets/project-3.png";
import IMG3_LG from "../assets/project-3-lg.png";
import IMG4 from "../assets/project-4.png";
import IMG4_LG from "../assets/project-4-lg.png";
import IMG5 from "../assets/project-5.jpg";
import IMG5_LG from "../assets/project-5-lg.jpg";
import IMG6 from "../assets/project-6.png";
import IMG6_LG from "../assets/project-6-lg.png";

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
    skills: ["Full-Stack Web", "Commerce.js", "Stripe.js", "Formik"],
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
    title: "Portfolio Site",
    link: "https://josiahbrown.com",
    infoUrl: "/projects/portfolio",
    github: "https://github.com/josiah-brown/josiah-brown-site",
    skills: ["Full-Stack Web", "Tailwind", "Jest", "P5.js", "Figma"],
    overview: [
      "A minimalist portfolio site brought to life with generative art and subtle animations. Built with ReactJS, Tailwind, P5.js, and hosted on Netlify.",
    ],
    process: [
      "Okay, maybe it is slightly redundant to list this site within itself, but this is one of my larger projects and I learned so much while building it.",
      "After completing my first website using SCSS, I'd had enough. It was time for an upgrade. I quickly found Tailwind and spent a day learning the framework. It made implementing dark theme much easier and I haven't looked back yet.",
      "I implemented testing on this site using React Testing Library and Jest. The tests are primarily unit and snapshot tests though I hope to add more as my knowledge in this area grows.",
      "Lastly, this website's animation on the home page was built using P5.js. This is a sample of my generative art and more can be viewed on my Instagram.",
    ],
    photo: IMG2,
    photo_lg: IMG2_LG,
  },
  {
    id: 3,
    title: "The Library Loft",
    link: "https://thelibraryloft.com",
    infoUrl: "/projects/the-libary-loft",
    github: "",
    skills: ["WordPress", "Design", "Domain Management", "SEO"],
    overview: ["A WordPress blog built for a family member."],
    process: [
      "Though React apps are more fun, a family member needed a quick site built so I decided I might as well learn WordPress.",
      "I am waiting on content for the site and also learning SEO to increase search rankings. This is very much still a work in progess.",
    ],
    photo: IMG3,
    photo_lg: IMG3_LG,
  },
  {
    id: 4,
    title: "Diploma Generator App",
    link: "",
    infoUrl: "/projects/certificate-generator",
    github: "https://github.com/josiah-brown/diploma-app",
    skills: ["Desktop App", "Python", "PyPDF4"],
    overview: [
      "A desktop application that generates PDF certificates and diplomas based on values entered by the user. Coded in Python and bundled with PyInstaller",
    ],
    process: [
      "From 2021-2022 I worked for an NGO in Southeast Asia that conducted trainings for around 100-200 students per session. Upon graduation, each student was given a diploma to certify their completion of the course.",
      "When I arrived, staff was manually typing in names and dates for each diploma which was extremely tedious.",
      "I decided to develop a simple desktop app that generates these diplomas from a .txt or .xlsx file containing a list of names. The user is also able to specify dates, titles, and download location for the PDF generated.",
    ],
    photo: IMG4,
    photo_lg: IMG4_LG,
  },
  {
    id: 5,
    title: "Mobile Cipher App",
    link: "",
    infoUrl: "/projects/cipher-app",
    github: "",
    skills: ["Mobile App", "Python", "Encryption"],
    overview: [
      "An android mobile app that uses an advanced version of the Caesar Cipher to encrypt messages.",
    ],
    process: [
      "From 2021-2022 I worked for an NGO in Southeast Asia that conducted trainings for ethnic minorities resisting an oppressive government.",
      "One of the skills we taught was secure correspondence which was basically message encryption 101.",
      "When I learned that the students were encrypting by hand on paper, I decided to make a simple encryption app. The app takes a user message as well as some key variables and can either encrypt or decrypt. Nothing is stored locally to avoid the risk of unintended message recovery.",
      "The app was built with Python, bundled using BeeWare, and used a custom encryption algorithm based upon multiple salted rounds of the Caesar Cipher. Due to the nature of this project, I am unable to the share code.",
    ],
    photo: IMG5,
    photo_lg: IMG5_LG,
  },
  {
    id: 6,
    title: "Desktop Chess App",
    link: "",
    infoUrl: "/projects/chess-app",
    github: "https://github.com/josiah-brown/chess",
    skills: ["Desktop App", "Python", "Tkinter", "Pygame"],
    overview: ["A simple chess app built with Pygame and Tkinter."],
    process: [
      "I built this project to test my Python skills and I made a point not to view/use anyone else's chess code. That turned out to be a challenge.",
      "Sadly, the app never reached completion (I wanted to add an engine) but the game logic, timers, and move previews were all implemented before I moved on to something else.",
    ],
    photo: IMG6,
    photo_lg: IMG6_LG,
  },
];

export const meta = {
  title: "Josiah Brown",
  content:
    "Front End Developer and Designer specializing in ReactJS. Always learning something new.",
};

export const about = {
  text: [
    "Hello. My name is Josiah Brown and I am a front-end web developer.",
    "Only after obtaining a degree in Electrical and Computer Engineering did I realize that software (not hardware) was my passion. Oh well. Ever since, I have been writing code in some form or fashion. Generative art, a chess game, a mobile cipher app for soldiers in Southeast Asia, and of course, web development.",
    "I love to learn. When I am not scouring stack overflow for solutions to bugs, you will likely find me playing Spikeball, traveling the world, or watching Fresh Prince of Bel-Air. Checkout my resume or reach out to me via the contact page if you would like to connect!",
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
