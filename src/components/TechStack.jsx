/* eslint-disable no-unused-vars */
import { RiVercelLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { SiThymeleaf, SiTypescript, SiMysql } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiFramer } from "react-icons/fi";

const variants = (duration, delay) => ({
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: [-5, 5, -5],
    transition: {
      opacity: { duration: 0.5, delay },
      y: {
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },

});

const techs = [
  { icon: <BiLogoSpringBoot />, color: "#6DB33F", duration: 2 },
  { icon: <SiThymeleaf />, color: "#005F0F", duration: 2.2 },
  { icon: <FaNodeJs />, color: "#339933", duration: 1.8 },
  { icon: <RiReactjsLine />, color: "#61DAFB", duration: 2 },
  { icon: <RiTailwindCssFill />, color: "#06B6D4", duration: 2.4 },
  { icon: <FiFramer />, color: "#0055FF", duration: 1.7 },
  { icon: <SiTypescript />, color: "#3178C6", duration: 2.3 },
  { icon: <RiVercelLine />, color: "#ffffff", duration: 2 },
  { icon: <BiLogoPostgresql />, color: "#336791", duration: 1.9 },
  { icon: <SiMysql />, color: "#00758F", duration: 2.1 },
];

const TechStack = () => {
  return (
    <section className="border-b border-neutral-800 text-white py-16 px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-4xl font-bold mb-14">
        Tech <span className="text-cyan-500">Stack</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={variants(tech.duration, index * 0.3)}
            initial="initial"
            animate="animate"
            className="rounded-4xl text-7xl border-4 border-neutral-800 p-3 shadow-md  hover:scale-105 duration-300"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
