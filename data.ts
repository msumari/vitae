import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { IoMdPhonePortrait } from "react-icons/io";
import { GiServerRack } from "react-icons/gi";
import { Iservice } from "./type";

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
