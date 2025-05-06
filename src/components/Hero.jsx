/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className=" text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Fajri Khairan Masti
          </motion.h1>

          <motion.span
            whileTap={{ scale: 1.05 }}
            drag="x"
            dragConstraints={{ left: -80, right: 80 }}
            className="bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-semibold mb-6 block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Web Developer
          </motion.span>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sebagai web developer, saya menguasai pengembangan frontend dan
            backend, menciptakan aplikasi web yang fungsional dan menarik.
            Dengan pengalaman menggunakan React, Tailwind CSS untuk tampilan
            pengguna, serta Spring Boot dan database untuk membangun sistem
            backend yang efisien dan aman. Saya selalu
            bersemangat untuk mengeksplorasi alat dan framework baru, serta
            terus meningkatkan keterampilan saya dalam industri yang terus
            berkembang ini.
          </motion.p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src={profile}
            alt="Fajri Khairan Masti"
            className="rounded-full border-4 border-cyan-500 shadow-[0_0_30px_#0ff5] object-cover w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
