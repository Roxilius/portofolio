/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { projects } from "..";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4">
      <h1 className="my-20 text-center text-4xl font-bold text-white">
        Projects
      </h1>
      <div className="flex flex-col gap-16">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="flex flex-col lg:flex-row items-center gap-6 p-6 shadow-lg"
          >
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={p.image || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={p.title}
                className="rounded-lg w-full max-w-xs object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-semibold text-white mb-2">{p.title}</h2>
              <p className="text-neutral-400 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700/10 text-purple-400 border border-purple-600 text-sm px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:underline"
                >
                  GitHub
                </a>
                {p.visit && (
                  <a
                    href={p.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
