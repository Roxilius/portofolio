/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="border-b border-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className="rounded-3xl border-4 border-cyan-500 shadow-xl w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover hover:scale-105 transition-transform"
            src={profile}
            alt="Fajri Khairan Masti"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Saya memiliki keahlian dalam pengembangan aplikasi berbasis web yang
            responsif dan userfriendly. Menguasai berbagai bahasa pemrograman
            dan framework dan lebih berfokus sebagai backend developer
            menggunakan Spring Boot, Saya memiliki kemampuan bekerjasama
            dalam tim, komunikasi, dan pemecahan masalah yang baik. Saya
            termotivasi untuk terus belajar dan berkembang di bidang web
            development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
