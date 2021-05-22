import { FunctionComponent } from "react";
import { Iskill } from "../type";

const Bar: FunctionComponent<{
  data: Iskill;
}> = ({ data: { name, Icon, level } }) => {
  return (
    <div className="my-2 text-white bg-gray-500 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-yellow-600 to-red-700"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
