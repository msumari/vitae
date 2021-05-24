import { useState } from "react";
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
    <div className="px-5 py-2 overflow-y-auto" style={{ height: "80vh" }}>
      <nav>
        <ProjectNavBar funell={handlerFilter} active={active} />
      </nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((pro) => (
          <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
            <ProjectCard project={pro} key={pro.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
