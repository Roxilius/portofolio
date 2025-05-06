/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { projects } from "..";

const imageVariants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const contentVariants = {
  offscreen: { opacity: 0, x: 100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-20 px-4">
      <h1 className="my-16 text-center text-3xl md:text-4xl font-bold text-white">
        Projects
      </h1>
      <div className="flex flex-col gap-16 max-w-screen-xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-6 rounded-xl shadow-lg"
          >
            <motion.div
              className="w-full flex justify-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={imageVariants}
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-lg w-full max-w-md aspect-video object-cover"
              />
            </motion.div>

            <motion.div
              className="text-white"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={contentVariants}
            >
              <h2 className="text-2xl font-semibold mb-3 text-[#E0E0E0]">
                {p.title}
              </h2>
              <p className="text-neutral-300 mb-4 text-sm md:text-base">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1A1A40] text-[#7DD3FC] border border-[#7DD3FC] text-xs md:text-sm px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38BDF8] hover:underline"
                >
                  GitHub
                </a>
                {p.visit && (
                  <a
                    href={p.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
