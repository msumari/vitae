import { FunctionComponent } from "react";
import { Category } from "../type";

const Navitem: FunctionComponent<{
  value: Category | "all";
  funell: Function;
  active: string;
}> = ({ value, funell, active }) => {
  let className =
    "font-semibold capitalize list-none cursor-pointer hover:text-yellow-700";

  if (active === value) {
    className =
      "font-semibold text-yellow-700 capitalize list-none cursor-pointer hover:text-red-700";
  }

  return (
    <li className={className} onClick={() => funell(value)}>
      {value}
    </li>
  );
};

const ProjectNavBar: FunctionComponent<{
  funell: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex p-3 space-x-3 overflow-x-auto ">
      <Navitem value="all" {...props} />
      <Navitem value="React" {...props} />
      <Navitem value="Node" {...props} />
      <Navitem value="Flask" {...props} />
      <Navitem value="Firebase" {...props} />
      <Navitem value="MongoDB" {...props} />
      <Navitem value="API" {...props} />
    </div>
  );
};

export default ProjectNavBar;
