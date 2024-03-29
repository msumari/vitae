import { RiComputerLine } from "react-icons/ri";
import { FaDocker, FaPython, FaReact, FaServer } from "react-icons/fa";
import { AiFillHtml5, AiOutlineApi } from "react-icons/ai";
import {
  SiFirebase,
  SiFlask,
  SiFramer,
  SiGooglecloud,
  SiKubernetes,
  SiMongodb,
  SiNextDotJs,
  SiTailwindcss,
  SiTypescript,
  SiAmazonaws
} from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoMdPhonePortrait,
} from "react-icons/io";
import { GiServerRack } from "react-icons/gi";
import { Iproject, Iservice, Iskill } from "./type";

export const service: Iservice[] = [
  {
    Icon: RiComputerLine,
    title: "Front-End Dev",
    about:
      "I can build responsive and optmized SPA user interface's by using <b>HTML</b>, <b>CSS</b>, <b>React.js</b> and <b>Firebase</b> . ",
  },
  {
    Icon: FaServer,
    title: "Back-End Dev ",
    about:
      "I can build scallable and optmized backend service by using <b>Node&Express</b>, <b>Flask</b> and handling databases",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can build scallable and optmized REST API's by using <b>Node&Express</b>, <b>Flask</b> ",
  },
  {
    Icon: GiServerRack,
    title: "System Architecture",
    about:
      "I can architect and plan scallabe and optmized systems  via different popular patterns e.g <b>Microservices</b> ",
  },
  {
    Icon: IoMdPhonePortrait,
    title: "Mobile App Dev",
    about: "Coming soon still keeping up with the pace of <b>React Native</b> ",
  },
];

export const language: Iskill[] = [
  {
    name: "Javascript",
    level: "80%",
    Icon: IoLogoJavascript,
  },
  {
    name: "HTML",
    level: "90%",
    Icon: AiFillHtml5,
  },
  {
    name: "Css",
    level: "70%",
    Icon: IoLogoCss3,
  },
  {
    name: "React",
    level: "70%",
    Icon: FaReact,
  },
  {
    name: "TypeScript",
    level: "40%",
    Icon: SiTypescript,
  },
  {
    name: "Next js",
    level: "50%",
    Icon: SiNextDotJs,
  },
  {
    name: "Python",
    level: "60%",
    Icon: FaPython,
  },
  {
    name: "Node",
    level: "60%",
    Icon: IoLogoNodejs,
  },
  {
    name: "Tailwind",
    level: "70%",
    Icon: SiTailwindcss,
  },
];

export const tools: Iskill[] = [
  {
    name: "Firebase",
    level: "70%",
    Icon: SiFirebase,
  },
  {
    name: "MongoDB",
    level: "60%",
    Icon: SiMongodb,
  },
  {
    name: "AWS",
    level: "70%",
    Icon: SiAmazonaws,
  },
  {
    name: "GCP",
    level: "10%",
    Icon: SiGooglecloud,
  },
];

export const project: Iproject[] = [
  {
    name: "Lume",
    description:
      "This is a movie details and trailer streaming web app that is focused on providing relevant data on movie search journey of people.",
    category: ["React", "Firebase","Node","API","MongoDB"],
    deploy_url: "https://lume.msumari.com",
    github_url: "https://github.com/msumari/",
    key_tech: ["React", "Firebase","MongoDB","Express","Tailwind","Redux"],
    image_path: "/image/lume_shot.png",
  },
   {
    name: "Assure",
    description:
      "This is a professional business website that increase leads to the robotech labs services.",
    category: ["React"],
    deploy_url: "https://assureconsults.netlify.app/",
    github_url: "https://github.com/msumari/",
    key_tech: ["React", "Firebase","Tailwind","Redux"],
    image_path: "/image/IMG-20210707-WA0000.jpg",
  },
  {
    name: "Robotech",
    description:
      "This is a professional business website that increase leads to the robotech labs services.",
    category: ["React", "Firebase"],
    deploy_url: "https://robotech.co.tz",
    github_url: "https://github.com/msumari",
    key_tech: ["React", "Firebase", "Context API"],
    image_path: "/image/robotech.JPG",
  },
 
   {
    name: "Toio",
    description:
      "This is a professional business website that bring the online presence of tanzania open innnovation organization.",
    category: ["React"],
    deploy_url: "https://toio.or.tz/",
    github_url: "https://github.com/msumari",
    key_tech: ["React", "Firebase","Tailwind"],
    image_path: "/image/toio.png",
  },
  
];
