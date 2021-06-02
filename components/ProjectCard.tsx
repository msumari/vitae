import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Iproject } from "../type";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: Iproject;
}> = ({
  project: {
    category,
    deploy_url,
    description,
    github_url,
    image_path,
    key_tech,
    name,
  },
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShow(true)}
        width="300"
        height="150"
        layout="responsive"
      />

      <p className="my-2 text-center">{name}</p>
      {show && (
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-400 rounded-md shadow-custom-light dark:shadow-custom-dark md:grid-cols-2 gap-x-12 dark:text-white dark:bg-gray-900"
        >
          <div className="p-2 ">
            <motion.div variants={fadeInUp}>
              <img src={image_path} alt={name} />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-600 rounded"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deploy_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-600 rounded "
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp}>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">{name}</h2>
            <h3 className="px-2 mb-3 font-medium text-justify">
              {description}
            </h3>
            <motion.div className="flex flex-wrap p-2 mt-5 space-x-3 text-sm font-medium tracking-wider">
              {key_tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 text-white bg-gray-600 rounded"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => {
              setShow(false);
            }}
            className="absolute p-1 text-white bg-red-600 rounded-full top-2 right-3 focus:outline-none dark:bg-red-900"
          >
            <IoMdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
