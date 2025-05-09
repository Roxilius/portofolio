/* eslint-disable no-unused-vars */
import { RiVercelLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { SiThymeleaf, SiTypescript, SiMysql } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiFramer } from "react-icons/fi";

const variants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techs = [
  {
    icon: <BiLogoSpringBoot />,
    color: "#6DB33F",
    duration: 1.5,
  },
  { icon: <SiThymeleaf />, color: "#005F0F", duration: 2 },
  { icon: <FaNodeJs />, color: "#339933", duration: 1.5 },
  {
    icon: <RiReactjsLine />,
    color: "#61DAFB",
    duration: 2,
  },
  {
    icon: <RiTailwindCssFill />,
    color: "#06B6D4",
    duration: 1.5,
  },
  {
    icon: <FiFramer />,
    color: "#0055FF",
    duration: 2,
  },
  {
    icon: <SiTypescript />,
    color: "#3178C6",
    duration: 1.5,
  },
  {
    icon: <RiVercelLine />,
    color: "#ffffff",
    duration: 2,
  },
  {
    icon: <BiLogoPostgresql />,
    color: "#336791",
    duration: 1.5,
  },
  { icon: <SiMysql />, color: "#00758F", duration: 2 },
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
            variants={variants(tech.duration)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: index * 0.3 }}
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
