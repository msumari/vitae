import { FunctionComponent } from "react";
import { Iskill } from "../type";

import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: Iskill;
}> = ({ data: { name, Icon, level } }) => {
  const bar_width = `${level}`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-500 rounded-full">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-yellow-600 to-red-700"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
