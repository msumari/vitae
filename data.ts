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
    level: "70%",
    Icon: IoLogoJavascript,
  },
  {
    name: "HTML",
    level: "80%",
    Icon: AiFillHtml5,
  },
  {
    name: "Css",
    level: "80%",
    Icon: IoLogoCss3,
  },
  {
    name: "React",
    level: "80%",
    Icon: FaReact,
  },
  {
    name: "TypeScript",
    level: "50%",
    Icon: SiTypescript,
  },
  {
    name: "Next js",
    level: "60%",
    Icon: SiNextDotJs,
  },
  {
    name: "Python",
    level: "80%",
    Icon: FaPython,
  },
  {
    name: "Node",
    level: "60%",
    Icon: IoLogoNodejs,
  },
  {
    name: "Tailwind",
    level: "80%",
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
    name: "Docker",
    level: "10%",
    Icon: FaDocker,
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
    name: "E-pharmacy",
    description:
      "This is a e-commerce build that focused on the medical phamarcy products to final consumers directly.",
    category: ["React", "Firebase"],
    deploy_url: "https://e-phamarcy.netlify.app/",
    github_url: "https://github.com/msumari/E-commerce",
    key_tech: ["React", "Firebase", "Context API"],
    image_path: "/image/e-commerce.JPG",
  },
  
  {
    name: "Reminder App",
    description:
      "This is a reminder web application used to increase customer retention at Royal oven by notifying user of there near occassions and lead them to by pastries for the occasion.",
    category: ["React", "Firebase", "API"],
    deploy_url: "https://royaloven.netlify.app/",
    github_url: "https://github.com/msumari",
    key_tech: ["React", "Firebase", "SMS_API"],
    image_path: "/image/royal.JPG",
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
