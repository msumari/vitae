import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { service } from "../data";

const index = () => {
  return (
    <motion.div
      variants={routeFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h5 className="my-3 font-medium text-justify">
        I am a highly competent web application software developer with
        professional experience developing a wide range of tools for both
        frontend and backend for a range of clients. I have proven expertise in
        building SPA's and API's. I understand the web app project lifecycle in
        depth and am very capable at all aspects of development from project
        planning to requirements gathering through to writing code and support
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-gray-800"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">What I Offer</h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 lg:grid-cols-2"
        >
          {service.map((serv) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-black"
              key={serv.title}
            >
              <ServiceCard service={serv} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
