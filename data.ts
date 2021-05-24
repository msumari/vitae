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
    level: "60%",
    Icon: FaPython,
  },
  {
    name: "Node",
    level: "80%",
    Icon: IoLogoNodejs,
  },
  {
    name: "Flask",
    level: "40%",
    Icon: SiFlask,
  },
  {
    name: "Tailwind",
    level: "50%",
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
    name: "Framer",
    level: "60%",
    Icon: SiFramer,
  },
  {
    name: "MongoDB",
    level: "50%",
    Icon: SiMongodb,
  },
  {
    name: "Docker",
    level: "30%",
    Icon: FaDocker,
  },
  {
    name: "Kubernetes",
    level: "40%",
    Icon: SiKubernetes,
  },
  {
    name: "GCP",
    level: "30%",
    Icon: SiGooglecloud,
  },
];

export const project: Iproject[] = [
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
    name: "E-pharmacy",
    description:
      "This is a e-commerce build that focused on the medical phamarcy products to final consumers directly.",
    category: ["React", "Node"],
    deploy_url: "https://e-phamarcy.netlify.app/",
    github_url: "https://github.com/msumari/E-commerce",
    key_tech: ["React", "Firebase", "Context API"],
    image_path: "/image/e-commerce.JPG",
  },
  {
    name: "E-pharmacy",
    description:
      "This is a e-commerce build that focused on the medical phamarcy products to final consumers directly.",
    category: ["React", "MongoDB"],
    deploy_url: "https://e-phamarcy.netlify.app/",
    github_url: "https://github.com/msumari/E-commerce",
    key_tech: ["React", "Firebase", "Context API"],
    image_path: "/image/e-commerce.JPG",
  },
  {
    name: "E-pharmacy",
    description:
      "This is a e-commerce build that focused on the medical phamarcy products to final consumers directly.",
    category: ["Flask", "MongoDB"],
    deploy_url: "https://e-phamarcy.netlify.app/",
    github_url: "https://github.com/msumari/E-commerce",
    key_tech: ["React", "Firebase", "Context API"],
    image_path: "/image/e-commerce.JPG",
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
    name: "E-pharmacy",
    description:
      "This is a e-commerce build that focused on the medical phamarcy products to final consumers directly.",
    category: ["React", "Firebase"],
    deploy_url: "https://e-phamarcy.netlify.app/",
    github_url: "https://github.com/msumari/E-commerce",
    key_tech: ["React", "Firebase", "Context API"],
    image_path: "/image/e-commerce.JPG",
  },
];
