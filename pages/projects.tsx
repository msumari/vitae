import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeFadeIn, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectNavBar from "../components/ProjectNavBar";
import { project } from "../data";
import { Category } from "../type";

const projects = () => {
  const [projects, setProjects] = useState(project);
  const [active, setActive] = useState("all");
  const handlerFilter = (category: Category | "all") => {
    if (category === "all") {
      setProjects(project);
      setActive(category);
      return;
    }
    const filtered = project.filter((pro) => pro.category.includes(category));
    setProjects(filtered);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-auto"
      style={{ height: "80vh" }}
    >
      <nav>
        <ProjectNavBar funell={handlerFilter} active={active} />
      </nav>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((pro) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 p-2 sm:col-span-6 lg:col-span-4"
            key={pro.name}
          >
            <ProjectCard project={pro} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default projects;
